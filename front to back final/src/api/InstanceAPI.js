import axios from 'axios';


const instance = axios.create({
	baseURL: "http://hidden.pythonanywhere.com/",
});


export { instance };
