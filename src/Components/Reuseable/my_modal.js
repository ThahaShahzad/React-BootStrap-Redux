import React from 'react'
import { Modal } from 'react-bootstrap'

function MyModal({
  show,
  onHide,
  size,
  backdrop,
  header_style,
  title_text,
  title_style,
  main_text,
  main_stle,
  footer_text,
  footer_style
}) {
  return (
    <>
      <Modal show={show} onHide={onHide} size={size} backdrop={backdrop}>
        <Modal.Header style={header_style} closeButton>
          <Modal.Title style={title_style}>{title_text}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={main_stle}>{main_text}</Modal.Body>
        <Modal.Footer style={footer_style}>{footer_text}</Modal.Footer>
      </Modal>
    </>
  )
}

export default MyModal
