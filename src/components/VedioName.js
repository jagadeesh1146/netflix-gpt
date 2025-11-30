import React from 'react'

const VedioName = ({title , overview}) => {
  return (
    <div className="pt-32 px-24 absolute text-white">
        <h1 className=" text-3xl font-bold">{title}</h1>
        <p className="mt-11 w-1/4">{overview}</p>
        <div className="mt-8">
            <button className="bg-slate-200 w-36 text-black  text-xl   hover:bg-opacity-90  rounded-lg p-4 bg-opacity-50">▶️Play</button>
            <button className="ml-8 bg-slate-200 w-36 text-black  hover:bg-opacity-90 text-xl rounded-lg p-4 bg-opacity-50">ℹ️Info</button>
        </div>

    </div>
  )
}

export default VedioName;