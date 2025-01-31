import { useState } from 'react';
import shortenUrl from '../services/api';

export const useURLShortener = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortenedUrls, setShortenedUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!longUrl) {
      setError('Please enter a valid URL');
      return;
    }

    try {
      setLoading(true);
      setError('');
      
      const response = await shortenUrl(longUrl);
      
      const newShortUrl = {
        original: longUrl,
        shortened: response.shortUrl,
      };

      setShortenedUrls(prev => [newShortUrl, ...prev]);
      setLongUrl('');
    } catch (err) {
      setError('Failed to shorten URL. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (url) => {
    navigator.clipboard.writeText(url);
    setSnackbarOpen(true);
  };

  return {
    longUrl,
    shortenedUrls,
    loading,
    error,
    snackbarOpen,
    setLongUrl,
    setSnackbarOpen,
    handleSubmit,
    handleCopy
  };
};