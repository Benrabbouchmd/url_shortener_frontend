export const generateShortUrl = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const length = 6;
    const randomStr = Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    return `https://short.ly/${randomStr}`;
  };
  
  export const generateStats = () => ({
    clicks: Math.floor(Math.random() * 1000),
    createdAt: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toLocaleDateString()
  });