import axios from "axios";

const fetchData = async (page, setData, setTotalPages, setIsLoading, query) => {
  try {
    const url = query
      ? `https://swapi.dev/api/people/?search=${query}`
      : `https://swapi.dev/api/people/?page=${page}`;

    const response = await axios.get(url);
    setData(response.data.results);
    setTotalPages(Math.ceil(response.data.count / 10));
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    setIsLoading(false);
  }
};

export default fetchData;
