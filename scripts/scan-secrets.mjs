import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

const isHistoryMode = process.argv.includes("--history");
const knownLeakedValues = [process.env.LEAKED_KEY_TO_CHECK].filter(Boolean);

const tokenPattern = /\bre_[A-Za-z0-9_]{20,}\b/g;
const sensitiveEnvKeys = ["RESEND_API_KEY", "RESEND_SMTP_PASSWORD"];

function runGit(args) {
  return execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}

function isTextFile(path) {
  const lower = path.toLowerCase();
  if (
    lower.endsWith(".png") ||
    lower.endsWith(".jpg") ||
    lower.endsWith(".jpeg") ||
    lower.endsWith(".gif") ||
    lower.endsWith(".webp") ||
    lower.endsWith(".ico") ||
    lower.endsWith(".pdf") ||
    lower.endsWith(".woff") ||
    lower.endsWith(".woff2")
  ) {
    return false;
  }
  return true;
}

function scanContent(content, sourceLabel) {
  const findings = [];
  for (const leakedValue of knownLeakedValues) {
    if (content.includes(leakedValue)) {
      findings.push(`${sourceLabel}: known leaked key detected`);
    }
  }

  const tokenMatches = content.match(tokenPattern);
  if (tokenMatches?.length) {
    findings.push(`${sourceLabel}: Resend API key-like token`);
  }

  const lines = content.split(/\r?\n/);
  for (const [index, line] of lines.entries()) {
    for (const key of sensitiveEnvKeys) {
      const match = line.match(new RegExp(`^\\s*${key}\\s*=\\s*(.*)$`));
      if (!match) {
        continue;
      }
      const value = match[1].trim();
      if (!value) {
        continue;
      }
      if (value === '""' || value === "''") {
        continue;
      }
      const normalized = value.replace(/^['"]|['"]$/g, "");
      if (/^<.+>$/.test(normalized)) {
        continue;
      }
      if (normalized.toLowerCase().includes("changeme")) {
        continue;
      }
      if (normalized.toLowerCase().includes("replace_me")) {
        continue;
      }
      if (normalized.toLowerCase().includes("your_")) {
        continue;
      }
      if (normalized.toLowerCase().includes("example")) {
        continue;
      }
      if (normalized.toLowerCase().startsWith("process.env.")) {
        continue;
      }
      if (normalized === "${RESEND_API_KEY}" || normalized === "${RESEND_SMTP_PASSWORD}") {
        continue;
      }
      if (normalized.length >= 8) {
        findings.push(`${sourceLabel}:${index + 1}: ${key} appears to have a real value`);
      }
    }
  }
  return findings;
}

function scanWorkingTree() {
  const files = runGit(["ls-files"]).split("\n").filter(Boolean).filter(isTextFile);
  const findings = [];

  for (const file of files) {
    let content = "";
    try {
      content = readFileSync(file, "utf8");
    } catch {
      continue;
    }
    findings.push(...scanContent(content, file));
  }
  return findings;
}

function scanHistory() {
  const commits = runGit(["rev-list", "--all"]).split("\n").filter(Boolean);
  const findings = [];

  for (const sha of commits) {
    let snapshot = "";
    try {
      snapshot = runGit(["grep", "-nE", "re_[A-Za-z0-9_]{20,}", sha]);
    } catch {
      continue;
    }
    if (snapshot) {
      findings.push(`commit ${sha}:\n${snapshot}`);
    }
  }
  return findings;
}

const findings = isHistoryMode ? scanHistory() : scanWorkingTree();

if (findings.length) {
  console.error("Secret scan failed. Findings:");
  for (const finding of findings) {
    console.error(`- ${finding}`);
  }
  process.exit(1);
}

console.log(isHistoryMode ? "Secret history scan passed." : "Secret working-tree scan passed.");
