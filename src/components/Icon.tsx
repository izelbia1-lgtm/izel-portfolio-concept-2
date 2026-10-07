type IconName =
  | "github"
  | "linkedin"
  | "code"
  | "external"
  | "download"
  | "branch"
  | "layers"
  | "database"
  | "location"
  | "mail";

const paths: Record<IconName, string> = {
  github:
    "M9 19c-4.3 1.3-4.3-2.2-6-2.7M15 22v-3.9c0-1.1-.4-1.8-.8-2.2 2.8-.3 5.8-1.4 5.8-6.2A4.9 4.9 0 0 0 18.7 6a4.5 4.5 0 0 0-.1-3.6s-1.1-.4-3.7 1.4a12.7 12.7 0 0 0-6.8 0C5.5 2 4.4 2.4 4.4 2.4A4.5 4.5 0 0 0 4.3 6 4.9 4.9 0 0 0 3 9.7c0 4.8 3 5.9 5.8 6.2-.4.4-.8 1.1-.8 2.2V22",
  linkedin: "M6 9v12M6 4v.01M10 21V9h4v2c1-3 7-3 7 2v8M2 9h4M2 21h4",
  code: "m8 6-6 6 6 6m8-12 6 6-6 6m-3-16-2 20",
  external:
    "M14 3h7v7m0-7L10 14M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5",
  download: "M12 3v12m-5-5 5 5 5-5M4 16v4h16v-4",
  branch:
    "M6 6v12m12-12a6 6 0 0 1-6 6H6M6 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4m12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4M6 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4",
  layers: "m12 3 10 5-10 5L2 8l10-5M2 12l10 5 10-5M2 16l10 5 10-5",
  database:
    "M20 6c0 2-4 3-8 3S4 8 4 6s4-3 8-3 8 1 8 3Zm-16 0v12c0 2 4 3 8 3s8-1 8-3V6M4 12c0 2 4 3 8 3s8-1 8-3",
  location:
    "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Zm-5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
  mail: "M3 5h18v14H3V5Zm0 0 9 8 9-8",
};

export function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
