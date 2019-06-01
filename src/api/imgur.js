import qs from 'qs';

const CLIENT_ID = 'cc149cd620f9d08';
const ROOT_URL = 'https://api.imgur.com/';

export default {
  login() {
    const params = {
      client_id: CLIENT_ID,
      response_type: 'token',
    }
    window.location = `${ROOT_URL}oauth2/authorize?${qs.stringify(params)}`;
  },
};