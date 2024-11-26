import React, { useState } from "react";
import "./Form.css";

function Form() {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");

  let [data, setData] = useState({
    username: "",
    email: "",
    mobile: "",
  });

  console.log(data);

  function getValue(event) {
    console.log(event.target.value);
    let key = event.target.value;

    setData({
      ...data,
      [event.target.name]: event.target.value
    });

    // switch(event.target.value){
    //     case 'username':
    //         setData({
    //             ...data,
    //             username:event.target.value
    //         })
    //         break;

    //         case 'email':
    //             setData({
    //                 ...data,
    //                 email:event.target.value
    //             })
    //             break;

    //             case 'mobile':
    //                 setData({
    //                     ...data,
    //                     mobile:event.target.value
    //                 })
    //                 break;
    // }
  }

  return (
    <div className="formPage">
      <div>
        <form action="">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            onChange={getValue}
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            onChange={getValue}
          />
          <input
            type="text"
            name="mobile"
            id="mobile"
            placeholder="mobile"
            onChange={getValue}
          />
        </form>
      </div>
      <div>
        <h1>Username: {data.username}</h1>
        <h1>Email: {data.email}</h1>
        <h1>Mobile : {data.mobile}</h1>
      </div>
    </div>
  );
}

export default Form;
