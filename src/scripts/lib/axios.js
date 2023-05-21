import axios from 'axios';
import Config from '../globals/config';

const instance = axios.create({
  baseURL: Config.BASE_URL,
});

export default instance;
