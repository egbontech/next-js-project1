import React, { useState } from "react";
import Admin from "../../../layouts/Admin";


const Index = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
    error_list: [],
  });
  const [buttonLoader,setButtonLoader] = useState(false)

  const handleInput = (e) => {
    e.persist();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitForm = () => {
    setButtonLoader(true)    

    
  }


  return (
    <Admin>
      <div className="admin-form-container">
        <p>Add new user</p>
        <div className="input-container">
          <div className="input">
            <label>Name</label>
            <input
              type="text"
              value={input.username}
              onChange={handleInput}
              name="username"
            />
          </div>
          <div className="input">
            <label>Password</label>
            <input
              type="text"
              value={input.password}
              onChange={handleInput}
              name="password"
            />
          </div>
        </div>
        <div className="button-container">
            {buttonLoader ? <button>Loading</button> : <button onClick={submitForm}>Create</button> }         
        </div>
      </div>
    </Admin>
  );
};

export default Index;
