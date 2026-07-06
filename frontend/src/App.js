import React from "react"
import IssueList from "./components/IssueList";
import IssueForm from "./components/IssueForm";

function App() {
  return (<div className="App">
    <IssueForm />
    <IssueList />
  </div>
  );
}

export default App;
