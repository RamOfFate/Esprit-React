import { Outlet } from "react-router";
import Sidebar from "./sidebar";

export default function Home() {
  return (
    <div className="w-full h-full bg-white rounded-4xl p-2 overflow-hidden flex shadow">
      <Sidebar />
      <div className="w-full h-full bg-neutral-100 rounded-4xl grid place-items-center">
        <Outlet />
      </div>
    </div>
  );
}
