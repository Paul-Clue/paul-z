import { useEffect, useState } from 'react';

const Agents = () => {
  const [agents, setAgents] = useState(null);

  useEffect(() => {
    const fetchAgents = async () => {
      const response = await fetch('/api')
      const json = response.json();

      if (response.ok) {
        setAgents(json);
      }
    }

    fetchAgents();
  }, []);

  return (
    <div className='home'>
      <h1>Agents</h1>
      <div className="agentList">
        {agents && agents.map((agent) => (
          <p key={agent._id}>{agent.title}</p>
        ))}
      </div>
    </div>
  )
}

export default Agents;