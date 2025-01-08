import React from 'react'
import WidgetWrapper from '../widgetwrapper'
import { Box, Typography, useTheme } from '@mui/material'
import Friends from './friends'

const Friendlist = () => {
    const {palette} = useTheme();
  return (
    <>
    <WidgetWrapper>
    <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1rem" }}
      >
        Friend List
      </Typography>
      <Box><Friends/></Box>
    </WidgetWrapper>
    </>
  )
}

export default Friendlist