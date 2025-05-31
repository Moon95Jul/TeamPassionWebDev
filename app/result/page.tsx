"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image"; // 이미지 컴포넌트 import 추가

export default function ResultPage() {
  const params = useSearchParams();
  const menu = params.get("menu"); // 예: '제육덮밥'
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/input");
  };

  // 이미지 경로 설정 (확장자가 .png로 가정)
  const imageSrc = menu ? `/images/${menu}.png` : null;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">오늘의 추천 메뉴는</h1>

      {imageSrc && (
        <Image
          src={imageSrc}
          alt={menu || "추천메뉴"}
          width={300}
          height={300}
          className="rounded-lg shadow-lg mb-4"
        />
      )}

      <div className="text-2xl text-blue-600 mb-4">{menu}</div>

      <button
        onClick={handleSubmit}
        className="bg-gray-800 text-white p-3 rounded hover:bg-gray-700"
      >
        다시 추천받기
      </button>
    </div>
  );
}
