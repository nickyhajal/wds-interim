import axios from 'axios';

const api = (url, data, success = false, error = false, opts = {}) => {
	bits = url.split(' ')
	url = '/api/' + bits[1]
	return axios({
		method: bits[0],
		url: `https://worlddominationsummit.com/api/${bits[1]}`
		data: data
	});
}

export default api;