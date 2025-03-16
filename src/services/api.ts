import axios from "axios";

type Image = {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string;
};

type Props = {
    query: string,
    page: number
}

const fetchImages = async ({query, page}: Props):Promise<Image[]> => {
    const BASE_URL = 'https://api.unsplash.com/search/photos';
    const API_KEY = 'SsodOwEaRVJvQIEMZELKeOwuDTK689xReyUuAdtNj9s';

    const response = await axios.get(`${BASE_URL}?query=${query}&page=${page}&per_page=20&client_id=${API_KEY}`);
    return response.data.results;
};

export default fetchImages;