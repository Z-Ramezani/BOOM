// import buscasosApi from "../src";

// const logic = {
//   set userToken(token) {
//     sessionStorage.userToken = token;
//   },

//   get userToken() {
//     if (sessionStorage.userToken === null) return null;
//     if (sessionStorage.userToken === undefined) return undefined;
//     return sessionStorage.userToken;
//   },

//   get isUserLoggedIn() {
//     return this.userToken;
//   },

//   loginUser(email, password) {
//     return (async () => {
//       try {
//         const { token } = await buscasosApi.authenticateUser(email, password);
//         this.userToken = token;
//       } catch (error) {
//         throw new Error(error.message);
//       }
//     })();
//   }
// };
// export default logic;