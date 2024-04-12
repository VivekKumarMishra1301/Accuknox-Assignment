import React from 'react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
const Header = () => {
  return (
      <div className='header'>
          <Flex className='nav' minWidth='max-content' alignItems='center' gap='2' m='auto'>

            <Box p='2'>
                <Heading size='md' color='white'>Chakra App</Heading>
            </Box>
            <Spacer />
            {/* <ButtonGroup gap='2'>
                <Button colorScheme='teal' color='white' bgColor='#0e1630' >Sign Up</Button>
                <Button colorScheme='teal' color='white'>Log in</Button>
            </ButtonGroup> */}
             <div style={{ display: 'flex', flexDirection: 'row' }}>
  <div className="sign-up" style={{ color: 'white', margin: '0 10px', padding: '10px' }}>Sign Up</div>
  <div className="log-in" style={{ color: 'white', margin: '0 10px', padding: '10px' }}>Log In</div>
</div>

          </Flex>
      </div>
  )
}

export default Header