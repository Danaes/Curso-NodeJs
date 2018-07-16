const axios = require('axios');

const getPlaceLatLng = async address => {

    let encondeURL = encodeURI( address );
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${ encondeURL }&key=AIzaSyD9Fdn72EQezExSkcFBPSHJp2ixz9oDGcY`;

    let resp = await axios.get(url);

    if( resp.data.status === 'ZERO_RESULTS' )
        throw new Error(`No results for ${ address }`);

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        address: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
};

module.exports = {
    getPlaceLatLng
}