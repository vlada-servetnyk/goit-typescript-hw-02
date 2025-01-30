import axios from "axios";

const fetchImages = async () => {
    const BASE_URL = 'https://api.unsplash.com/photos';
    const API_KEY = 'SsodOwEaRVJvQIEMZELKeOwuDTK689xReyUuAdtNj9s';

    const response = await axios.get(`${BASE_URL}`, {
        params: {
            query: 'cat',
            client_id: API_KEY
        }
    });

    return response.data;
};

export default fetchImages;