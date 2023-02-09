import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { json } from "react-router-dom";

export const Singup = ({show2,handleClose2}) => {
  
  const [login, setLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPass, setCPass] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(login){
      const data = {
        email,
        password,
      };
      const res = await fetch("http://localhost:9090/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      sessionStorage.setItem('email', json.email);
      if (res.status === 401) {
        alert("login error");
      }else{
        alert("login Successfull");
        window.location.reload();
      }
    }else{

    
    if (password !== cPass) {
      alert("Password not match");
    } else {
      const data = {
        name,
        email,
        password,
      };
      const res = fetch("http://localhost:9090/api/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if(sessionStorage.getItem('email')){
        sessionStorage.removeItem('email');
      sessionStorage.setItem('email', email);
      }else{
      sessionStorage.setItem('email', email);

      }
      if (res.status === 400) {
        alert("singup error");
      }else{
        alert("singup Successfull");
        window.location.reload();
      }
    }
  }
  };
  return (
    <>      <Modal show={show2} onHide={handleClose2}>
    <Modal.Header closeButton>
      
    </Modal.Header>
    <Modal.Body>
      <div className="d-flex flex-column justify-content-center" id="login-box" >
        <div className="login-box-header">
          
          <h4
            style={{
              color: "rgb(139, 139, 139)",
              marginBottom: 0,
              fontWeight: 400,
              fontSize: 27,
            }}
          >
           {login ? "Login" : "SingUp"}
            
          </h4>
        </div>
     
        <div className="email-login" style={{ backgroundColor: "#ffffff" }}>
     { login ?null:  <input
            type="text"
            className="email-imput form-control"
            style={{ marginTop: 10 }}
            required=""
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            minLength={6}
          />}
          <input
            type="email"
            className="email-imput form-control"
            style={{ marginTop: 10 }}
            required=""
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            minLength={6}
          />
          <input
            type="password"
            className="password-input form-control"
            style={{ marginTop: 10 }}
            required=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Password"
            minLength={6}
          />
        {login ?null :   <input
            type="password"
            className="password-input form-control"
            style={{ marginTop: 10 }}
            required=""
            value={cPass}
            onChange={(e) => setCPass(e.target.value)}
            name="CPass"
            placeholder="Confirm Password"
            minLength={6}
          />}
        </div>
        <div className="submit-row" style={{ marginBottom: 8, paddingTop: 0 }}>
          <button
            className="btn btn-primary d-block box-shadow w-100"
            id="submit-id-submit"
            onClick={handleSubmit}
            type="submit"
          >
               {login ? "Login" : "SingUp"}

          </button>
          {/* <div className="d-flex justify-content-between">
            <div
              className="form-check form-check-inline"
              id="form-check-rememberMe"
            >
              <input
                className="form-check-input"
                type="checkbox"
                id="formCheck-1"
                htmlFor="remember"
                style={{ cursor: "pointer" }}
                name="check"
              />
              <label className="form-check-label" htmlFor="formCheck-1">
                <span className="label-text">Remember Me</span>
              </label>
            </div>
            <a id="forgot-password-link" href="#">
              Forgot Password?
            </a>
          </div> */}
        </div>
        <div
          id="login-box-footer"
          style={{ padding: "10px 20px", paddingBottom: 23, paddingTop: 18 }}
        >
          <p style={{ marginBottom: 0 }}>
            {login ?"Don't have an account ?":"You have an account ?"}
            <a id="register-link" onClick={()=>setLogin(!login)}  >
            {login ? "Sing Up !!":"Login !!"  }
            
            </a>
          </p>
        </div>
      </div>
      </Modal.Body>
        
      </Modal>

  

    </>
  );
};
