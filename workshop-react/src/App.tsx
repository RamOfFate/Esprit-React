import { Route, Routes } from "react-router";
import "./App.css";
import Counter from "./components/counter";
import Home from "./layout/home";
import NotFound from "./layout/not-found";
import WhosStupid from "./components/whos-stupid";

function App() {
  return (
    <div className="fixed inset-0 bg-neutral-200 p-8 -z-20 rounded-lg">
      <div className="w-200 h-200 rounded-full bg-blue-300 fixed -top-100 -left-100 -z-10 blur"></div>
      <div className="w-150 h-150 rounded-full bg-fuchsia-300 fixed -bottom-30 -right-40 -z-10 blur"></div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route
            path="counter"
            element={
              <Counter
                initialCount={0}
                initialNegativeStep={1}
                initialPositiveStep={1}
              />
            }
          />
          <Route path="/whos-stupid" element={<WhosStupid />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
