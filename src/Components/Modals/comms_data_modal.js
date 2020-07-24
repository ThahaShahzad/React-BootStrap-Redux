import React from 'react'
import MyModal from '../Reuseable/my_modal'
import MyList from '../Reuseable/my_list'

function CommsDataModal({ show, hide, comm_data }) {
  let headers = comm_data && Object.keys(comm_data)
  let data = comm_data && Object.values(comm_data)
  // let sub_headers = comm_data && Object.keys(comm_data.subscribers[0])
  // let sub_data = comm_data && Object.values(comm_data.subscribers[0])
  // console.log('CommsDataModal -> sub_data', sub_data)
  // let formated_sub_data = sub_headers.map((val, index) => {
  //   return {
  //     label: val,
  //     value: sub_data[index]
  //   }
  // })
  let formated_data = headers.map((val, index) => {
    return {
      label: val === 'commands' ? null : val === 'subscribers' ? null : val,
      value:
        val === 'commands'
          ? null
          : val === 'identifiers'
          ? data[index].map((val, index) => (
              <ul key={index}>
                <li>{`${val.name} : ${val.value}`}</li>
              </ul>
            ))
          : val === 'subscribers'
          ? null
          : // formated_sub_data.map((val, index) => (
          //     <ul key={index}>
          //       <li>
          //         <span style={{ fontWeight: 'bold' }}>{val.label} : </span>
          //         <span>{val.value}</span>
          //       </li>
          //     </ul>
          //   ))
          data[index] === ''
          ? 'N/A'
          : data[index]
    }
  })
  return (
    <>
      <MyModal
        show={show}
        onHide={hide}
        size={'lg'}
        title_text='Comms Data'
        main_text={<MyList data={formated_data} label_style={{ fontWeight: 'bold' }} />}
      />
    </>
  )
}

export default CommsDataModal
