import axios from "axios";

export async function login(email, password) {
    try {
        return await axios.post(`http://localhost:3001/login`, {
            email: email,
            password: password
        })

    } catch (err) {
        throw (err.response)
    }
}
