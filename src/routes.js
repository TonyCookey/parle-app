import Login from "@/components/Login"
import Register from "@/components/Register"

export const routes = [
  { path: "/", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register }
]
