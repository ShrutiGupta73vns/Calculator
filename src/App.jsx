import { useState } from "react";

import "./App.css";

function App() {
  const [calculation, setCalculation] = useState(0);
  const [input,setInput]=useState(0)
  
  function handleChange(event){
    setInput(event.target.value)
  }
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-3">
      <span className="h-[3rem] text-center text-3xl w-[10rem] text-blacl/[0.7] tracking-wider ">Calculator</span>
    <div className=" h-[17rem] w-80 flex flex-col gap-5 border-2 rounded-3xl items-center p-2 shadow-md shadow-white/20 ">
      <div className="flex gap-4 p-2">
    <span>{calculation}</span>
    <button onClick={()=>setCalculation(0)} className="border rounded-md border-white  h-[1.8rem] w-[4.5rem] flex  justify-center">reset</button></div>
    <div className="flex flex-col gap-1"><label className="text-xs text-gray-400">Input</label>
      <input type="number" placeholder="input" value={input} onChange={handleChange} className="p-2 border-none rounded-md outline-none"/></div>
     
      <button  onClick={()=>setInput(0)} className="border rounded-md border-white w-[4.5rem] h-[1.8rem] ">clear</button>
      <div className="flex gap-4">
      <button className=" bg-orange-600 border rounded-full w-[3rem] h-[3rem] font-bold text-[1.5rem] hover:bg-orange-500 " onClick={()=>setCalculation(prevState=>prevState+Number(input))}>+</button>
      <button className=" bg-orange-600 border rounded-full w-[3rem] h-[3rem] font-bold text-[1.5rem] hover:bg-orange-500" onClick={()=>setCalculation(prevState=> prevState- (input))}>-</button>
      <button  className=" bg-orange-600 border rounded-full w-[3rem] h-[3rem] font-bold text-[1.5rem] hover:bg-orange-500 " onClick={()=>setCalculation(prevState=> prevState* (input))}>*</button>
      <button className=" bg-orange-600 border rounded-full w-[3rem] h-[3rem] font-bold text-[1.5rem] hover:bg-orange-500"  onClick={()=>setCalculation(prevState=> prevState/ (input))}>/</button>
      </div>
    </div>
    </div>
  );
}

export default App;
