import React from 'react'
import { Form, FormControl } from 'react-bootstrap'
import { useFormContext, Controller } from 'react-hook-form'
import {} from 'react'
import NumberFormat from 'react-number-format'

function MyInput({
  label,
  name,
  options,
  input_type,
  max_range,
  id,
  value,
  disabled,
  checked,
  size,
  rows,
  label_size,
  style,
  defaultValue,
  placeholder
}) {
  const { register } = useFormContext()
  if (!options) {
    options = []
  }
  return (
    <>
      <Form.Group controlId={id} className='input' style={style}>
        {label && <Form.Label as={label_size}> {label} </Form.Label>}
        {input_type === 'select' ? (
          <Form.Control as={input_type} name={name} ref={register}>
            <>
              <option value=''>choose...</option>
              {options.map((val, index) => (
                <option key={index} value={val}>
                  {val}
                </option>
              ))}
            </>
          </Form.Control>
        ) : null}
        {input_type === 'num_select' ? (
          <Form.Control as={'select'} name={name} ref={register} style={{ width: '30%' }} type='submit'>
            <>
              <option value=''>{options[0]}</option>
              {options.slice(1, options.length).map((val, index) => (
                <option key={index} value={val}>
                  {val}
                </option>
              ))}
            </>
          </Form.Control>
        ) : null}
        {input_type === 'text' ? (
          <FormControl type='text' placeholder={placeholder} name={name} ref={register} />
        ) : null}
        {input_type === 'textarea' ? (
          <>
            <Form.Control
              as={input_type}
              name={name}
              ref={register}
              autoComplete='off'
              rows={rows}
              placeholder={placeholder}
            />
          </>
        ) : null}
        {input_type === 'range' ? (
          <>
            <Form.Control type={input_type} className='slider' min={1} max={max_range} name={name} ref={register} />
          </>
        ) : null}
        {input_type === 'switch' ? (
          <>
            <input type='checkbox' value={1} name={name} ref={register} />
          </>
        ) : null}
        {input_type === 'checkbox' ? (
          <>
            <input
              type='checkbox'
              value={value}
              name={name}
              ref={register}
              disabled={disabled}
              checked={checked}
              className='double'
              defaultValue={defaultValue}
            />
          </>
        ) : null}
        {input_type === 'radio' ? (
          <>
            <Form.Check
              type='radio'
              value={value}
              name={name}
              ref={register}
              disabled={disabled}
              checked={checked}
              defaultValue={defaultValue}
            />
          </>
        ) : null}
        {input_type === 'number' ? (
          <>
            <Controller
              name={name}
              as={<NumberFormat type='text' placeholder={placeholder} name={name} ref={register} />}
            />
          </>
        ) : null}
      </Form.Group>
    </>
  )
}

export default MyInput
