import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosAdd, updateTodo } from "../features/todosSlice";
import "../App.css";

const Test = ({ todo, setTodo }) => {
  const dispatch = useDispatch();
  const todosState = useSelector((state) => state.todosState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo._id) {
      dispatch(updateTodo(todo));
    } else {
      const newTodo = {
        ...todo,
        date: new Date(),
      };
      dispatch(todosAdd(newTodo));
    }
    setTodo({
      task: "",
      isComplete: false,
    });
  };
  return (
    <div>
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a task"
            value={todo.task}
            onChange={(e) => setTodo({ ...todo, task: e.target.value })}
          />
          <br />
          <button
            type="submit"
            variant="contained"
            size="small"
            sx={{
              margin: "0.9rem 0rem",
              fontFamily: "'Abel', 'sansSerif'",
            }}
          >
            {todosState.addTodoStatus === "pending" ||
            todosState.updateTodoStatus === "pending"
              ? "loading"
              : todo._id
              ? "Update Task"
              : "Add Task"}
          </button>
        </form>
      </>
    </div>
  );
};

export default Test;
