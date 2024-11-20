import { useState } from 'react'
import './App.css'

const Button = ({ innerText, handleClick }) => {
  return (
    <button onClick={handleClick}>{innerText}</button>
  )
}

const Statistics = ({ title, goodCounter, neutralCounter, badCounter, all, average, positive }) => {
  return (
    <>
      {goodCounter === 0 && neutralCounter === 0 && badCounter === 0
        ? <p>No feedback given</p>
        : <table> 
            <thead>
              <tr>
                <th><h2>{title}</h2></th>
              </tr>
            </thead>
            <tbody>
              <StatisticsLine text={"good"} value={goodCounter} />
              <StatisticsLine text={"neutral"} value={neutralCounter} />
              <StatisticsLine text={"bad"} value={badCounter} />
              <StatisticsLine text={"all"} value={all} />
              <StatisticsLine text={"average"} value={average} />
              <StatisticsLine text={"positive"} value={positive} />
            </tbody>
          </table>
      }
    </>
  )
}

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <th>{text}</th>
      <td>{value}</td>
    </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [points, setPoints] = useState(0);
  const [average, setAverage] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const calculateAverage = (newPoints, newTotal) => {
    console.log(average);
    if (average < 0) return 0;

    const avg = newPoints / newTotal;

    return avg < 0 ? 0 : avg;
  }

  const increaseGoodByOne = () => {
    const newGood = good + 1;
    const newTotal = total + 1;
    const newPoints = points + 1;
  
    setGood(newGood);
    setTotal(newTotal);
    setPoints(newPoints);
    setAverage(calculateAverage(newPoints, newTotal));
    setPositivePercentage(newGood / newTotal);
  };
  
  const increaseNeutralByOne = () => {
    const newNeutral = neutral + 1;
    const newTotal = total + 1;
  
    setNeutral(newNeutral);
    setTotal(newTotal);
    setAverage(calculateAverage(points, newTotal));
    setPositivePercentage(good / newTotal);
  };
  
  const increaseBadByOne = () => {
    const newBad = bad + 1;
    const newTotal = total + 1;
    const newPoints = points - 1;
  
    setBad(newBad);
    setTotal(newTotal);
    setPoints(newPoints);
    setAverage(calculateAverage(newPoints, newTotal));
    setPositivePercentage(good / newTotal);
  };
  
  return (
    <>
      <h2>give feedback</h2>
      <Button innerText={"good"} handleClick={increaseGoodByOne} />
      <Button innerText={"neutral"} handleClick={increaseNeutralByOne} />
      <Button innerText={"bad"} handleClick={increaseBadByOne} />

      <Statistics 
        title={"statistics"}
        goodCounter={good}
        neutralCounter={neutral}
        badCounter={bad}
        all={total}
        average={average}
        positive={positivePercentage}
      />
    </>
  )
}

export default App
