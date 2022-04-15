import { v4 as uuid } from "uuid";
import React, { useReducer, useState } from "react";
import "../App.css";

import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/Todos/action";

import Sidebar from "./Sidebar";
import { useNavigate } from "react-router";
const initState = {
  title: "",
  description: "",
  subtasks: [],
  status: "",
  tags: { official: false, personal: false, others: false },
  date: "",
};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "UPDATE_TITLE":
      return { ...state, title: payload };
    case "UPDATE_DESCRIPTION":
      return { ...state, description: payload };
    case "UPDATE_STATUS":
      return { ...state, status: payload };
    case "UPDATE_TAGS":
      return { ...state, tags: { ...state.tags, ...payload } };
    case "UPDATE_DATE":
      return { ...state, date: payload };
    case "UPDATE_SUBTASK":
      return { ...state, subtasks: [...state.subtasks, payload] };
    
      case "TOGGLE_SUBTASK":
        const  subtaskToggle=state.subtasks.map(     (ele)=> ele.id==payload.id?{...ele,subtaskStatus:payload.status}:ele)
        return { ...state, subtasks:subtaskToggle };
      
        case "DELETE_SUBTASK":
          const  subtaskDelete=state.subtasks.filter(     (ele)=> ele.id!=payload.id)
          return { ...state, subtasks:subtaskDelete };
        
      
    case "RESET":
    return {...initState}
      default:
      throw new Error("Please give proper action object");
  }
};
export default function TodoCreate() {
  const [subtask, setSubtask] = useState("");
  const [state, dispatch] = useReducer(reducer, initState);
  const { title, description, subtasks, status, tags, date } = state;

  const { official, personal, others } = tags;


  const {todos}=useSelector((store)=>store.todos)
const navigate=useNavigate()

const reduxDispatch=useDispatch()

  return (<div className="flex gap-2 w-full  mt-5 justify-around">

   <Sidebar todos={todos}/>
    <div className="todo flex" >

    <div>

      <input className="border-black border-2 rounded w-[70%] px-4 mt-4"
        placeholder="Title"
        type="text"
        onChange={(e) => {
          dispatch({ type: "UPDATE_TITLE", payload: e.target.value });
        }}
        value={title}
      />
      <input className="border-black border-2 rounded w-[70%] px-4 mt-4"
    
        placeholder="Description"
        type="text"
        onChange={(e) => {
          dispatch({ type: "UPDATE_DESCRIPTION", payload: e.target.value });
        }}
        value={description}
      />
      <p className="mt-4 text-2xl">Status</p>
      <label className=" px-4 mt-2 block "
      >
        <input className=" px-4  mx-4"
    
          type="radio"
          checked={status == "Todo"}
          onChange={() => {
            dispatch({ type: "UPDATE_STATUS", payload: "Todo" });
          }}
        />
        Todo
      </label>

      <label className=" px-4 mt-2 block ">
        <input className=" px-4  mx-4"
          type="radio"
          checked={status == "InProgress"}
          onChange={() => {
            dispatch({ type: "UPDATE_STATUS", payload: "InProgress" });
          }}
        />
        In Progress
      </label >
      <label className=" px-4 mt-2 block ">
        <input className=" px-4  mx-4"
          type="radio"
          checked={status == "Done"}
          onChange={() => {
            dispatch({ type: "UPDATE_STATUS", payload: "Done" });
          }}
        />
        Done
      </label>

      <p className="mt-4 text-2xl">Tags</p>
      <label className=" px-4 mt-2 block ">
        <input className=" px-4  mx-4"
          type="checkbox"
          checked={official}
          onChange={(e) => {
            dispatch({
              type: "UPDATE_TAGS",
              payload: { official: e.target.checked },
            });
          }}
        />
        Official
      </label>

      <label className=" px-4 mt-2 block ">
        <input className=" px-4  mx-4"
          type="checkbox"
          checked={personal}
          onChange={(e) => {
            dispatch({
              type: "UPDATE_TAGS",
              payload: { personal: e.target.checked },
            });
          }}
        />
        Personal
      </label>
      <label className=" px-4 mt-2 block ">
        <input className=" px-4  mx-4"
          type="checkbox"
          checked={others}
          onChange={(e) => {
            dispatch({
              type: "UPDATE_TAGS",
              payload: { others: e.target.checked },
            });
          }}
        />
        Others
      </label>
      </div>

     

      <div>
      <p  className="mt-4 text-2xl">CREATE SUBTASKS</p>
<div className="flex h-[80px] my-5 gap-2">
      <input  className="border-black border-2 rounded w-[60%] h-full px-4 "
     
        placeholder="Add Subtask"
        type="text"
        onChange={(e) => setSubtask(e.target.value)}
        value={subtask}
      />

      <button className="w-[40%]  h-full"
        onClick={() => {
          const payload = {
            id: uuid(),
            subtaskTitle: subtask,
            subtaskStatus: false,
          };
setSubtask("")
          dispatch({ type: "UPDATE_SUBTASK", payload });
        }}
      >
        ADD SUBTASK
      </button>

      </div>
<div>      {subtasks.map((e)=><div key={e.id} style={{display:"flex"}}>
        <label className=" px-4 mt-2 block ">
       
        <input
        type="checkbox" className=" px-4  mx-4"
        onChange={ (event)=>{
          dispatch({
            type:"TOGGLE_SUBTASK",
            payload:{id:e.id,status:event.target.checked}
          })
        }}
        value={e.subtaskStatus}
      />
      {e.subtaskTitle}
        </label>

      
        <button 
        onClick={
          ()=>{
            dispatch({
              type:"DELETE_SUBTASK",
              payload:{id:e.id}
            })
          }
        }>Delete</button>
        
        </div>)
      }

      </div>


      </div>

      <div className="m-4">
      <input className="border-black border-2 rounded w-full  my-4  p-4  block"
     
      placeholder="Date"
      type="date"
      onChange={(e) => {
        dispatch({ type: "UPDATE_DATE", payload: e.target.value });
      }}
      value={date}
    />
      <button onClick={()=>{
        reduxDispatch(
addTodo({...state}))
dispatch({type:"RESET"})
navigate("/")
      }}>CREATE TODO</button>

      </div>
    </div>

    </div>
  );
}
