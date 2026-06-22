import React, { useState, useEffect } from "react";
import axios from "axios";


function IssueList() {
  const [issues, setIssues] = useState([])

  const fetchIssue = async () => {
    try {
      const res = await axios.get('http://localhost:5001/api/issues');
      setIssues(res.data);
    } catch (error) {
      alert("Error fetching Data")
    }
  }

  const deleteIssue = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/issues/${id}`);
      setIssues(prevIssues => prevIssues.filter(issue => issue._id !== id));
    } catch (error) {
      alert("Error deleting Issues.");
      console.log(error);
    }
  };
  const updateStatus = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:5001/api/issues/${id}`, { status: newStatus });
      setIssues(prevIssues => prevIssues.map(issue => issue._id === id ? { ...issue, status: newStatus } : issue))
    } catch (error) {
      alert("Error updating status.");
      console.log(error);
    }
  };
  useEffect(() => {
    fetchIssue();
  }, [])

  return (
    <div className="isssue-list-container">
      <h2 className="issue-list-title">Issues</h2>

      {issues.length === 0 && (
        <p className="no-issue">No Issues Found</p>
      )}

      {issues.map((issue) => (
        <div key={issue._id} className="issue-card">

          <h3>{issue.title}</h3>

          <p><b>Description:</b> {issue.description}</p>

          <p><b>Owner:</b> {issue.owner}</p>

          <p><b>Due_Date:</b>{issue.due_date}</p>

          <p><b>Priority:</b>{issue.priority}</p>
        </div>
      ))}
    </div>
  );
}
export default IssueList;