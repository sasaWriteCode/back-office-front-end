import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" height="50px">
      <Typography variant="h6" gutterBottom>
        ©2023 All right reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
