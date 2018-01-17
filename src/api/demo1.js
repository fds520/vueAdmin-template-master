import Axios from 'axios'

export default {
  query(props, cb) {
    Axios.get('http://localhost:9091/v1/technology-path/demo1', props).then((response) => {
      cb(response.data)
    }).catch((error) => {
      // eslint-disable-next-line
      console.log(error);
    })
  }
}
