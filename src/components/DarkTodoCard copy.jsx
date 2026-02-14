import React, { useState } from "react";

const DarkTodoCard = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "walk up", done: false },
    { id: 2, text: "take a bath", done: false },
    { id: 3, text: "do coding", done: false },
  ]);

  const [task, setTask] = useState("");

  const addTodo = () => {
    if (!task.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: task.trim(),
      done: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setTask("");
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="h-[320px] w-[260px] bg-gray-950 rounded-2xl text-white p-5 flex flex-col border border-white/10 shadow-lg">
      {/* Header */}
      <div className="flex gap-3 text-lg items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
          <path d="M9 12l2 2l4 -4" />
        </svg>

        <span className="">Tasks</span>
      </div>

      {/* Body */}
      <div className="mt-4 flex flex-col flex-1">
        {/* Todo list */}
        <div className="todo-scroll flex flex-col gap-2 overflow-y-auto pr-2 h-[140px] rounded-xl p-3  ">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={() => toggleTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
            />
          ))}
        </div>

        {/* Input + Button */}
        <div className="mt-auto pt-4 flex flex-col gap-2">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task..."
            className="w-full rounded-xl px-3 py-2 bg-white/10 border border-white/10 outline-none text-sm placeholder:text-white/40 focus:border-blue-400/50"
            onKeyDown={(e) => {
              if (e.key === "Enter") addTodo();
            }}
          />

          <button
            onClick={addTodo}
            className="
              w-fit flex items-center gap-2
              px-3 py-2 rounded-xl
             
              text-blue-400 text-sm font-medium
              hover:bg-white/20 hover:text-blue-300
              active:scale-95
              transition-all duration-200
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l5 5l10 -10" />
            </svg>
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default DarkTodoCard;

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center gap-2 group">
      {/* Toggle */}
      <button onClick={onToggle} className="transition duration-200">
        {todo.done ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="lightblue"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005 .195v12.666c0 1.96 -1.537 3.56 -3.472 3.662l-.195 .005h-12.666a3.667 3.667 0 0 1 -3.662 -3.472l-.005 -.195v-12.666c0 -1.96 1.537 -3.56 3.472 -3.662l.195 -.005h12.666zm-2.626 7.293a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white/70"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
          </svg>
        )}
      </button>

      {/* Text */}
      <span
        className={`text-sm flex-1 ${
          todo.done ? "text-white/40 line-through" : "text-white"
        }`}
      >
        {todo.text}
      </span>

      {/* Delete */}
      <button
        onClick={onDelete}
        className="opacity-0 group-hover:opacity-100 transition text-white/40 hover:text-red-400"
      >
        ✕
      </button>
    </div>
  );
};
