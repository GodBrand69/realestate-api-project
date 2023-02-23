import { Box, Flex, Avatar, Text, Spacer } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import ImageScrollbar from "@/components/ImageScrollbar";

import { fetchApi, baseUrl } from "@/utils/fetchApi";

const PropertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } }) => (
    <Box maxWidth="1000px" margin="auto" p="4">
        {photos && <ImageScrollbar data={photos} />}
        <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
            <Flex alignItems="center">
                <Box >
                    {isVerified && <GoVerified color="green.400" />}
                </Box>
                <Text fontWeight="bold" paddingLeft="2" fontSize="large">
                    AED {millify(price)} {rentFrequency && `/${rentFrequency}`}
                </Text>
            </Flex>
            <Box>
                <Avatar size="sm" src={agency?.logo?.url} />
            </Box>
        </Flex>
        <Flex alignItems="center" color="blue.400" w="250px" justifyContent="space-between" p="1">
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex>
        <Box marginTop="2">
            <Text fontWeight="bold" marginBottom="2" fontSize="lg">
                {title}
            </Text>
            <Text lineHeight="2" color="gray.600" >
                {description}
            </Text>
        </Box>
        <Flex justifyContent="space-between" textTransform="uppercase" flexWrap="wrap">
            <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
                <Text>Type</Text>
                <Text fontWeight="bold">{type}</Text>
            </Flex>
            <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
                <Text>Purpose</Text>
                <Text fontWeight="bold">{purpose}</Text>
            </Flex>
            {furnishingStatus && (
                <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
                    <Text>Furnishing Status</Text>
                    <Text fontWeight="bold">{furnishingStatus}</Text>
                </Flex>
            )}
        </Flex>
        <Box>
            {amenities.length && <Text fontSize='2xl' fontWeight="black" marginTop="5">Amenities</Text>}
            <Flex flexWrap="wrap">
                {amenities.map((item) => (
                    item.amenities.map((amenity) => (
                        <Text
                            key={amenity.text}
                            fontWeight="bold"
                            color="blue.400"
                            fontSize="l"
                            bg="gray.200"
                            p="2"
                            m="1"
                            backgroundColor="gray.200"

                        >
                            {amenity.text}
                        </Text>
                    ))
                ))}
            </Flex>
        </Box>
    </Box>
) 

export default PropertyDetails;

export async function getServerSideProps ({ params: { id } }) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`)

    return {
        props: {
            propertyDetails: data
        }
    }
}
