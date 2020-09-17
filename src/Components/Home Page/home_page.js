import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

function HomePage() {
  console.log(process.env.REACT_APP_LOCALHOST)
  console.log(process.env.REACT_APP_LOCALHOST_BI)
  console.log(process.env.NODE_ENV)
  let host = process.env.REACT_APP_LOCALHOST
  if (process.env.NODE_ENV==='production') {
      host = process.env.REACT_APP_LOCALHOST_BI
  }
  //process.env.REACT_APP_LOCALHOST = host
  console.log(host)

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
