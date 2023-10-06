import React from 'react'

export default function CardsPage() {
  return (
    <div className=' flex flex-col py-16 px-24 gap-12 w-full justify-center items-center min-h-screen'>
      <h1 className=' text-2xl font-bold text-center'>I want to Learn... </h1>
      <div className=' flex flex-row w-full gap-12' >
        <div className=' w-full flex flex-col justify-between items-center bg-slate-400 bg-opacity-20 rounded-2xl pt-12 pb-5 px-12'>
          <img className=' w-full h-48 shadow-md rounded-2xl border-slate-100 border' src='/ukFlag.png' />
          <h1 className=' font-semibold text-xl text-center'>English</h1>
          <button className=' rounded-xl bg-slate-400 bg-opacity-40 my-2 border-slate-300 px-4 py-1 text-md font-normal hover:bg-opacity-60 transition-all'>Start</button>
        </div>
        <div className=' w-full  flex flex-col justify-between items-center bg-slate-400 bg-opacity-20 rounded-2xl pt-12 pb-5 px-12'>
        <img className=' w-full h-48 shadow-md rounded-2xl border-slate-100 border' src='/esFlag.png' />
          <h1 className=' font-semibold text-xl text-center'>Spanish</h1>
          <button className=' rounded-xl bg-slate-400 bg-opacity-40 my-2 border-slate-300 px-4 py-1 text-md font-normal hover:bg-opacity-60 transition-all'>Start</button>
        </div>
        <div className=' w-full flex flex-col justify-between items-center bg-slate-400 bg-opacity-20 rounded-2xl pt-12 pb-5 px-12'>
        <img className=' w-full h-48 shadow-md rounded-2xl border-slate-100 border' src='/frFlag.png' />
          <h1 className=' font-semibold py-4 text-xl text-center'>English</h1>
          <button className=' rounded-xl bg-slate-400 bg-opacity-40 my-2 border-slate-300 px-4 py-1 text-md font-normal hover:bg-opacity-60 transition-all'>Start</button>
        </div>
      </div>
      <div className="gradient1"></div>
    </div>
  )
}