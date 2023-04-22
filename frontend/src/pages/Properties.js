import { useEffect, useState } from 'react';

const Properties = () => {
  const [properties, setProperties] = useState(null);
  // TODO: Also look into useLayoutEffect

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await fetch('/api/properties')
      const json = await response.json();

      if (response.ok) {
        setProperties(json);
      }
    }

    (async () => {
      await fetchProperties()
    })()
  }, []);

  return (
    <div className='home'>
      <h1>Available Properties</h1>
      <div className="housesForSaleList">
        {properties && properties.map((property) => (
          <p key={property._id}>{property.price}</p>
        ))}
      </div>
    </div>
  )
}

export default Properties;
