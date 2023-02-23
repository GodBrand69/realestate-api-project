import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Avatar, Text } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import defaultPhoto from "/public/download.jpg";

const Property = ({ property: {coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID}}) => (
    <Link href={`/property/${externalID}`} passHref>
        <Flex flexWrap="wrap" w="420px" paddingTop="5" alignItems="center" alignContent="center" justifyItems="center" justifyContent="center" p="5" cursor="pointer">
            <Box alignItems="center" alignContent="center" justifyItems="center" justifyContent="center">
                <Image className="house-images" src={coverPhoto ? coverPhoto.url : defaultPhoto} width={400} height={260} alt="house" />
            </Box>
            <Box>
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
                <Text fontSize="lg">
                    {title.length > 30 ? `${title.substring(0, 30)}...` : title}
                </Text>
            </Box>
        </Flex>
    </Link>
)

export default Property;
