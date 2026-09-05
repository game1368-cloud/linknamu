"use client";

import { useEffect, useState, type ReactNode } from "react";

export type LinkItem = {
  id: string;
  label: string;
  href: string;
  icon: ReactNode;
};

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 데이터를 받기 전에는 모두 0회로 표시된다.
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    let cancelled = false;

    fetch("/api/clicks")
      .then((res) => res.json())
      .then((data: { counts?: Record<string, number> }) => {
        if (!cancelled && data.counts) {
          setCounts(data.counts);
        }
      })
      .catch(() => {
        // 조회에 실패하면 0회 표시를 그대로 유지한다.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  function handleClick(id: string) {
    // 서버 응답을 기다리지 않고 즉시 화면에 반영한다.
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

    fetch(`/api/clicks/${id}`, { method: "POST" }).catch(() => {
      // 실패해도 다음 방문 시 서버 값으로 다시 동기화된다.
    });
  }

  return (
    <nav className="mt-10 flex flex-col gap-4">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleClick(link.id)}
          className="flex items-center gap-3 rounded-2xl border border-white/50 bg-white/40 px-5 py-4 text-sm font-medium text-stone-700 shadow-[0_4px_20px_-6px_rgba(120,53,15,0.15)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/60 dark:border-white/10 dark:bg-white/5 dark:text-stone-100 dark:hover:bg-white/10"
        >
          <span className="text-amber-600 dark:text-amber-400">{link.icon}</span>
          <span className="flex-1">{link.label}</span>
          <span className="text-xs font-normal text-stone-400 dark:text-stone-400/70">
            {counts[link.id] ?? 0}회
          </span>
        </a>
      ))}
    </nav>
  );
}
