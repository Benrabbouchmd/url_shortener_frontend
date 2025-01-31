import React from 'react';
import { Container, Paper, Box, Typography, Snackbar } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { URLShortenerForm } from './URLShortenerForm';
import { URLList } from './URLList';
import { useURLShortener } from '../../hooks/useURLShortener';

const URLShortener = () => {
  const {
    longUrl,
    shortenedUrls,
    loading,
    error,
    snackbarOpen,
    setLongUrl,
    setSnackbarOpen,
    handleSubmit,
    handleCopy
  } = useURLShortener();

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <LinkIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h4" component="h1">
            URL Shortener
          </Typography>
        </Box>

        <URLShortenerForm
          longUrl={longUrl}
          error={error}
          loading={loading}
          onUrlChange={setLongUrl}
          onSubmit={handleSubmit}
        />

        {shortenedUrls.length > 0 && (
          <URLList urls={shortenedUrls} onCopy={handleCopy} />
        )}

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={2000}
          onClose={() => setSnackbarOpen(false)}
          message="Copied to clipboard!"
        />
      </Paper>
    </Container>
  );
};

export default URLShortener;