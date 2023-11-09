import { createClient } from "@/utils/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function LeftOption() {
  const cookieStore = cookies();
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

  if (user) {
    return (
      <div>
        {user.email}
        <form action={signOut}>
          <button>sign out</button>
        </form>
      </div>
    );
  } else {
    return <Link href="/login">sign in</Link>;
  }
}
