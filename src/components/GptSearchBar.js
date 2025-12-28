import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

    const langKeys = useSelector((store)=>store.config.lang)

  return (
    <div className="pt-14 flex justify-center">
        <form className="w-1/2 bg-black  rounded-md grid grid-cols-12">
            <input type="text" className="p-2 m-2 col-span-9 text-lg " placeholder={lang[langKeys].placeholder}/>
            <button className=" col-span-3 h-11 p-2 m-2 text-lg bg-red-700 hover:border-red-900 rounded-sm">{lang[langKeys].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar