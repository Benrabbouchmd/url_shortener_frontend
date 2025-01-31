import React from 'react';
import { Box, TextField, IconButton, Typography, ListItem } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export const URLCard = ({ url, onCopy }) => (
  <ListItem sx={{ flexDirection: 'column', alignItems: 'stretch' }}>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        value={url.shortened}
        InputProps={{
          readOnly: true,
        }}
        sx={{ mr: 1 }}
      />
      <IconButton onClick={() => onCopy(url.shortened)} color="primary">
        <ContentCopyIcon />
      </IconButton>
    </Box>
    <Typography variant="body2" color="text.secondary" noWrap>
      Original: {url.original}
    </Typography>
    <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
      <Typography variant="body2" color="text.secondary">
        Clicks: {url.clicks}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Created: {url.createdAt}
      </Typography>
    </Box>
  </ListItem>
);
