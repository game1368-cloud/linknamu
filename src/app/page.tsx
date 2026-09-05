import Image from "next/image";
import LinkList, { type LinkItem } from "@/components/LinkList";

const profile = {
  name: "강창대",
  bio: "한 사람도 소외시키지 않는 수학교사",
};

const links: LinkItem[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.9-.39.98 0 1.98.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.12 3.06.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-3.96 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.91V8.48Z" />
      </svg>
    ),
  },
  {
    id: "blog",
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
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-rose-100 px-6 py-16 dark:from-stone-950 dark:via-neutral-900 dark:to-amber-950">
      {/* 은은한 배경 장식 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl dark:bg-amber-900/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -bottom-24 h-80 w-80 rounded-full bg-rose-200/40 blur-3xl dark:bg-rose-900/10"
      />

      <main className="relative w-full max-w-sm">
        {/* 프로필 */}
        <section className="flex flex-col items-center text-center">
          <div className="relative h-32 w-32 overflow-hidden rounded-full shadow-[0_12px_30px_-8px_rgba(154,82,18,0.35)] ring-4 ring-white/70 dark:ring-white/10">
            <Image
              src="/profile.jpg"
              alt={profile.name}
              fill
              sizes="128px"
              className="object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_2px_6px_rgba(255,255,255,0.5)]" />
          </div>
          <h1 className="mt-6 text-2xl font-bold tracking-tight text-stone-800 dark:text-stone-50">
            {profile.name}
          </h1>
          <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-stone-500 dark:text-stone-300/80">
            {profile.bio}
          </p>
        </section>

        {/* 링크 카드 */}
        <LinkList links={links} />
      </main>
    </div>
  );
}
