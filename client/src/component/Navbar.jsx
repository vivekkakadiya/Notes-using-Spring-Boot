import React, { useState } from 'react'
import { Addnote } from "../component/Addnote";
import { Singup } from './Singup';
export const Navbar = () => {

  const [show, setShow] = useState(false);
  const data = { "id": "", "title": "", "desc": "" }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const handleLogout = () => {
    sessionStorage.removeItem('email');
    window.location.reload();
  }

  return (
    <>

      <ul className="nav nav-pills p-3 bg-white mb-3 rounded-pill align-items-center">
        <li className="nav-item">
          <a
            href="/"
            className="nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2 active"
            id="all-category"
          >
            <i className="icon-layers m-1" />
            <span className="d-none d-md-block">All Notes</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/"
            className="nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2"
            id="note-business"
          >
            <i className="icon-briefcase m-1" />
            <span className="d-none d-md-block">Business</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/"
            className="nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2"
            id="note-social"
          >
            <i className="icon-share-alt m-1" />
            <span className="d-none d-md-block">Social</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/"
            className="nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2"
            id="note-important"
          >
            <i className="icon-tag m-1" />
            <span className="d-none d-md-block">Important</span>
          </a>
        </li>
          {sessionStorage.getItem("email") ? 
        <li className="nav-item ml-auto">
          <a
            className="nav-link btn-primary rounded-pill d-flex align-items-center px-3"
            id="add-notes"
            onClick={handleShow}
          >
            <i className="icon-note m-1" />
            <span className="d-none d-md-block font-14" >Add Notes</span>
          </a> </li> : <a>
          </a>}
       
        {!sessionStorage.getItem("email") ?
          <li className="nav-item mr-auto">
            <a
              className="nav-link btn-primary rounded-pill d-flex align-items-center px-3"
              id="add-notes"
              onClick={handleShow2}
            >
              <i className="fas fa-sign-in m-1" />
              <span className="d-none d-md-block font-14" >Login</span>
            </a>
          </li>
            :
            <li className="nav-item mr-auto">
            <a
              className="nav-link btn-primary rounded-pill d-flex align-items-center px-3"
              id="add-notes"
              onClick={handleLogout}
            >
              <i className="fas fa-sign-in m-1" />
              <span className="d-none d-md-block font-14" >logut</span>
            </a>
          </li>}
  </ul>
      {show && <Addnote handleClose={handleClose} show={show} data={data} edit={false} />}
      {show2 && <Singup handleClose2={handleClose2} show2={show2} />}

    </>
  )
}
