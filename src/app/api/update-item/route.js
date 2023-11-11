import { createClient } from "@/utils/server";
import { cookies } from "next/headers";

export async function POST(request) {
  const requestData = await request.json();
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const res = await supabase
    .from("list_items")
    .update(requestData)
    .eq("id", requestData.id)
    .select();
  const data = res.data;
  const item = data[0];
  return Response.json(item);
}
