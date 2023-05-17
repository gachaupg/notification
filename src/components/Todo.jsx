import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteTodo, getTodos, updateTodo } from "../features/todosSlice";
import moment from "moment";
import "../App.css";

const Todo = ({todo,setTodo}) => {
    const dispatch = useDispatch();
const todosState = useSelector((state) => state.todosState);
const { todos } = todosState;
useEffect(() => {
  dispatch(getTodos());
}, [dispatch]);
const handleDelete = (id) => {
  dispatch(deleteTodo(id));
};
const handleSubmit = (e) => {
    e.preventDefault();
    if (todo._id) {
      dispatch(updateTodo(todo));
    } 
      
      
      
      
    
    
    
    
    
    
  };
  return (
    <>
    
    <div>
      <h2> You have {todos && todos.length} tasks </h2>
      {todosState.getTodosStatus === "pending" ?'loading': null}
      {todos.map((todo) => (
        <div
          variant="outlined"
          sx={{
            padding: "0.7rem",
            marginBottom: "2rem",
          }}
          key={todo._id}
        >
          <h3>{todo.task}</h3>
          <h3>{todo.isComplete===true  ? 'Active ':'Pending'}</h3>
          <p>Added: {moment(todo.date).fromNow()}</p>


          <form onSubmit={handleSubmit}>
 
 
 
 
 
 
  <br />
  <button
    type="submit"
    variant="contained"
    onClick={() => setTodo({ ...todo })}

    size="small"
    sx={{
      margin: "0.9rem 0rem",
      fontFamily: "'Abel', 'sansSerif'",
    }}
  >
   
   
      
      
       "Update Task"
     
  </button>
</form>
          <button
            variant="outlined"
            size="small"
            onClick={handleSubmit}
            sx={{
              fontFamily: "'Abel', 'sansSerif'",
            }}
          >
            Update
          </button>
          <button
            variant="contained"
            color="secondary"
            size="small"
            sx={{
              marginLeft: "0.7rem",
              fontFamily: "'Abel', 'sansSerif'",
            }}
            onClick={() => handleDelete(todo._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
    </>
  )
}

export default Todo