import { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import '../styles/forms.css';
// import { json } from "react-router-dom";

const AddProperties = () => {
  const [propertyType, setPropertyType] = useState('');
  const [saleType, setSaleType] = useState('');
  const [address, setAddress] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const numericInput = document.getElementById('bedrooms');
    const numericInput2 = document.getElementById('bathrooms');

    const handleKeyDown = (event) => {
      event.preventDefault();
    };

    numericInput.addEventListener('keydown', handleKeyDown);
    numericInput2.addEventListener('keydown', handleKeyDown);

    return () => {
      numericInput.removeEventListener('keydown', handleKeyDown);
      numericInput2.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const property = {
      propertyType,
      saleType,
      address,
      bedrooms,
      bathrooms,
      price,
    };

    const response = await fetch('api/properties', {
      method: 'POST',
      body: JSON.stringify(property),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setPropertyType('');
      setSaleType('');
      setAddress('');
      setBedrooms('');
      setBathrooms('');
      setPrice('');
      setError(null);
      console.log('New propery added!', json);
    }
  };

  return (
    <div className='form-wrapper'>
      <form className='add-property' onSubmit={handleSubmit}>
        <h3>Add A New Property</h3>

        <label htmlFor='propertyType'>Type Of Property:</label>
        <select id='propertyType' name='propetyType'>
          <option
            value='house'
            onChange={(e) => setPropertyType(e.target.value)}
          >
            HOUSE
          </option>
          <option
            value='apartment'
            onChange={(e) => setPropertyType(e.target.value)}
          >
            APARTMENT
          </option>
          <option
            value='townhouse'
            onChange={(e) => setPropertyType(e.target.value)}
          >
            TOWNHOUSE
          </option>
          <option
            value='villa'
            onChange={(e) => setPropertyType(e.target.value)}
          >
            VILLA
          </option>
        </select>
        {/* <input
          type='text'
          onChange={(e) => setPropertyType(e.target.value)}
          value={propertyType}
        /> */}

        <label htmlFor='salesType'>Type Of Sale:</label>
        <input
          type='text'
          id='salesType'
          onChange={(e) => setSaleType(e.target.value)}
          value={saleType}
        />
        <fieldset className='address-set'>
          <legend>Address Information</legend>
          <label htmlFor='street'>Street:</label>
          <input
            type='text'
            id='street'
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />

          <label htmlFor='city'>City:</label>
          <input
            type='text'
            id='city'
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />

          <label htmlFor='providence'>State/Procidence:</label>
          <input
            type='text'
            id='providence'
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />

          <label htmlFor='postal'>Zip/Postal Code:</label>
          <input
            type='text'
            id='postal'
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
        </fieldset>

        <label htmlFor='bedrooms'>Bedrooms:</label>
        <input
          type='number'
          id='bedrooms'
          step='1'
          onChange={(e) => setBedrooms(e.target.value)}
          value={bedrooms}
        />

        <label htmlFor='bathrooms'>Bathrooms:</label>
        <input
          type='number'
          id='bathrooms'
          step='1'
          onChange={(e) => setBathrooms(e.target.value)}
          value={bathrooms}
        />

        <label htmlFor='price'>Price:</label>
        <NumericFormat
          id='price'
          name='price'
          thousandSeparator={true}
          prefix='$'
          decimalScale={2}
          fixedDecimalScale={true}
        />
        {/* <input
          type='number'
          id='price'
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        /> */}

        <button>Add Property</button>
        {error && <div className='error'>{error}</div>}
      </form>
    </div>
  );
};

export default AddProperties;
