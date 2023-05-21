const Token = {
  get: () => localStorage.getItem('token'),
  delete: () => localStorage.removeItem('token'),
  set: (token) => localStorage.setItem('token', token),
};

export default Token;
