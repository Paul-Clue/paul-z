// import { useEffect, useState } from 'react';
import AddProperty from '../components/AddProperties'

const Home = () => {
  // const [agents, setAgents] = useState(null);

  // useEffect(() => {
  //   const fetchAgents = async () => {
  //     const response = await fetch('http://localhost:4000/api/agents')
  //     const json = response.json();

  //     if (response.ok) {
  //       setAgents(json);
  //     }
  //   }

  //   fetchAgents();
  // }, []);

  return (
    <div className='home'>
      <h1>HOME</h1>
      <AddProperty />
    </div>
  )
}

export default Home;