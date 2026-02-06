import { NavLink } from "react-router";

export default function Sidebar() {
  let projects: string[] = ["counter", "whos-stupid"];

  return (
    <div className="w-70 h-full rounded-4xl text-center select-none text-blue-950">
      <div className="flex items-center justify-center gap-4">
        <div className="bg-blue-100 h-10 w-10 rounded-full">
          <div className="grid grid-cols-2 grid-rows-2 gap-1 w-full h-full place-items-center p-2">
            <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
          </div>
        </div>
        <p className="text-2xl font-semibold my-8">Interface</p>
      </div>

      <nav className="flex flex-col gap-2">
        {projects.map((value, index) => (
          <NavLink
            to={`/${value}`}
            key={index}
            className={({ isActive }) =>
              `w-full h-14 px-6 cursor-pointer transition-all ${
                isActive
                  ? "border-r-8 border-blue-950"
                  : "border-r-0 border-transparent"
              }`
            }
          >
            {({ isActive }) => (
              <div
                className={`h-full rounded-lg p-2 flex items-center gap-4 transition-colors ${
                  isActive
                    ? "bg-fuchsia-100"
                    : "bg-transparent hover:bg-neutral-50"
                }`}
              >
                <div className="h-full aspect-square bg-white rounded-lg grid items-center">
                  <p>{index}</p>
                </div>
                <div className="w-full">
                  <p className="font-semibold text-sm text-start uppercase tracking-tight">
                    {value.replace("-", " ")}
                  </p>
                </div>
              </div>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
