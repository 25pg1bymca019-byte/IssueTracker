import React from "react"
import IssueAdd from "./components/IssueAdd";
import IssueFilter from "./components/IssueFilter";
import IssueList from "./components/IssueList";
import IssueTable from "./components/IssueTable";


function App() {
  return (<div className="App">
    <IssueAdd/>
    <IssueFilter/>
    <IssueList/>
   <IssueTable/>

</div>
  );
}

export default App;
