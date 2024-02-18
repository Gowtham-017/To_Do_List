import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import { FaTrash, FaCheck } from "react-icons/fa";
function Home({ selectedDate }) {
    const [todo, setToDo] = useState("");
    const [desc, setDesc] = useState("");
    const [print, setPrint] = useState("");
    const [completionStatus, setCompletionStatus] = useState([]);
    const [todolist, setTodoList] = useState([]);
    const handleTodo = (e) => {
        setToDo(e.target.value);
    };
    const handleDesc = (e) => {
        setDesc(e.target.value);
    };
    const handlebutton = () => {
        setTodoList([...todolist, { todo, desc }]);
        setToDo("");
        setDesc("");
        setPrint(true);
    };
    const handleDelete = (index) => {
        const result = window.confirm("Do you want to delete the task?");
        if (result) {
        const updatedTodoList = [...todolist];
        const updatedCompletionStatus = [...completionStatus];
        updatedTodoList.splice(index, 1);
        updatedCompletionStatus.splice(index, 1);
        setTodoList(updatedTodoList);
        setCompletionStatus(updatedCompletionStatus);
        }
    };
    const handleToggleComplete = (index) => {
        const updatedCompletionStatus = [...completionStatus];
        updatedCompletionStatus[index] = !updatedCompletionStatus[index];
        setCompletionStatus(updatedCompletionStatus);
    };
    useEffect(() => {
        if (selectedDate) {
        console.log(selectedDate.format("DD MMM YYYY"));
        }
    }, [selectedDate]);
    return (
        <div className="homepage">
        <h1 style={{ "padding-top": "100px" }}>My To Do's</h1>
        {selectedDate && <h2>{selectedDate.format('DD MMM YYYY')}</h2>}
        <div className="container">
            <input
            type="text"
            placeholder="Todo"
            value={todo}
            onChange={handleTodo}
            />
            <input
            type="text"
            placeholder="Description"
            value={desc}
            onChange={handleDesc}
            />
            <button onClick={handlebutton}>Add</button>
        </div>
        <div>
            {print && (
            <div className="task-container">
                {todolist.map((item, index) => (
                <div key={index} className="task-list">
                    <div className="task-title">
                    <span className="description">Task :</span>
                    <span style={{ "font-weight": "bold", "font-size": "large" }}>
                        {" "}
                        {item.todo}
                    </span>
                    <br />
                    </div>
                    <span className="description">Description :</span>
                    <p className="">{item.desc}</p>
                    <div className="icons">
                    <div onClick={() => handleDelete(index)} className="trash">
                        <FaTrash size={20} />
                    </div>
                    <div onClick={() => handleToggleComplete(index)}>
                        <FaCheck
                        size={20}
                        className={`check-icon ${
                            completionStatus[index] ? "completed-check" : ""
                        }`}
                        />
                    </div>
                    </div>
                </div>
                ))}
            </div>
            )}
        </div>
        </div>
    );
}
export default Home;