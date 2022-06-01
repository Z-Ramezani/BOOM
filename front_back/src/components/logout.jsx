import axios from 'axios';

function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
}

function removeToken(userToken){
    sessionStorage.removeItem('token');
  }

const Logout = (props) => {

    const token = getToken();
    removeToken(token);
    window.location = '/';
    return null;
}
export default Logout;