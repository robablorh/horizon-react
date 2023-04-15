import React from 'react'

function Carousel() {
  return (
    
 <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
 <div class="carousel-inner">
   <div class="carousel-item active">
     <img src="images/caro4.jpg" class="d-block w-100 w100" alt="silverstar"/>
   </div>
</div>
  
<button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
   <span class="sr-only">Previous</span>
 </button>
 <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
   <span class="carousel-control-next-icon" aria-hidden="true"></span>
   <span class="sr-only">Next</span>
 </button>
</div>
  )
}

export default Carousel
