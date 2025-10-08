import React, { useState, useEffect } from 'react';

interface Joke {
  id: string;
  joke: string;
}

const EffectComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  const [joke, setJoke] = useState<Joke | null>(null); // State for storing the fetched joke

  // Fetch a random joke when the component mounts
  useEffect(() => {
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setJoke(data))
      .catch((error) => console.error('Error fetching joke:', error));
  }, []); //Empty dependency array means this effect runs once on mount

  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <h2>Random Joke</h2>
      {joke ? <p>{joke.joke} </p> : <p>Loading... </p>}
    </div>
  );
};

export default EffectComponent;
