import { createClient } from "@/utils/server";
import { cookies } from "next/headers";

export default async function getListByUser(userId) {
  "use server";
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const res = await supabase.from("list_items").select().eq("user_id", userId);
  const list = res.data;
  return list;
}
