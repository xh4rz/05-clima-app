const axios = require('axios');

class Busquedas {
	historial = ['Tegucigalpa', 'Madrid', 'San José'];

	constructor() {
		// TODO: leer DB si existe
	}

	async ciudad(lugar = '') {
		try {
			// peticion http
			const resp = await axios.get(
				'https://api.mapbox.com/search/geocode/v6/forward?access_token=pk.eyJ1IjoieGg0cnoiLCJhIjoiY2x2cnF1MzM5MHJrbzJpbzAwdWk5dXhzbyJ9.NUo45bj7oNW9n3SNC9XxKQ&limit=5&language=es&q=bogota'
			);

			console.log(resp.data);

			return [];
		} catch (error) {
			return [];
		}
	}
}

module.exports = Busquedas;
