// import { all } from 'express/lib/application'
import { useState } from 'react'

const Header = ({text}) => {
  return (
    <div><h2>{text}</h2></div>
  )
}
const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Anecdote = ({text, votesCount}) =>
  <div>
    <p>{text}</p>
    <p>has {votesCount} votes</p>
  </div>

const MostVoted = ({anecdotes, allVotes}) => {
  const maxVote = Math.max(...allVotes)
  const index = allVotes.indexOf(maxVote)
  const max = anecdotes[index]
  if (maxVote === 0) {
    return (
      <p>not voted</p>
    )
  }
  return (
    <div>
      <p>{max}</p>
      <p>has {maxVote} vote</p>
    </div>
  )
}

const App = () => {

  const [selected, setSelected] = useState(0)
  const [allVotes, setAllVotes] = useState(Array(6).fill(0))

  const randomAnectodes = () => {
    const search = Math.floor(Math.random() * anecdotes.length)
    setSelected(search)
  }

  const handleVote = () => {
    const newAllVote = [...allVotes]
    newAllVote[selected] += 1
    setAllVotes(newAllVote)
  }

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Anecdote text={anecdotes[selected]} votesCount={allVotes[selected]} />
      <Button onClick={handleVote} text="Vote" />
      <Button onClick={randomAnectodes} text="Randomize" />
      <Header text="Anecdote with most vote" />
      <MostVoted anecdotes={anecdotes} allVotes={allVotes} />
    </div>
  )
}

export default App