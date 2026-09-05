import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

// 특정 링크의 클릭 수를 1 증가시키고 갱신된 값을 반환한다.
export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  if (!id) {
    return NextResponse.json({ error: "링크 id가 필요합니다." }, { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db();
    const result = await db
      .collection<{ _id: string; count: number }>("clicks")
      .findOneAndUpdate(
        { _id: id },
        { $inc: { count: 1 } },
        { upsert: true, returnDocument: "after" },
      );

    return NextResponse.json({ id, count: result?.count ?? 1 });
  } catch (error) {
    console.error("클릭 수 증가 실패:", error);
    return NextResponse.json(
      { error: "클릭 수를 갱신하지 못했습니다." },
      { status: 500 },
    );
  }
}
