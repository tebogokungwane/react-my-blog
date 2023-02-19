import axios from "axios";

const BASE_URL = 'http://localhost:8080/api/contact';

class ContactService{

    saveContact(contactData){
        return axios.post(BASE_URL, contactData);

    }

}
export default new ContactService();