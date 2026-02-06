import { useState } from "react";

export default function Counter(props: {
  initialCount: number;
  initialNegativeStep: number;
  initialPositiveStep: number;
}) {
  const [count, setCount] = useState(props.initialCount);
  const [negativeStep, setNegativeStep] = useState(props.initialNegativeStep);
  const [positiveStep, setPositiveStep] = useState(props.initialPositiveStep);

  return (
    <div className="border border-neutral-300 p-4 bg-white shadow space-y-8 w-min rounded-lg">
      <p className="font-semibold">Compteur: {count}</p>
      <div className="flex gap-2 mb-5">
        <div className="relative">
          <button
            onClick={() => setNegativeStep(negativeStep + 1)}
            className="cursor-pointer hover:bg-neutral-300 absolute -top-5 bg-neutral-200 w-full rounded-t"
          >
            -1
          </button>
          <button
            onClick={() => setNegativeStep(negativeStep - 1)}
            className="cursor-pointer hover:bg-neutral-300 absolute -bottom-5 bg-neutral-200 w-full rounded-b"
          >
            +1
          </button>
          <button
            className="bg-red-600 p-2 px-4 text-white font-semibold rounded shadow hover:bg-red-700 cursor-pointer active:scale-105"
            onClick={() => {
              setCount(() => count - props.initialNegativeStep);
            }}
          >
            {negativeStep}
          </button>
        </div>
        <button
          className="bg-green-600 p-2 px-4 text-white font-semibold rounded shadow hover:bg-green-700 cursor-pointer"
          onClick={() => {
            setCount(() => props.initialCount);
          }}
        >
          Reset
        </button>
        <div className="relative">
          <button
            onClick={() => setPositiveStep(() => positiveStep + 1)}
            className="cursor-pointer hover:bg-neutral-300 absolute -top-5 bg-neutral-200 w-full rounded-t"
          >
            -1
          </button>
          <button
            onClick={() => setPositiveStep(positiveStep - 1)}
            className="cursor-pointer hover:bg-neutral-300 absolute -bottom-5 bg-neutral-200 w-full rounded-b"
          >
            +1
          </button>
          <button
            className="bg-cyan-600 p-2 px-4 text-white font-semibold rounded shadow hover:bg-cyan-700 cursor-pointer"
            onClick={() => {
              setCount((count) => count + props.initialPositiveStep);
            }}
          >
            {positiveStep}
          </button>
        </div>
      </div>
    </div>
  );
}
