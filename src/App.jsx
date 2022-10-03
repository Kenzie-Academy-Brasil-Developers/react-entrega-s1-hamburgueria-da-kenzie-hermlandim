import { useEffect, useState } from "react";
import HeaderMain from "./Components/Header";
import Main from "./Components/Main";
import api from "./services/api";

function App() {
  const [originalList, setOriginalList] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get("/products").then((response) => {
      setOriginalList(response.data);
    });
  }, []);

  return (
    <div className="App">
      <HeaderMain
        list={list}
        setList={setList}
        setOriginalList={setOriginalList}
      />
      <Main list={list} setList={setList} />
    </div>
  );
}

export default App;
