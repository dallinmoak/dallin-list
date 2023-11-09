import { createClient } from "@/utils/server";
import Header from "@/components/Header";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Index() {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      console.log('create client from home page failed', e);
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      {isSupabaseConnected ? null : <div>supabase not connected </div>}
      {user ? (
        <div>
          <p>Welcome to the app!</p>
          <i className="symbol">checklist</i>
        </div>
      ) : (
        <div>
         No To-Do list available.&nbsp;<Link href="/login">sign in</Link>&nbsp;to access a list.
        </div>
      )}
    </div>
  );
}
