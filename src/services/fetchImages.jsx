import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const AXIOS_KEY = "32870286-1027cf9b16afcfb20a632269d";
const PER_PAGE = 12;
    
export const fetchImages = async (searchQuery, page) => {

    const response = await axios.get(`${BASE_URL}?key=${AXIOS_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${PER_PAGE}`);
    const images = response.data.hits.map(
    ({ id, webformatURL, largeImageURL, tags }) => {
      return {
        id,
        webformatURL,
        largeImageURL,
        tags,
      };
    }
  );
  return { images, totalImages: response.data.totalHits };
   
}

