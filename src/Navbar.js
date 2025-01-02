import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {

  const changeWhite=()=>{
    document.body.style.backgroundColor="white";
  }

  const changeblack=()=>{
    document.body.style.backgroundColor="black";
  }

  const changegreen=()=>{
    document.body.style.backgroundColor="green";
  };
  const changeblue=()=> {
    document.body.style.backgroundColor="Blue";
  }

  const changered=()=>{
    document.body.style.backgroundColor="red";
  }

  const changepink=()=>{
    document.body.style.backgroundColor="pink";
  }

  const changeyellow=()=>{
    document.body.style.backgroundColor="yellow";
  }

  const changebrown=()=>{
    document.body.style.backgroundColor="brown";
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Change color
          </a>
          <ul className="dropdown-menu">
            <li onClick={changeWhite} >White</li>
            <li onClick={changeblack}>Black</li>
            <li><hr className="dropdown-divider"/></li>
            <li  onClick={changegreen}>Green</li>
            <li onClick={changeblue}>Blue</li>
            <li onClick={changered}>Red</li>
            <li  onClick={changepink}>Pink</li>
            <li   onClick={changeyellow}>Yellow</li>
            <li onClick={changebrown}>Brown</li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true" href='/'>Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>   
     
  )
}