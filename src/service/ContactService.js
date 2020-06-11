import axios from 'axios'
import Contact from '../components/contacts/Contact'
const BACKEND_URL = "http://localhost:8080/contacts"

class ContactService {

    retrieveAll() {
        const res = axios.get(`${BACKEND_URL}/`)
        return res
    }
    deleteContact(id) {
        return axios.delete(`${BACKEND_URL}/${id}`)
    }
    getContact(id) {
        return axios.get(`${BACKEND_URL}/${id}`)
    }

    saveContact(contact) {
        return axios.post(`${BACKEND_URL}`, contact)
    }
    // updateCourse(userName, id, course) {
    //     return axios.put(`${INSTRUCTOR_API_URL}/${userName}/courses/${id}`, course)
    // }
    // getInstructors() {
    //     return axios.get(`${COURSE_API_URL}/instructors`)
    // }
}
export default new ContactService()