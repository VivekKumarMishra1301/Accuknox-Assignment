import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Button, Text, Tooltip } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
      <div className="app">
          <Header />
       <Tooltip label="Search Users To Chat" hasArrow placement='bottom-end'>
                  <Button variant='ghost' >
                      <FontAwesomeIcon icon={faSearch} />
                  {/* <i class="fa-thin fa-magnifying-glass"></i> */}
                  <Text d={{base:'none',md:'flex'}} px='4'>
                      SearchUser
                </Text>
              </Button>
        </Tooltip>
        
          <Footer/>
    </div>
  )
}

export default Services