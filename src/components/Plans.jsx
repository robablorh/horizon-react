import React from 'react'
import Cards from './Cards'

const Plans = () => {
 let pln1="images/cp2.jpg"
 let pln2="images/cp3.jpg"
 let pln3="images/cp4.jpg"
 let pln4="images/cp1.jpg"


  return (

       <div className="container card"> 

          <h2 className="text-center">PLANS</h2>

            <div className="row">
               <Cards imgpln={pln1} title="VIRTUAL OFFICES"/>
               <Cards imgpln={pln2} title="CUSTOMISED OFFICES"/>
               <Cards imgpln={pln3} title="SERVICED OFFICES"/>
               <Cards imgpln={pln4} title="MEETING ROOMS" />

            </div>

    </div>
  )
}



export default Plans
