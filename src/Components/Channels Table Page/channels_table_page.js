// import React from 'react'
// import BootstrapTable from 'react-bootstrap-table-next'
// import { Container, Row, Col, Button } from 'react-bootstrap'
// import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
// import paginationFactory from 'react-bootstrap-table2-paginator'
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
// import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css'
// import { useSelector, useDispatch } from 'react-redux'
// import Loader from 'react-loader-spinner'
// import { getChannels } from '../../Redux/Channels/actions'
// import EndpointsDataModal from '../Modals/endpoints_data_modal'
// import ChannelDataModal from '../Modals/channel_data_modal'

// function ChannelsTablePage() {
//   const dispatch = useDispatch()
//   const [enpointModalShow, setenpointModalShow] = React.useState(false)
//   const [channelModalShow, setchannelModalShow] = React.useState(false)
//   const [endpoint_id, setEndpoint_id] = React.useState()
//   const [channel_id, setchannel_id] = React.useState()
//   const endpoints_data = useSelector((state) => state.endpoints.data)
//   const endpoints_loaded = useSelector((state) => state.endpoints.loaded)
//   const channels_data = useSelector((state) => state.channels.data)
//   const channels_loaded = useSelector((state) => state.channels.loaded)
//   const channels_loading = useSelector((state) => state.channels.isloading)

//   const find_endpoint_data = (id) => endpoints_loaded && endpoints_data.find((val) => Number(val.id) === id)
//   const endpoint_ids = channels_loaded && channels_data.map((val) => Number(val.endpoint_id))
//   let endpoint_s_data = endpoint_ids && endpoint_ids.map((val) => find_endpoint_data(val))

//   const { SearchBar } = Search

//   const columns = [
//     {
//       dataField: 'id',
//       text: 'Channel Id',
//       sort: true
//     },
//     {
//       dataField: 'channel_name',
//       text: 'Channel Name',
//       sort: true
//     },
//     {
//       dataField: 'channel_name1',
//       text: 'Channel Name',
//       hidden: true
//     },
//     {
//       dataField: 'endpoint_name',
//       text: 'Endpoint Name',
//       sort: true
//     },
//     {
//       dataField: 'endpoint_name1',
//       text: 'Endpoint Name',
//       hidden: true
//     },
//     {
//       dataField: 'endpoint_id',
//       text: 'Endpoint Id',
//       sort: true
//     },
//     {
//       dataField: 'protocol_id',
//       text: 'Protocol Id',
//       sort: true
//     },
//     {
//       dataField: 'protocol_name',
//       text: 'Protocol Name',
//       sort: true
//     }
//   ]
//   let table_data =
//     channels_loaded &&
//     channels_data.map((val, index) => ({
//       index: index,
//       id: val.channel_id,
//       channel_name: (
//         <button
//           type='button'
//           className='link-button'
//           onClick={() => {
//             setchannel_id(Number(val.channel_id))
//             setchannelModalShow(true)
//           }}>
//           {val.channel_name}
//         </button>
//       ),
//       channel_name1: val.channel_name,
//       endpoint_name: (
//         <button
//           type='button'
//           className='link-button'
//           onClick={() => {
//             setEndpoint_id(Number(val.endpoint_id))
//             setenpointModalShow(true)
//           }}>
//           {endpoint_s_data ? endpoint_s_data[index].name : 'N/A'}
//         </button>
//       ),
//       endpoint_name1: endpoint_s_data ? endpoint_s_data[index].name : 'N/A',
//       endpoint_id: val.endpoint_id,
//       protocol_id: val.protocol_id,
//       protocol_name: val.protocol_name
//     }))
//   return (
//     <>
//       {channels_loaded && !channels_loading ? (
//         <Container fluid>
//           <h1>Channels Table</h1>
//           <Row>
//             <Col md='1' />
//             <Col>
//               <br></br>
//               <ToolkitProvider keyField='index' data={table_data} columns={columns} search>
//                 {(props) => (
//                   <>
//                     <Row>
//                       <Col md='2'>
//                         <SearchBar {...props.searchProps} />
//                       </Col>
//                       <Col md='9' />
//                       <Col md='1'>
//                         Refresh{' '}
//                         <Button onClick={() => dispatch(getChannels())}>
//                           <i className='fas fa-sync-alt'></i>
//                         </Button>
//                       </Col>
//                     </Row>
//                     <BootstrapTable
//                       {...props.baseProps}
//                       pagination={paginationFactory()}
//                       wrapperClasses='table-responsive'
//                     />
//                   </>
//                 )}
//               </ToolkitProvider>
//             </Col>
//             <Col md='1' />
//           </Row>
//         </Container>
//       ) : channels_loading ? (
//         <Loader />
//       ) : null}
//       <EndpointsDataModal
//         show={enpointModalShow}
//         hide={() => setenpointModalShow(false)}
//         endpoint_id={endpoint_id}
//         endpoint_s_data={endpoint_s_data}
//       />
//       <ChannelDataModal show={channelModalShow} hide={() => setchannelModalShow(false)} channel_id={channel_id} />
//     </>
//   )
// }

