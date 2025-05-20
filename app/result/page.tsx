"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import kimchi from "../../resource/img/kimchi_sample.webp";

export default function Result() {
  const router = useRouter();

  return (
    <div className="min-h-screen px-4 py-6 bg-white text-black">
      <button onClick={() => router.back()} className="text-xl mb-4">
        ←
      </button>

      <h1 className="text-2xl font-bold mb-4">🔥 김치찌개</h1>

      <div className="w-full h-64 relative mb-4">
        <Image
          src={kimchi} // 퍼블릭 폴더에 이미지 추가 필요
          alt="김치찌개"
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>

      <p className="mb-6 text-lg font-medium">기운 없을 땐 잘끓한 국물 한입!</p>

      <div className="flex flex-wrap gap-2">
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
          #매운맛
        </span>
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
          #국물요리
        </span>
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
          #든든한
        </span>
      </div>
    </div>
  );
}
