import React from 'react'
import { GoogleMap, useLoadScript, Marker, Polyline } from '@react-google-maps/api'
import Loader from 'react-loader-spinner'

function MyMap({ lat, lng, width, height, zoom, positions }) {
  const containerStyle = {
    width: '100%',
    marginLeft: 0
  }
  const center = {
    lat: lat,
    lng: lng
  }
  const position = {
    lat: lat,
    lng: lng
  }
  let path =
    positions && Array.isArray(positions)
      ? positions.map((val) => ({ lat: Number(val.latitude), lng: Number(val.longitude) }))
      : []
  path = path.filter((val) => !isNaN(val.lat))
  const options = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000,
    paths: path,
    zIndex: 0.5
  }
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCmGGKl-us0y9wYAgVTViwZJ1zg4SKDFgI'
    // ...otherOptions
  })
  const renderMap = () => {
    // wrapping to a function is useful in case you want to access `window.google`
    // to eg. setup options or create latLng object, it won't be available otherwise
    // feel free to render directly if you don't need that
    //const onLoad = React.useCallback(function onLoad(mapInstance) {})
    return (
      <>
        <div
          style={{
            height: 500,
            width: '100%',
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'center',
            padding: 0
          }}>
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
            {
              <>
                <Marker position={position} />
                <Polyline path={path} options={options} />
              </>
              // ...Your map components
            }
          </GoogleMap>
        </div>
      </>
    )
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }
  return <>{isLoaded ? renderMap() : <Loader type='Grid' />}</>
}

export default MyMap
