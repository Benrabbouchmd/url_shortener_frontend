import React from 'react';
import { TextField, Button, CircularProgress } from '@mui/material';

export const URLShortenerForm = ({ longUrl, error, loading, onUrlChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <TextField
      fullWidth
      variant="outlined"
      label="Enter your long URL here..."
      value={longUrl}
      onChange={(e) => onUrlChange(e.target.value)}
      error={!!error}
      helperText={error}
      sx={{ mb: 2 }}
    />
    <Button 
      type="submit"
      variant="contained"
      fullWidth
      disabled={loading}
      sx={{ mb: 4 }}
    >
      {loading ? (
        <CircularProgress size={24} color="inherit" />
      ) : (
        'Shorten URL'
      )}
    </Button>
  </form>
);