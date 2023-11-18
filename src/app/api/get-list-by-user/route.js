import getListByUser from "@/utils/server/getListbyUser";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("id");
  const list = await getListByUser(userId);
  return Response.json(list);
}
