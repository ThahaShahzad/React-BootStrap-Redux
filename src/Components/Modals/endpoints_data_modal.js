import React from 'react'
import MyModal from '../Reuseable/my_modal'
import MyList from '../Reuseable/my_list'

function EndpointsDataModal({ show, hide, endpoint_id, endpoint_s_data }) {
  const find = (id) => endpoint_s_data && endpoint_s_data.find((val) => Number(val.id) === id)
  const endpoint_data = endpoint_id && find(endpoint_id)

  let headers = endpoint_data && Object.keys(endpoint_data)
  let data = endpoint_data && Object.values(endpoint_data)
  let formated_data =
    endpoint_data &&
    headers.map((val, index) => {
      return {
        label: val,
        value: data[index] === '' ? 'N/A' : data[index]
      }
    })
  return (
    <>
      <MyModal
        show={show}
        onHide={hide}
        size={'lg'}
        title_text='Enpoints Data'
        main_text={endpoint_data && <MyList data={formated_data} label_style={{ fontWeight: 'bold' }} />}
      />
    </>
  )
}

export default EndpointsDataModal
