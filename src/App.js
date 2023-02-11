import "./App.css";
import React from "react";
import logo from "./pic.png";

function App() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    Phone: "",
    email: "",
    Address: "",
  });

  const [show, setShow] = React.useState(false);

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function prompt() {
    console.log(2);
  }

  function members() {
    setShow((item) => !item);
  }

  return (
    <div className="main-container">
      <h2>Fitness club registration</h2>

      <div className="final">
        <form className="form-container">
          <div className="input-label first">
            <input
              className="form"
              type="text"
              placeholder="Name"
              onChange={handleChange}
              name="firstName"
            />
          </div>

          <div className="input-label">
            <input
              className="form"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className="input-label">
            <input
              className="form"
              type="number"
              placeholder="Phone Number"
              onChange={handleChange}
              name="Phone"
            />
          </div>
          <div className="input-label">
            <input
              className="form"
              type="text"
              placeholder="Address"
              onChange={handleChange}
              name="Address"
            />
          </div>
        </form>
        <div className="out-button">
          <button onClick={prompt} className="form button">
            Add Member
          </button>
        </div>
      </div>

      <div className="out-button">
        <button onClick={members} className="form button">
          View Member List
        </button>
      </div>

      <div className={show ? "visible" : "hidden"}>
        <p>{`Name:${formData.firstName}`}</p>
        <p>{`Email:${formData.email}`}</p>
        <p>{`Phone Number:${formData.Phone}`}</p>
        <p>{`Address:${formData.Address}`}</p>
      </div>
    </div>
  );
}

export default App;
