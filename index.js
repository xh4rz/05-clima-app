require('dotenv').config();

const {
	inquirerMenu,
	pausa,
	leerInput,
	listarLugares
} = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async () => {
	const busquedas = new Busquedas();

	let opt;

	do {
		opt = await inquirerMenu();

		switch (opt) {
			case 1:
				// Mostrar mensaje
				const termino = await leerInput('Ciudad: ');

				// Buscar los lugares
				const lugares = await busquedas.ciudad(termino);

				// Seleccionar el lugar
				const id = await listarLugares(lugares);
				const lugarSel = lugares.find((l) => l.id === id);

				// Clima
				const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng);

				// Mostrar resultados
				console.clear();
				console.log('\nInformación de la ciudad\n'.green);
				console.log('Ciudad:', lugarSel.nombre.green);
				console.log('Lat:', lugarSel.lat);
				console.log('Lng:', lugarSel.lng);
				console.log('Temperatura:', clima.temp);
				console.log('Mínima:', clima.min);
				console.log('Máxima:', clima.max);
				console.log('Como está el clima:', clima.desc.green);
		}

		if (opt !== 0) await pausa();
	} while (opt !== 0);
};

main();
