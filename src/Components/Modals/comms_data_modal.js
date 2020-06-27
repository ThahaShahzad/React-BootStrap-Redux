import React from 'react'
import MyModal from '../Reuseable/my_modal'
import MyList from '../Reuseable/my_list'

function CommsDataModal({ show, hide, comm_data }) {
  let headers = comm_data && Object.keys(comm_data)
  let data = comm_data && Object.values(comm_data)
  let formated_data = headers.map((val, index) => {
    return {
      label: val,
      value:
        index !== 6
          ? data[index] === ''
            ? 'N/A'
            : data[index]
          : data[index].map((val, index) => (
              <ul key={index}>
                <li>{`${val.name} : ${val.value}`}</li>
              </ul>
            ))
    }
  })
  return (
    <>
      <MyModal
        show={show}
        onHide={hide}
        size={'lg'}
        backdrop='static'
        title_text='Comms Data'
        main_text={<MyList data={formated_data} label_style={{ fontWeight: 'bold' }} />}
      />
    </>
  )
}

export default CommsDataModal
