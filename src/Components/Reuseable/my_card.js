import React from 'react'
import { Card } from 'react-bootstrap'

function MyCard({
  card_border,
  card_style,
  header_text,
  header_class,
  header_style,
  title_text,
  title_style,
  main_text,
  main_stle,
  footer_text,
  footer_style,
  card_img
}) {
  return (
    <>
      <Card border={card_border} style={card_style}>
        <Card.Header className={header_class} style={header_style}>
          {header_text}
        </Card.Header>
        <Card.Img variant='top' src={card_img} />
        <Card.Body style={main_stle}>
          <Card.Title style={title_style}>{title_text}</Card.Title>
          {main_text}
        </Card.Body>
        {footer_text && <Card.Footer style={footer_style}>{footer_text}</Card.Footer>}
      </Card>
    </>
  )
}

export default MyCard
