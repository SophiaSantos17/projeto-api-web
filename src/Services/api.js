import axios from 'axios';

const fetchBreedInfo = async (breed) => {
  try {
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${breed}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching breed information:', error);
    return [];
  }
};

export default fetchBreedInfo;