import { useDispatch, useSelector } from "react-redux";
import { todosAdd, updateTodo } from "../features/todosSlice";
import "../App.css";

const AddTodo = ({ todo, setTodo }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

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
          todosState.updateTodoStatus === "pending" ? (
            'loading'
          ) : todo._id ? (
            "Update Task"
          ) : (
            "Add Task"
          )}
        </button>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
      </form>
    </>
  );
};

export default AddTodo;
