import DataService from '../services/DataService';
import axios from 'axios';

jest.mock('axios');

test('fetches GitHub user data', async () => {
  const userData = await DataService.getGitHubUser('mockuser');
  expect(userData.name).toBe('Mock User');
  expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/mockuser');
});