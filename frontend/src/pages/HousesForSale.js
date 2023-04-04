import { useEffect, useState } from 'react';

const HousesForSale = () => {
  const [housesForSale, setHousesForSale] = useState(null);

  // TODO: Also look into useLayoutEffect

  useEffect(() => {
    const fetchHousesForSale = async () => {
      const response = await fetch('/api/housesForSale')
      const json = await response.json();

      if (response.ok) {
        setHousesForSale(json);
      }
    }

    (async () => {
      await fetchHousesForSale()
    })()
  }, []);

  return (
    <div className='home'>
      <h1>Houses On The Market For Sale</h1>
      <div className="housesForSaleList">
        {housesForSale && housesForSale.map((houseForSale) => (
          <p key={houseForSale._id}>{houseForSale.price}</p>
        ))}
      </div>
    </div>
  )
}

export default HousesForSale;
