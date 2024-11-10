import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  // const data =await request.json()
  // return NextResponse.json(data)
  const data = await request.formData();
  console.log(data);

  return new Response(
    JSON.stringify({
      message: "uploading file",
    })
  );
}
