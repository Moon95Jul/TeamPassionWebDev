"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Input() {
  const router = useRouter();
  const [budget, setBudget] = useState(23000);

  const handleSubmit = () => {
    router.push("/result");
  };

  return (
    <div className="min-h-screen px-4 py-6 bg-white text-black">
      <button onClick={() => router.back()} className="text-xl mb-4">
        ←
      </button>
      <h1 className="text-2xl font-bold mb-6">기분</h1>

      <div className="space-y-4">
        <select className="w-full p-3 border rounded">
          <option>유형</option>
        </select>
        <select className="w-full p-3 border rounded">
          <option>항목 1</option>
        </select>
        <select className="w-full p-3 border rounded">
          <option>항목 2</option>
        </select>
        <select className="w-full p-3 border rounded">
          <option>날씨</option>
        </select>

        <div>
          <label className="block mb-1">예산</label>
          <input
            type="range"
            min="0"
            max="50000"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-right font-semibold mt-1">
            ₩{budget.toLocaleString()}
          </div>
        </div>

        <button className="w-full p-3 border rounded">📍 현재 위치 사용</button>

        <button
          onClick={handleSubmit}
          className="w-full bg-gray-800 text-white p-3 rounded hover:bg-gray-700"
        >
          추천 받기
        </button>
      </div>
    </div>
  );
}
