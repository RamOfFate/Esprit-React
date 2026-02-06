import { useEffect, useState } from "react";

export default function WhosStupid() {
  const [victim, setVictim] = useState("no one");
  useEffect(() => {
    if (victim === "") {
      setVictim("no one");
    }
  }, [victim]);
  return (
    <div className="shadow">
      <input
        type="text"
        placeholder="name"
        onChange={(e) => {
          setVictim(e.target.value);
        }}
        className="bg-white p-2 px-4 rounded-t border-b border-slate-200"
      />
      <p className="bg-white p-5 rounded-b">
        <span className="">{victim} is stupid</span>
      </p>
    </div>
  );
}
