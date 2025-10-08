import React, { useState, useEffect } from 'react';

interface Joke {
  id: string;
  joke: string;
}

const EffectComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [joke, setJoke] = useState<Joke | null>(null); // State for storing the fetched joke

  // Fetch a random joke when the count changes
  useEffect(() => {
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setJoke(data))
      .catch((error) => console.error('Error fetching joke:', error));
  }, [count]); // Runs when count changes

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    //cleanup the interval when the component unmouns
    return () => {
      clearInterval(interval);
    };
  }, []); // memoth dependency array means the effect runs only once (on mount)

  return (
    <div>
      <h1>Count for jokes: {count} </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <h2>Random Joke</h2>
      {joke ? <p>{joke?.joke} </p> : <p>Loading... </p>}

      <h1> Auto Increment Count: {count} </h1>
    </div>
  );
};

export default EffectComponent;
