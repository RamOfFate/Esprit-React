import { Route, Routes } from "react-router";
import "./App.css";
import Counter from "./components/counter";
import Home from "./layout/home";
import NotFound from "./layout/not-found";
import WhosStupid from "./components/whos-stupid";
import Category from "./components/category";

function App() {
  return (
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
        <Route path="/categories" element={<Category />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
