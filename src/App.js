// import { RunningWithErrors } from "@mui/icons-material";
import React from "react";
import "./App.css";
import ListOfIssues from "./components/list";
// import PaginationView from "./components/pagination";

function App() {
  return (
    <div className="App">
      {/* <React.Fragment> */}
        <ListOfIssues />
        {/* <PaginationView /> */}
      {/* </React.Fragment> */}
    </div>
  );
}

export default App;
