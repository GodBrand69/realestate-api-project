import { useContext } from "react";
import { Box, Icon, Flex } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Flex marginRight="1" alignItems="center" justifyContent="center">
            <Icon
                as={FaArrowAltCircleLeft}
                cursor="pointer"
                onClick={() => scrollPrev()}
                fontSize="2xl"
            />
        </Flex>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Flex marginRight="1" alignItems="center" justifyContent="center">
            <Icon
                as={FaArrowAltCircleRight}
                cursor="pointer"
                onClick={() => scrollNext()}
                fontSize="2xl"
            />
        </Flex>
    )
}

const ImageScrollbar = ({ data }) => {
    return (  
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data.map((image) => (
                <Box width="910px" key={image.id} itemID={image.id} p="1" overflow="hidden">
                    <Image
                        placeholder="blur" 
                        blurDataURL={image.url} 
                        src={image.url} 
                        width={1000} 
                        height={500} 
                        alt="image" 
                        sizes="(max-width: 500px) 100px, (max-width: 1024px) 400px, 1000px"
                    />
                </Box>
            ))}
        </ScrollMenu>
    );
}
 
export default ImageScrollbar;