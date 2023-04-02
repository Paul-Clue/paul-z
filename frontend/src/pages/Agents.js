import { useEffect, useState } from 'react';

const Agents = () => {
  const [agents, setAgents] = useState(null);

  // TODO: Also look into useLayoutEffect

  useEffect(() => {
    const fetchAgents = async () => {
      const response = await fetch('/api/agents')
      const json = await response.json();

      if (response.ok) {
        setAgents(json);
      }
    }

    (async () => {
      await fetchAgents()
    })()
  }, []);

  return (
    <div className='home'>
      <h1>Agents</h1>
      <div className="agentList">
        {agents && agents.map((agent) => (
          <p key={agent._id}>{agent.name}</p>
        ))}
      </div>
    </div>
  )
}

export default Agents;
