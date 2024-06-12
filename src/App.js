import './App.css';
import React,{useEffect, useState} from 'react';

function App() {
  const [weight,setWeight]=useState(10)
  const [height,setHeight]=useState()
  const [bmi,setBmi]=useState(0)
  const [bmitext,setBmiText]=useState("")
  const calc=()=>{
    let m=height/100
    setBmi(Math.floor(weight/(m*m)))

    if(bmi<0){
      setBmiText("Other Species");
    }
    else if(bmi<18.5) {
      setBmiText("Underweight")
    }
    else if(bmi>18.5 && bmi<=25){
      setBmiText("Normal Weight")
    }
    else if(bmi>25 && bmi<=30){
      setBmiText("Over Weight")
    }
    else{
      setBmiText("Obesity")
    }
  }

  

  return (
  <>
  <div className="bg-slate-900 h-screen w-full flex flex-col gap-3 items-center justify-center py-20 ">
    <div className="bg-gray-100 p-5 rounded-lg flex flex-col items-center gap-3 md:w-[500px] w-[300px]">
      <span className='text-4xl font-semibold text-red-500 '>{bmitext}</span>
      <div className='text-2xl text-slate-700 font-semibold flex flex-col md:flex-row items-center gap-5 '>BMI Value <span className='ring-4 ring-slate-800 p-2 rounded-md w-[100px] text-center  '>{bmi}</span></div>
    </div>
    <div className="bg-gray-100 p-5  rounded-lg  w-[300px] md:w-[500px] ">
      <h1 className='text-4xl text-green-700 font-semibold 
      p-5 text-center '>Body mass index calculator</h1>
      <div className="">
        <div className="p-5 relative flex flex-col gap-2 ">
        <span className='text-lg font-semibold text-slate-700 '>Weight(kg)</span>
          <input type="number" className='focus:outline-none ring-4 ring-slate-800 text-slate-800 rounded-md px-4 py-3 text-xl font-semibold w-full ' onChange={(e)=>setWeight(e.target.value)} value={weight }/>
          
        </div>
        <div className="p-5 relative flex flex-col gap-2 ">
        <span className='text-lg font-semibold text-slate-700 '>Height(cm)</span>
          <input type="number" className='focus:outline-none ring-4 ring-slate-800 text-slate-800 rounded-md px-4 py-3 text-xl font-semibold w-full ' onChange={(e)=>{setHeight(e.target.value)
            
          }} value={height} />
          
        </div>
        <button className='bg-blue-600 text-white rounded-md px-5 py-3 ml-4 text-lg  hover:scale-[1.1] transition-all duration-300 ease-in-out  ' onClick={calc}>Calculate</button>
        <h1 className='text-center mt-5 '>Created by <strong>Roniwilliams</strong></h1>
      </div>
    </div>
  </div>
  </>
  );
}

export default App;
