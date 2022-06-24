import React from "react"
import Nav from "./components/Nav"
import Card from "./components/Card"
import data from "./data"

function App() {
  const cards = data.map(item => {
    return (
      <Card  item = {item} />
    )
  })
  
  return (
    <>
      <Nav />
      <section className="cards--list">
        {cards}
      </section>
    </>
  )
}


export default App;
