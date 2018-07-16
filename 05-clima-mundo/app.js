const { argv } = require('./config/yargs');
const place = require('./place/place');
const weither = require('./weither/weither');

let getInfo = async (address) =>{
    try{
        let coors = await place.getPlaceLatLng(address);
        let temp = await weither.getWeither(coors.lat, coors.lng);

        return `The temperature is ${temp}ºC in ${coors.address}`;
    }catch (e) {
        return `The temperature could not be determined in ${address}`;
    }
};

getInfo(argv.address)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));