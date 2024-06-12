import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid px-5 mx-4">
    <a className="navbar-brand fw-bold fs-3 text-light" href="#"><span className="text-warning fs-2">P</span>
    o<span className="text-warning">r</span>t<span className="text-warning">f</span>o<span className="text-warning">l</span>
    i<span className="text-warning">o</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 px-5 fw-bold">
        <li className="nav-item px-4">
          <a className="nav-link t" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item px-4">
          <a className="nav-link t" aria-current="page" href="#">Education</a>
        </li>
        <li className="nav-item px-4">
          <a className="nav-link t" aria-current="page" href="#">Skills</a>
        </li>
        <li className="nav-item px-4">
          <a className="nav-link t" aria-current="page" href="#">Project</a>
        </li>
        <li className="nav-item px-4">
          <a className="nav-link t" aria-current="page" href="#">Contact</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
