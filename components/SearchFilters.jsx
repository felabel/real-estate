import { useEffect, useState } from 'react';
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';


import { filterData, getFilterValues } from '../utils/filterData';

import React from 'react'

const SearchFilters = () => {
    const [filters, setFilters] = useState(filterData);

    const searchProperties = (getFilterValues) => {

    }
    // console.log({filterData})
  return (
    // <div>search filter</div>
    <Flex bg='gray.100'  p='4' justifyContent='center' flexWrap='wrap'>
      {filters.map((filter) => (
        
        <Box key={filter.queryName}>
          <Select 
          onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })} placeholder={filter.placeholder} 
          w='fit-content' p='2' >


          </Select>
        </Box>
      ))}
      
    </Flex>

  )
}

export default SearchFilters