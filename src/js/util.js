import axios from "axios";

const fetchJokes = async () => {
    const data = await axios.get(`https://api.chucknorris.io/jokes/random`);
    return data;
};

export const fetchres = async () => {
    const res = await fetchJokes();
    document.getElementById('jokes').innerHTML = `${res.data.value}`;
    document.getElementById('jokes_img').setAttribute('src', `${res.data.icon_url}`)
    console.log(res.data.icon_url);
}