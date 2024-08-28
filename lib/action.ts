import { signIn, signOut } from "@/lib/auth";

export const handleLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};
