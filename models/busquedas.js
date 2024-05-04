const axios = require('axios');

class Busquedas {
	historial = ['Tegucigalpa', 'Madrid', 'San José'];

	constructor() {
		// TODO: leer DB si existe
	}

	get paramsMapbox() {
		return {
			access_token:
				'pk.eyJ1IjoieGg0cnoiLCJhIjoiY2x2cnF1MzM5MHJrbzJpbzAwdWk5dXhzbyJ9.NUo45bj7oNW9n3SNC9XxKQ',
			limit: 5,
			language: 'es'
		};
	}

	async ciudad(lugar = '') {
		try {
			// peticion http
			const intance = axios.create({
				baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
				params: this.paramsMapbox
			});

			const resp = await intance.get();

			console.log(resp.data);

			return [];
		} catch (error) {
			return [];
		}
	}
}

module.exports = Busquedas;
