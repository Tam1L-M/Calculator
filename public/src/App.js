
import {useState} from 'react';
function App() {
  const[todolist,settodolist]=useState([]);
  const[input,Change]=useState("");
  const change=(event)=>{
    Change(event.target.value);
  }
  const add=()=>{
    const newtodo={
      id:todolist.length===0?1:todolist[todolist.length-1].id+1,
      taskName:input,
    }
    settodolist([...todolist,newtodo]);
  }
  const  Delete=(id)=>{
    settodolist(todolist.filter((value)=>value.id!=id))
  }

 return (
  <div>
    <h1 className="text-center text-3xl mt-5 font-bold text-green-600">TO-DO LIST</h1>
  <div className='text-center mt-10 bg-white w-96 min-h-[330px] max-h-max m-auto   rounded-md shadow-xl shadow-gray-300  '>
    <div className='flex justify-center'>
    <input type="" className='border border-gray-400 rounded-md pt-2 pl-1 outline-none text-xl pb-2 mt-8  focus:outline-none focus:border-2 focus:border-green-300 ' onChange={change}></input>
    <button className=' border border-green-400 ml-3 pl-1 pr-1 bg-green-500 text-white mt-8 rounded-md'onClick={add}>Add List</button>
    </div>
    <div>
      {todolist.map((value)=>{
        return(
          <div className='w-80  ml-8 mt-3 pl-1 border-2 border-gray-100 shadow-sm shadow-gray-400 rounded-md '>
          <div className='flex justify-between '>
        <h1 className='  text-xl ml-1  font-normal' >{value.taskName}</h1>
        <button className='border   border-green-300  pr-3 pl-3 text-base  bg-green-500 pt-1 pb-1  text-white rounded-md' onClick={()=>Delete(value.id)}> Remove</button>
</div>
        </div>
        )
      })}
    </div>
  </div>
  </div>
 )
}
export default App;
