import React, {  useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/login.css";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [color , setColor] = useState('');
  const [emailColor , setEmailColor] = useState('');

  const handleClick = (event) => {
    if ((name === "" || email === "")) {
      alert("Fill The Required Field's");
      setColor('red');
      event.preventDefault();
    }
    else{
      setColor('green')
    }
    
    if(!(email.includes('@')||email.includes('.'))){
      alert("Invalid Email");
      setEmailColor('red');
      event.preventDefault();
    }
  
  };
  

  return (
    <>

      <div className="body">
        <h2 className="name">{`Welcome! `}</h2>

        <div className="container">
          <div className="heading block">
            <h1>Welcome To News DashBoard</h1>
            <h4>Here You will Get The Latest Update</h4>
          </div>
          <form className="block">
            {/* <label htmlFor="name">Name</label> */}
            <br />
            <input
            className={color}
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="  User Name"
            autoFocus
            />
            <br />
            {/* <label htmlFor="email">Email</label> */}
            <br />
            
            <input
            className={emailColor}
            type="text"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="  Email"
            />
            <br />

            <Link to="/navbar">
              <button className="btn" onClick={handleClick}>
                LogIn!
              </button>
            </Link>
          </form>
        </div>
      <div className="line"></div>
      </div>
      <Outlet />
    </>
  );
};

export default LoginPage;
