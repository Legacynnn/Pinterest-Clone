import axios from 'axios'

export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID LO2-ee9siC7hhmrssREqDXu9vnVdm7cGCKFvaKJ0IvM",
    },
})