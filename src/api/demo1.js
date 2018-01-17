import Axios from 'axios'
import Api from './api-config'

export default {
  query(props, cb) {
    Axios.get(Api.technologyPath.demo1, props).then(response => {
      cb(response.data)
    }).catch((error) => {
      // eslint-disable-next-line
      console.log(error);
    })
  }
}
