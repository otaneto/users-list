const usersService = {
  get() {
    return fetch('https://jsonplaceholder.typicode.com/users');
  },
};

export default usersService;
