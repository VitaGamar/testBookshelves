import axios from 'axios';
const URL = "https://react-test-globacap.herokuapp.com";
const headers = {'Content-Type': 'application/json',  'X-Auth-Token': '123123123123'};

export default {
    getBooks() {
        // Make a request for a user with a given ID
        return axios.get(`${URL}/books.json`, {headers})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
