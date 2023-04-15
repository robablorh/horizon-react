import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark bg-white">
    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul className="navbar-nav mr-auto link">
            <li className="nav-item active">
                <a className="nav-link" href="/"><img src="images/logo.png" width="300" height="70" alt='pic'/></a>
            </li>
              
        </ul>
    </div>

      <div className="navbar-collapse collapse justify-content-center order-2" id="collapsingNavbar">
        <ul clasName="navbar-nav link   flags ">
            <li className="nav-item active new">
                <a className="nav-link " href="/"> <img src="images/ghana.png" width="50"  alt='pic'  height="30"/></a>
            </li>
          
        </ul>
    </div>
    
    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link newlink" href="/">ABOUT US</a>
            </li>
        </ul>
    </div>
</nav>
  )
}

export default Navbar
