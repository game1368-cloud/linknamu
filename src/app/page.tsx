import type { ReactNode } from "react";

type LinkItem = {
  label: string;
  href: string;
  icon: ReactNode;
};

const profile = {
  name: "김링크",
  bio: "한 사람도 버리지 않는다 · 나는 수학교사다",
};

const links: LinkItem[] = [
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.9-.39.98 0 1.98.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.12 3.06.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-3.96 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.91V8.48Z" />
      </svg>
    ),
  },
  {
    label: "Blog",
    href: "https://example.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" d="M2 12h20M12 2c2.5 2.7 3.8 6.2 3.8 10s-1.3 7.3-3.8 10c-2.5-2.7-3.8-6.2-3.8-10S9.5 4.7 12 2Z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-4 py-12 font-sans dark:bg-black">
      <main className="w-full max-w-sm rounded-[2rem] border border-black/[.06] bg-white px-8 py-10 shadow-sm dark:border-white/[.08] dark:bg-zinc-950">
        {/* 프로필 */}
        <section className="flex flex-col items-center text-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-emerald-200 to-emerald-400 text-4xl dark:from-emerald-800 dark:to-emerald-600">
            🌳
          </div>
          <h1 className="mt-5 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            {profile.name}
          </h1>
          <p className="mt-2 max-w-[240px] text-sm leading-6 text-zinc-500 dark:text-zinc-400">
            {profile.bio}
          </p>
        </section>

        {/* 링크 카드 */}
        <nav className="mt-8 flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-black/[.08] px-5 py-4 text-sm font-medium text-zinc-800 transition-colors hover:border-transparent hover:bg-emerald-50 dark:border-white/[.1] dark:text-zinc-100 dark:hover:bg-emerald-950/40"
            >
              <span className="text-emerald-600 dark:text-emerald-400">{link.icon}</span>
              {link.label}
            </a>
          ))}
        </nav>

        {/* 브랜드 장식 */}
        <div className="mt-10 flex justify-center gap-4 text-emerald-400 dark:text-emerald-700">
          <span aria-hidden>🌱</span>
          <span aria-hidden>🌱</span>
          <span aria-hidden>🌱</span>
        </div>
      </main>
    </div>
  );
}
