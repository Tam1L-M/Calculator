
import {useState} from 'react';
function App() {
  const[calc,setcalc]=useState("");
  const[result,setresult]=useState("");
  const ops=['-','+','*','/','.'];
  const update=(value)=>{
    if(ops.includes(value)&& calc==="" || ops.includes(value)&&ops.includes(calc.slice(-1))  ){
      return;
    }
    setcalc(calc+value);
    if(!ops.includes(value)){
      setresult(eval(calc+value).toString() )
    }
  }
  const evaluate=()=>{
    setcalc(eval(calc).toString())
    setresult("")

  }
  const Delete=()=>{
    if(calc!==''){
      const value=calc.slice(0,-1);
      setcalc(value);
    
    }

  }

  const numbers=()=>{
    const digits=[];
    for(let i=1;i<10;i++){
      digits.push(
        <button onClick={()=>update(i.toString())} className='bg-black font-bold text-white sm:flex-[1_1_400px] md:flex-[1_1_450px]  p-32 text-8xl hover:bg-slate-900' key={i}>{i}</button>
      )
    }
    return digits;
  }
 return (
  <div className='App flex justify-center min-h-screen items-end'>
    <div className='calculator w-full 
      bg-white rounded-2xl overflow-hidden shadow-lg '>
      <div className='display bg-black flex flex-wrap  justify-end text-[180px]  pt-64 pb-16 pr-20 text-white '>
        {result?<span className='text-8xl mt-28 mr-5 text-gray-500 '>({result})</span>:"" }
       {calc ||'0'}
         </div>
      <div className='operators flex '>
        <button onClick={()=>update("/")} className='flex-1 lg:flex-[1_1_600px] bg-rose-600 p-28 text-white hover:bg-rose-500 text-8xl font-bold'>/</button>
        <button onClick={()=>update("*")} className='flex-1 lg:flex-[1_1_600px] bg-rose-600 p-28 text-white hover:bg-rose-500 text-8xl font-bold'>*</button>
        <button onClick={()=>update("+")} className='flex-1 lg:flex-[1_1_600px] bg-rose-600 p-28 text-white hover:bg-rose-500 text-8xl font-bold'>+</button>
        <button onClick={()=>update("-")} className='flex-1 lg:flex-[1_1_600px] bg-rose-600 p-28 text-white hover:bg-rose-500 text-8xl font-bold'>-</button>
        <button onClick={Delete}  className='flex-1 lg:flex-[1_1_600px] bg-rose-600 p-28 text-white hover:bg-rose-500 text-8xl font-bold'>DEL</button>
      </div>
      <div className='numbers flex flex-wrap '>
        {numbers()}
        <button onClick={()=>update("0")} className='bg-black text-white flex-[1_1_400px] p-32 text-8xl'>0</button>
        <button onClick={()=>update(".")} className='bg-black text-white flex-[1_1_400px] p-32 text-8xl'>.</button>
        <button onClick={evaluate} className='bg-black text-white flex-[1_1_400px] p-32 text-8xl'>=</button>
      </div>
    </div>
  </div>
 )
}
export default App;
