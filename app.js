const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLon(argv.direccion)
//     .then(console.log)


// clima.getClima(47, 25)
//     .then(console.log)
//     .catch(console.log)


const getInfo = async(direccion) => {

    try {
        const coord = await lugar.getLugarLatLon(direccion);
        const temp = await clima.getClima(coord.lat, coord.lon);
        return `El clima de ${coord.direccion} es de ${temp}`
    } catch (e) {
        return `No se pudo determinar el clima de  ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);