import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

function HomePage() {
  return (
    <>
      <Container fluid>
        <Jumbotron>
          <h1>Welcome to Pole Star Support Portal</h1>
        </Jumbotron>
        <img
          src='https://www.polestarglobal.com/media/tbpkoqbe/pr-brand-launch.jpg?anchor=center&mode=crop&width=1200&height=630&quality=80'
          alt='Pole Star'></img>
      </Container>
    </>
  )
}

export default HomePage
