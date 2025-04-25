const axios = {
  get: jest.fn(() =>
    Promise.resolve({
      data: {
        name: 'Mock User',
        location: 'Mock City',
        public_repos: 10,
      },
    })
  ),
};

export default axios;