import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Button, Stack, Text, Tooltip, useToast } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Input } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import axios from 'axios';
import BoxProvider from './BoxProvider';

const Services = () => {
    const [search, setSearch] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
  const toast = useToast();
  const [color, setColor] = useState("");
  console.log(color);
    const handleSearch = async () => {
       
        if (!color) return;
        try {
            setLoading(true);
            const { data } = await axios.get(`http://localhost:3000/api?search=${color}`);
          setLoading(false);
          console.log(data)
          if (data.success)
            setSearch(data.searchResult);
        } catch (error) {
            toast({
                title: 'Error Occurred',
                description: "Failed to Load Search Result",
                status: 'error',
                duration: 2000,
                isClosable: true,
                position: 'bottom-left'
            });
        }
  };
  const handleColor = (col) => {
    setColor(col);
  }

    return (
        <div className="app">
            <Header />
            <Heading>Enter Colors to Search</Heading>
            <Tooltip label="Search Users To Chat" hasArrow placement='bottom-end'>
                <Button variant='ghost' w='666'>
                    <FontAwesomeIcon icon={faSearch} />
                    <Stack spacing={3}>
                        <Input variant='outline' onChange={(e) => handleColor(e.target.value)} />
            </Stack>
            <Stack direction='row' spacing={4} align='center'>
              <Button colorScheme='teal' variant='solid'
                onClick={handleSearch}
              >
              Search
              </Button>
                          </Stack>
                </Button>
            </Tooltip>
            {search.map((item, index) => (
                <BoxProvider key={index} data={item.color} className='box'/>
            ))}
        </div>
    );
};

export default Services;
