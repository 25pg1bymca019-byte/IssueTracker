import { useState } from "react"
import axios from "axios"
import React from "react"

function IssueForm() {
        const [form, setForm] = useState({
                title: " ",
                description: " ",
                owner: " ",
                due_date: " ",
                priority: " "
        });

        const handleChange = (e) => {
                setForm({
                        ...form,
                        [e.target.name]: e.target.value
                });
        };
        const handleSubmit = async (e) => {
                e.preventDefault();

                try {
                        await axios.post('http://localhost:5001/api/issues', form);

                        alert("Issue Created");
                        console.log('Data Sent')

                        setForm({

                                title: '',
                                description: '',
                                owner: '',
                                due_date: '',
                                priority: ''
                        });

                } catch (error) {
                        alert("Error Creating an Issue");
                        console.log(error);
                }
        };
        return (
                <>
                        <h1>Issue Form</h1>

                        <form onSubmit={handleSubmit}>


                                <label>Title:</label>
                                <input type="text" name="title" value={form.title} onChange={handleChange} /> <br />

                                <label>Description:</label>
                                <input type="text" name="description" value={form.description} onChange={handleChange} /> <br />

                                <label>Priority:</label>
                                <select name="priority" value={form.priority} onChange={handleChange}>
                                        <option value="">Select</option>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                </select>
                                <br />

                                <label>Owner:</label>
                                <input type="text" name="owner" value={form.owner} onChange={handleChange} /> <br />

                                <label>Due Date:</label>
                                <input type="text" name="due_date" value={form.due_date} onChange={handleChange} /> <br />

                                <button type="submit">Create Isssue</button>
                        </form>
                </>
        );

}

export default IssueForm;