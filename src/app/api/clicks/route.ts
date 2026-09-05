import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

// 모든 링크의 현재 클릭 수를 { [linkId]: count } 형태로 반환한다.
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const docs = await db
      .collection<{ _id: string; count: number }>("clicks")
      .find({})
      .toArray();

    const counts: Record<string, number> = {};
    for (const doc of docs) {
      counts[doc._id] = doc.count;
    }

    return NextResponse.json({ counts });
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return NextResponse.json(
      { error: "클릭 수를 불러오지 못했습니다." },
      { status: 500 },
    );
  }
}
