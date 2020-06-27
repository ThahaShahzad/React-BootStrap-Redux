import React from 'react'
import { Navbar, Col, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  const [expanded, setexpanded] = React.useState(false)
  return (
    <>
      <Navbar expanded={expanded} style={{ backgroundColor: 'grey' }} expand='lg' variant='dark'>
        <Col md='2' />
        <Navbar.Brand>
          <img
            src={'https://www.polestarglobal.com/media/aq0fpz4t/pole-star-logo-alt.png'}
            alt={'Pole Star'}
            width='205'
            height='24'></img>
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setexpanded((prevExpanded) => (prevExpanded = !prevExpanded))}
          aria-controls='basic-navbar-nav'
        />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto' onClick={() => setexpanded(false)}>
            <Link className='text-light nav-link' to='/'>
              Home
            </Link>
            <Link className='text-light nav-link' to='/searchcoms'>
              Communicators
            </Link>
            <Link className='text-light nav-link' to='/searchmodels'>
              Models
            </Link>
            <Link className='text-light nav-link' to='/searchchannels'>
              Channels
            </Link>
            <Link className='text-light nav-link' to='/searchenpoints'>
              Endpoints
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
