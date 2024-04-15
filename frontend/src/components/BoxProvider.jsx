import { Box } from '@chakra-ui/react'
import React from 'react'

const BoxProvider = (props) => {
  return (
      <div className='box'>
          <Box bg={props.data} w='100%' p={4} color='white'>
            {props.data}
          </Box>
      </div>
  )
}

export default BoxProvider