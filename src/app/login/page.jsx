import Link from "next/link";
import { headers, cookies } from "next/headers";
import { createClient } from "@/utils/server";
import { redirect } from "next/navigation";
import Input from "@/components/UI/input";

export default function Login({ searchParams }) {
  const signIn = async (formData) => {
    "use server";

    const email = formData.get("email");
    const password = formData.get("password");
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log("sign in error", error);
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/");
  };

  // const signUp = async (formData) => {
  //   "use server";

  //   const origin = headers().get("origin");
  //   const email = formData.get("email");
  //   const password = formData.get("password");
  //   const cookieStore = cookies();
  //   const supabase = createClient(cookieStore);

  //   const { error } = await supabase.auth.signUp({
  //     email,
  //     password,
  //     options: {
  //       emailRedirectTo: `${origin}/auth/callback`,
  //     },
  //   });

  //   if (error) {
  //     return redirect("/login?message=Could not authenticate user");
  //   }

  //   return redirect("/login?message=Check email to continue sign in process");
  // };

  return (
    <div>
      <form action={signIn}>
        <label htmlFor="email">Email</label>
        <Input name="email" placeholder="you@example.com" required />
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button>Sign In</button>
        {/* <button formAction={signUp}>Sign Up</button> */}
        {searchParams?.message && <p>{searchParams.message}</p>}
      </form>
    </div>
  );
}
