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

  const signOut = async () => {
    "use server";
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return (
    <div>
      <Header />
      {isSupabaseConnected ? null : <div>supabase not connected </div>}
      {user ? (
        <div>
          user authenticated: {user.email}
          <form action={signOut}>
            <button>sign out</button>
          </form>
        </div>
      ) : (
        <div>
          unauthenticated<Link href="/login">sign in</Link>
        </div>
      )}
    </div>
  );
}
