import React, { useState, useEffect } from "react";
import axios from "axios";


function IssueList() {
  const [issues, setIssues] = useState([])

  const fetchIssues = async () => {
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
    fetchIssues();
  }, [])

  return (
    <div className="issue-list-container">
      <h2 className="issue-list-title">Issues</h2>

      {issues.length === 0 && (
        <p className="no-issue">No Issues Found</p>
      )}

      {issues.map((issue) => (
        <div key={issue._id} className="issue-card">

          <h3>{issue.title}</h3>

          <p><b>Description:</b> {issue.description}</p>

          <p>
            <b>Status:</b>{' '}
            <span className={`status-badge ${issue.status === 'Open'
              ? 'status-open'
              : issue.status === 'In progress'
                ? 'status-in-progress'
                : 'status-resolved'
              }`}>
              {issue.status || 'Open'}
            </span>
          </p>

          <p><b>Owner:</b> {issue.owner}</p>

          <p><b>Due Date:</b> {issue.due_date}</p>

          <p><b>Priority:</b> {issue.priority}</p>

          <div className="ticket-actions">
            <button onClick={() => updateStatus(issue._id, 'In progress')}>
              In Progress
            </button>
            <button onClick={() => updateStatus(issue._id, 'Resolved')}>
              Resolved
            </button>
            <button onClick={() => deleteIssue(issue._id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default IssueList;