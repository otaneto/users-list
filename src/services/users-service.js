const usersService = {
  get() {
    return fetch('http://jsonplaceholder.typicode.com/users', { method: 'GET' });
  },
};

export default usersService;