// export default ChannelsTablePage

import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'
import EndpointsDataModal from '../Modals/endpoints_data_modal'
import ChannelDataModal from '../Modals/channel_data_modal'
import MyTable from '../Reuseable/my_table'

function ChannelsTablePage() {
  const [enpointModalShow, setenpointModalShow] = React.useState(false)
  const [channelModalShow, setchannelModalShow] = React.useState(false)
  const [endpoint_id, setEndpoint_id] = React.useState()
  const [channel_name, setChannel_name] = React.useState()
  const endpoints_data = useSelector((state) => state.endpoints.data)
  const endpoints_loaded = useSelector((state) => state.endpoints.loaded)
  const channels_data = useSelector((state) => state.channels.data)
  const channels_loaded = useSelector((state) => state.channels.loaded)
  const channels_loading = useSelector((state) => state.channels.isloading)

  const find_endpoint_data = (id) => endpoints_loaded && endpoints_data.find((val) => Number(val.id) === id)
  const endpoint_ids = channels_loaded && channels_data.map((val) => Number(val.endpoint_id))
  let endpoint_s_data = endpoint_ids && endpoint_ids.map((val) => find_endpoint_data(val))

  const columns = React.useMemo(
    () => [
      {
        accessor: 'id',
        Header: 'Channel Id',
        Filter: '',
        sort: true
      },
      {
        accessor: 'channel_name',
        Header: 'Channel Name',
        Filter: '',
        sort: true
      },
      {
        accessor: 'channel_name1',
        Header: 'Channel Name',
        Filter: '',
        hidden: true
      },
      {
        accessor: 'endpoint_name',
        Header: 'Endpoint Name',
        Filter: '',
        sort: true
      },
      {
        accessor: 'endpoint_name1',
        Header: 'Endpoint Name',
        Filter: '',
        hidden: true
      },
      {
        accessor: 'endpoint_id',
        Header: 'Endpoint Id',
        Filter: '',
        sort: true
      },
      {
        accessor: 'protocol_id',
        Header: 'Protocol Id',
        Filter: '',
        sort: true
      },
      {
        accessor: 'protocol_name',
        Header: 'Protocol Name',
        Filter: '',
        sort: true
      }
    ],
    []
  )
  let table_data = React.useMemo(
    () =>
      channels_data &&
      channels_data.map((val, index) => ({
        id: val.channel_id,
        channel_name: (
          <button
            type='button'
            className='link-button'
            onClick={() => {
              setChannel_name(val.channel_name)
              setchannelModalShow(true)
            }}>
            {val.channel_name}
          </button>
        ),
        channel_name1: val.channel_name,
        endpoint_name: (
          <button
            type='button'
            className='link-button'
            onClick={() => {
              setEndpoint_id(Number(val.endpoint_id))
              setenpointModalShow(true)
            }}>
            {endpoint_s_data ? endpoint_s_data[index].name : 'N/A'}
          </button>
        ),
        endpoint_name1: endpoint_s_data ? endpoint_s_data[index].name : 'N/A',
        endpoint_id: val.endpoint_id,
        protocol_id: val.protocol_id,
        protocol_name: val.protocol_name
      })),
    [channels_data, endpoint_s_data]
  )

  return (
    <>
      {channels_data && !channels_loading ? (
        <Container fluid>
          <h1>Channels</h1>
          <MyTable
            initialState={{
              pageSize: channels_data.length,
              hiddenColumns: ['channel_name1', 'endpoint_name1']
            }}
            columns={columns}
            data={table_data}
          />
        </Container>
      ) : channels_loading ? (
        <Loader />
      ) : null}
      <EndpointsDataModal
        show={enpointModalShow}
        hide={() => setenpointModalShow(false)}
        endpoint_id={endpoint_id}
        endpoint_s_data={endpoint_s_data}
      />
      <ChannelDataModal show={channelModalShow} hide={() => setchannelModalShow(false)} channel_name={channel_name} />
    </>
  )
}

export default ChannelsTablePage
