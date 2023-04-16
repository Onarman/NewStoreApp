import React, { useState } from 'react'
import Courses from './components/Courses'
// DB
import { courseDB } from './db/courseDB'
import { currenciesDB } from './db/currenciesDB'

import { CurrencyContext } from './context/currencies-context'


document.body.style.backgroundColor = "#282c34"
document.body.style.color = "#eee"

export default function Store() {
    const [currency, setCurrency] = useState(currenciesDB.Euro);
    
  return (
    <CurrencyContext.Provider value={currency}>
    <div className='container'>
        <div className='d-flex flex-column '>
        <h4 className='mb-2'>Change Currency:</h4>
        <div>
        {Object.values(currenciesDB).map((cur)=>(
            <button
//  btnClass={"btn-light btn-sm"}
             className='btn btn-light'
             key={cur.label}
             onClick={()=>setCurrency(cur)}
             >{cur.code}</button>
        ))}
        </div>
        
        </div>
        <header className='text-center my-4'>
            <h1 className='title fs-xl'>Course</h1>
            <h2 className='text-uppercase'>BECOME A WEB DEVELOPER</h2>
            <p className='mx-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora esse magnam, placeat distinctio iste eius nisi sit. Nam provident quidem fugit consectetur recusandae similique debitis.</p>
        </header>
        <Courses list={courseDB} />
    </div>
    </CurrencyContext.Provider>
  )
}
