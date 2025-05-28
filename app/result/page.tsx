"use client";

import { useSearchParams } from "next/navigation";

export default function ResultPage() {
  const params = useSearchParams();
  const menu = params.get("menu");

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">오늘의 추천 메뉴는</h1>
      <div className="text-2xl text-blue-600">{menu}</div>
    </div>
  );
}
