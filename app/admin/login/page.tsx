import LoginForm from "./LoginForm";

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function firstString(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

export default async function AdminLoginPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const queryError = firstString(params.error);
  const queryMessage = firstString(params.message);

  return <LoginForm queryError={queryError} queryMessage={queryMessage} />;
}
