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
console.log(getAllUser())

export default getAllUser