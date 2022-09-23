import React, { useState } from "react";
import "./TaskCard.css";

function TaskCard(props) {
  const [task, setTask] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  function handleTaskChange(event) {
    setTask(event.target.value);
  }
  function handleDateChange(event) {
    setDate(event.target.value);
  }
  function handleTimeChange(event) {
    setTime(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (task == null || time == null || date == null) {
      alert(`Please fill out the entire form below.`);
    } else {
      alert(
        `Your response has been recorded. Task ${task} was recorded on ${date} at ${time}, Thank you.`
      );
    }
    console.log(date)
  }
  return (
    <div className="taskcard">
      <h1>{props.team}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Task Completed:</p>
          <input
            type="text"
            placeholder="What did you complete?"
            onChange={handleTaskChange}
          />
        </div>
        <div>
          <p>Date Submitted:</p>
          <input type="date" onChange={handleDateChange} />
        </div>
        <div>
          <p>Time Submitted:</p>
          <input type="time" onChange={handleTimeChange} />
        </div>
        <input type="submit" className="button" />
      </form>
    </div>
  );
}

export default TaskCard;
