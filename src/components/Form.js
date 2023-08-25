import "./FormStyle.css";
import React from 'react';

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text" placeholder="Enter Name"></input>
            <label>Email</label>
            <input type="email" placeholder="Enter E-mail"></input>
            <label>Subject</label>
            <input type="text" placeholder="Subject"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type Your Message Here"></textarea>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form