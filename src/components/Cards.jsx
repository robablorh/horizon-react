import React from 'react'


const Cards = ({imgpln , title}) => {
  return (


    <div class="row">
            <div className="col-md-3">   
          <div className="card" style={{width: "16rem"}}>
          <img src={imgpln} height="200"  className="card-img-top cim" alt="pic"/>
          <div className="card-body">
            <h4>{title}</h4>
            <p className="card-text text">Some quick example text to build on the card title and make up the bulk of the card's content 
          
           </p>
          </div>
        </div>
        </div>
      </div>


  )
}



export default Cards
