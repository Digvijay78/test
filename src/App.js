import './App.css';
import React from 'react';

function App() {
  const [formData, setFormData] = React.useState(
    { firstName: "", Phone: "", email: "", Address: "" }
  )

    const [show , setShow] = React.useState(false);

  console.log(formData)

  function handleChange(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }



  function prompt() {
    console.log(2);
  }

  function members() {
    setShow(item => !item);
  }

  return (
    <div className='form-style'>
      <form>
        <input
          type="text"
          placeholder="Name"
          onChange={handleChange}
          name="firstName"
        />
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
        />
        <input
          type="number"
          placeholder="Phone Number"
          onChange={handleChange}
          name="Phone"
        />
        <input
          type="text"
          placeholder="Address"
          onChange={handleChange}
          name="Address"
        />
      </form>
      <div className='btn'>

        <button onClick={prompt} >Add Member</button>
        <button onClick={members} >View Member List</button>
      </div>

      <div className={show ? "visible" : "hidden"}  >
        <p>{`Name:${formData.firstName}`}</p>
        <p>{`Email:${formData.email}`}</p>
        <p>{`Phone Number:${formData.Phone}`}</p>
        <p>{`Address:${formData.Address}`}</p>
      </div>

    </div>
  )
}

export default App;
