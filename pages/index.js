import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

import { baseUrl, fetchApi } from '../utils/fetchApi'
import Property from '../components/Property';


const Banner = ({ purpose, title1, title2, src, imageUrl, desc1, desc2, buttonText, linkName }) => (
  
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    
       <Image src={imageUrl} width={500} height={300} alt='banner' />
  
   
    <Box p='5'>
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text  fontSize="3xl" fontWeight="bold"> {title1} <br /> {title2} </Text>
      <Text  fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700"> {desc1}  <br /> {desc2} </Text>
      <Button fontSize="xl" >
        <Link href={linkName}><a>{buttonText}</a></Link>
      {console.log(linkName)}

      </Button>
    </Box>

  </Flex>
)

export default function Home( { propertiesForSale, propertiesForRent}) {
  console.log(propertiesForRent, propertiesForSale)
  return (
    <Box >
      <h1>hello world</h1>
      <Banner 
        purpose='Rent a Home' 
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"  
        imageUrl="/images/house1.jpg"

      />
      <Flex flexWrap='wrap'>
        {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}

      </Flex>

      <Banner 
        purpose='BUY A HOME' 
        title1="Find, Buy and Own Your"
        title2="Dream Home"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"  
        imageUrl="/images/house1.jpg"

      />
      <Flex flexWrap='wrap'>
        {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}

      </Flex>


     
    </Box>
  )
}


// fetching APIs
export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=9`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=9`)

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    }
  }
}