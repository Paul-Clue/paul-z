import { useState } from 'react';
import '../styles/forms.css';
// import { json } from "react-router-dom";

const AddAgents = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [ address, setAddress] = useState('');
  // const [ bedrooms, setBedrooms] = useState('');
  // const [ bathrooms, setBathrooms] = useState('');
  // const [ price, setPrice] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const property = {propertyType, saleType, address, bedrooms, bathrooms, price}
    const agent = { email, password };

    const response = await fetch('api/agents', {
      method: 'POST',
      body: JSON.stringify(agent),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setEmail('');
      setPassword('');
      // setAddress('');
      // setBedrooms('');
      // setBathrooms('');
      // setPrice('');
      setError(null);
      console.log('New agent added!', json);
    }
  };

  return (
    <div className='form-wrapper'>
      <form className='add-agent' onSubmit={handleSubmit}>
        <h3>Add A New Agent</h3>

        <label for='email'>Email:</label>
        <input
          type='text'
          id='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label for='password'>Password:</label>
        <input
          type='text'
          id='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        {/* <label>Address:</label>
      <input 
        type='text'
        onChange={(e) => setAddress(e.target.value)}
        value={address}
      />

      <label>Bedrooms:</label>
      <input 
        type='number'
        onChange={(e) => setBedrooms(e.target.value)}
        value={bedrooms}
      />

      <label>Bathrooms:</label>
      <input 
        type='number'
        onChange={(e) => setBathrooms(e.target.value)}
        value={bathrooms}
      />

      <label>Price:</label>
      <input 
        type='number'
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      /> */}

        <button>Add Agent</button>
        {error && <div className='error'>{error}</div>}
      </form>
    </div>
  );
};

export default AddAgents;
