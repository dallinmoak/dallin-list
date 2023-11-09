import { createClient } from "@/utils/server";
import Header from "@/components/Header";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Index() {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
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
      <div>{isSupabaseConnected && "supabase is connected"}</div>
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
