const usersService = {
  get() {
    return fetch('http://jsonplaceholder.typicode.com/users');
  },
};

export default usersService;
