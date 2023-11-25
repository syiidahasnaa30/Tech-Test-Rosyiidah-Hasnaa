import { BASE_URL, TOKEN } from "./config.js";

const getAllUser = async () => {
    const data = await fetch(BASE_URL + "/user", {
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${TOKEN}`,
        },
    });
    const datajson = await data.json()
    console.log(datajson.data)
    return datajson.data
}
const addUser = async ({ name, address, gender, born_date }) => {
    const response = await fetch(`${BASE_URL}/user`, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${TOKEN}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name, address, gender, born_date
        })
    });

    const responseJson = await response.json()
    const { message, data } = responseJson
    return { message, data }
}

const deleteUser = async (id) => {
    const response = await fetch(`${BASE_URL}/user/${id}`, {
        method: 'DELETE',
        headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${TOKEN}`,
        }
    });
    const responseJson = await response.json()
    return responseJson.message;
}

const getUser = async (id) => {
    const response = await fetch(`${BASE_URL}/user/${id}`, {
        headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        }
    });
    const responseJson = await response.json();
    if (responseJson.message === "success") {
        return responseJson.data
    } else {
        return responseJson.detail
    }
}
export { getAllUser, addUser, deleteUser, getUser }