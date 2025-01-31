import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const shortenUrl = async (url) => {
    try {
      const response = await api.post('/shorten', { 'url': url });
      return response.data;
    } catch (error) {
      console.error('Error shortening URL:', error);
      throw error;
    }
  };
  
  export default shortenUrl;