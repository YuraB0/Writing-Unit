import axios from 'axios';

const DataService = {
  getGitHubUser: async (username) => {
    const response = await axios.get(\`https://api.github.com/users/\${username}\`);
    return response.data;
  },
};

export default DataService;