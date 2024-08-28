import { handleLogin } from "@/lib/action";
import React from "react";

function LoginPage() {
  return (
    <div>
      <form action={handleLogin}>
        <button>Login with Github</button>
      </form>
    </div>
  );
}

export default LoginPage;
