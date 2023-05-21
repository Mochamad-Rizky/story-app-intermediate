const checkAuthUser = () => Boolean(localStorage.getItem('token'));

export default checkAuthUser;
