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
      <h1 className="text-2xl font-bold mb-6">오늘은 무엇을 먹을까?</h1>

      <div className="space-y-4">
        <div>
          <label className="block text-xs text-gray-500 mb-1">
            음식 종류를 선택하세요
          </label>
          <select className="w-full p-3 border rounded">
            <option>한식</option>
            <option>중식</option>
            <option>양식</option>
          </select>
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1">
            주재료를 선택하세요
          </label>
          <select className="w-full p-3 border rounded">
            <option>소</option>
            <option>돼지</option>
            <option>닭</option>
          </select>
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1">
            주식(밥/빵/면)을 선택하세요
          </label>
          <select className="w-full p-3 border rounded">
            <option>밥</option>
            <option>빵</option>
            <option>면</option>
          </select>
        </div>
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
