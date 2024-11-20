import { useState } from 'react'
import './App.css'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });
  const [mostVoted, setMostVoted] = useState([]);

  const handleRandomAnecdote = () => {
    let random;
    do {
      random = Math.floor(Math.random() * anecdotes.length);
    } while (random === selected);
    setSelected(random);
  };

  const handleUpdatePoints = () => {
    const pointsCopy = { ...points };
    pointsCopy[selected] += 1;
    setPoints(pointsCopy);

    handleMostVoted(pointsCopy);
  }

  const handleMostVoted = (pointsCopy) => {
    const maxPoints = Object.entries(pointsCopy).reduce((max, current) => {
      return current[1] > max[1] ? current : max;
    }, ["", -Infinity]);

    setMostVoted(maxPoints);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {points[selected]} points</p>
      <Button text={"next anecdote"} handleClick={handleRandomAnecdote}/>
      <Button text={"vote"} handleClick={handleUpdatePoints} />

      <h1>Anecdote with most votes</h1>
      {anecdotes[mostVoted[0]]}
      <p>has {mostVoted[1]} points</p>
    </div>
  )
}

export default App
