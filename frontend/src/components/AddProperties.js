import { useState } from "react";
import { json } from "react-router-dom";

const AddProperties = () => {
  const [ address, setAddress] = useState('');
  const [ bedrooms, setBedrooms] = useState('');
  const [ bathrooms, setBathrooms] = useState('');
  const [ price, setPrice] = useState('');
  const [ error, setError ] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const property = {address, bedrooms, bathrooms, price}

    const response = await fetch('api/housesForSale', {
      method: 'POST',
      body: JSON.stringify(property),
      header: {
        'Content-Type': 'application/json'
      }
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setAddress('');
      setBedrooms('');
      setBathrooms('');
      setPrice('');
      setError(null);
      console.log('New propery added!', json);
    }
  }

  return (
    <form className='addProperty' onSubmit={handleSubmit}>
      <h3>Add A New Property</h3>

      <label>Address:</label>
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
      />

      <button>Add Property</button>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default AddProperties;