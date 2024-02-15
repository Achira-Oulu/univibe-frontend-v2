import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 65.05932901186827,
  lng: 25.466210496200503
};

const UniversityMap = () => {
  // Removed the useState and useEffect hooks since we're not fetching data for now

  return (
    <LoadScript
      googleMapsApiKey= {process.env.REACT_APP_GOOGLE_MAPS_API_KEY} // Replace with your actual Google Maps API key
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Removed dynamic marker generation since we're not fetching locations */}
        {/* Example static marker at the center */}
        <Marker
          position={center}
        />
      </GoogleMap>
    </LoadScript>
  )
}

export default UniversityMap;
