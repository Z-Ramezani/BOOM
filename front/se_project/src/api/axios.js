import axios from 'axios';

const baseURL= 'http://hidden.pythonanywhere.com/';

const axiosInstance = axios.create({
	baseUR: baseURL,
	// timeout: 5000,
	// headers:{
	// 	authorization: localStorage.getItem('access_token')
	// 	? 'JWT ' + localStorage.getItem('access_token')
	// 	: null,
	// 	'Content_Type': 'application/json',
	// 	accept: 'application/json',
	// },
});


export default axiosInstance;