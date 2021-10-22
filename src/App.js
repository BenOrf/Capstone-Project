import './App.css';
import CardComponent from './components/card';
import { useEffect, useState } from 'react';



export default function Cards() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/notes')
    .then(res => res.json())
    .then(data => setNotes(data))
}, [])

  return (
    <Container>
      <Grid Container>
      {card.map(card => (
        <Grid item key={card.id} xs={12} md={6} lg={4}>
          <CardComponent card={card} />
      </Grid>
      ))}
      </Grid>
    </Container>
  )
}