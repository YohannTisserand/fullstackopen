import { useState } from "react";

const Header = ({title}) => {
  return (
    <div>{title}</div>
  )
}

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistic = ({text, value}) => {
  return (
    text === 'Positive' ? <tr><td>{text} {value} %</td></tr> : <tr><td>{text} {value}</td></tr>
  )
}

const Stat = ({clicks}) => {
  const total = clicks.good + clicks.neutral + clicks.bad
  const average = (clicks.good * 1 + clicks.bad * -1) / total
  const positive = clicks.good * (100/total)

  if (total === 0) {
    return (
      'no feedback given'
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
          <Statistic text='Good' value={clicks.good} />
          <Statistic text='Neutral' value={clicks.neutral} />
          <Statistic text='Bad' value={clicks.bad} />
          <Statistic text='All' value={total} />
          <Statistic text='Average' value={average} />
          <Statistic text='Positive' value={positive} />
          </tr>
      </tbody>
    </table>
    </div>
  )
}

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGoodClick = () =>
    setClicks({ ...clicks, good: clicks.good + 1 })

  const handleNeutralClick = () =>
  setClicks({ ...clicks, neutral: clicks.neutral + 1 })

  const handleBadClick = () => 
    setClicks({ ...clicks, bad: clicks.bad + 1 })

  return (
    <div>
      <h1><Header title="Customer feedback" /></h1>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <h2><Header title='Statistics' /></h2>
      <Stat clicks={clicks} />
    </div>
  );
}

export default App;
