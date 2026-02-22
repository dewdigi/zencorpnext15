import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

const isHistoryMode = process.argv.includes("--history");
const knownLeakedValues = [process.env.LEAKED_KEY_TO_CHECK].filter(Boolean);

const patternDefinitions = [
  { name: "Resend API key-like token", regex: /\bre_[A-Za-z0-9_]{20,}\b/g },
  { name: "RESEND_API_KEY assignment", regex: /RESEND_API_KEY\s*=\s*[^\s#]+/g },
  { name: "RESEND_SMTP_PASSWORD assignment", regex: /RESEND_SMTP_PASSWORD\s*=\s*[^\s#]+/g },
];

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

  for (const pattern of patternDefinitions) {
    const matches = content.match(pattern.regex);
    if (matches?.length) {
      findings.push(`${sourceLabel}: ${pattern.name}`);
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
      snapshot = runGit(["grep", "-nE", "re_[A-Za-z0-9_]{20,}|RESEND_API_KEY\\s*=|RESEND_SMTP_PASSWORD\\s*=", sha]);
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
