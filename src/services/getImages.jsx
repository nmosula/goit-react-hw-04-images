import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const AXIOS_KEY = "32870286-1027cf9b16afcfb20a632269d";
const PER_PAGE = 40;
const PAGE = 1;
    
export const getImages = async (searchQuery, page) => {

    const response = await axios.get(`${BASE_URL}?key=${AXIOS_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${PAGE}&per_page=${PER_PAGE}`);
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

