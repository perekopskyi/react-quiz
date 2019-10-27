import axios from 'axios';

export default axios.create({
  baseURL: 'https://react-quiz-d9fe7.firebaseio.com/'
})