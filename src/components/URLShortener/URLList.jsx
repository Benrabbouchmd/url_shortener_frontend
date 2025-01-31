import React from 'react';
import { Box, Typography, List, Divider } from '@mui/material';
import { URLCard } from './URLCard';

export const URLList = ({ urls, onCopy }) => (
  <Box>
    <Typography variant="h6" sx={{ mb: 2 }}>
      Recent URLs
    </Typography>
    <List>
      {urls.map((url, index) => (
        <React.Fragment key={url.shortened}>
          <URLCard url={url} onCopy={onCopy} />
          {index < urls.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  </Box>
);