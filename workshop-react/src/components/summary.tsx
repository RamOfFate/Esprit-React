export default function Summary() {
  const chapters = [
    "Class Component VS Functional Component",
    "Component Life-cycle",
    "Props & States",
  ];
  return (
    <div className="w-full h-full bg-white shadow-lg rounded flex flex-col items-center overflow-hidden border border-neutral-300">
      <ul className="w-full">
        {chapters.map((title, index) => (
          <li
            key={index}
            className="even:bg-neutral-100 odd:bg-neutral-200 p-2 hover:bg-slate-300 cursor-pointer"
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
}
