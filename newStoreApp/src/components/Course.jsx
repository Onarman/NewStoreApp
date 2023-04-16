import React, { useEffect, useState } from 'react'
import { CurrencyContext } from '../context/currencies-context'

export default function Course({course}) {

    const currency = React.useContext(CurrencyContext)

    const {title,img,price} = course;

    //change currencies
    const contextPrice = new Intl.NumberFormat("en-US",{
        style:"currency",
        currency:currency.code,
    }).format(price*currency.conversionRate)

    console.log(contextPrice);

    const [courseBg, setCourseBg] = useState()

    //Change background-color
    useEffect(() => {
      if(currency.code === "USD"){
        setCourseBg("card-accept")
      }
      if(currency.code === "EUR"){
        setCourseBg("card-info")
      }
      if(currency.code === "GBP"){
        setCourseBg("card-warning")
      }
    }, [currency.code])
    
      return (
        <li className={`card ${courseBg} mb-2`} style={{width:250}}>
        <div className="card-header" style={{padding:" 1rem 0"}}>{title}</div>
        <img src={img} alt="course img" style={{height:"100%"}} />
        <p className="card-body bg-dark" style={{}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut eligendi similique, autem velit animi soluta in dicta optio quae voluptates maiores !
        </p>
        <div className="card-footer d-flex space-between">
            <h4>{contextPrice}</h4>
            <button className='btn btn-success'>Buy</button>
             
        </div>
    </li>
  )
}
