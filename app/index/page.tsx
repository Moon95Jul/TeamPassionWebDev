import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-white">
      <h1 className="text-3xl font-bold mb-10 text-black">오늘 뭐 먹지?</h1>
      <Link href="/input">
        <button className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700">
          메뉴 추천 받기
        </button>
      </Link>
    </div>
  );
}
