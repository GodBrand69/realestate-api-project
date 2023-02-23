import Link from "next/link";
import { Menu, MenuButton, Box, Flex, MenuList, MenuItem, Spacer, IconButton} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc"
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi"

const Navbar = () => (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
        <Box fontSize="3xl" color="blue.300" fontWeight="bold">
            <Link href="/" paddingLeft="2">
                Realtor
            </Link>
        </Box>
        <Spacer />
        <Box>
        <Menu>
            <MenuButton as={IconButton} icon={<FcMenu />} variant="outline" color="red.400" />
            <MenuList>
                <Link href="/" passHref>
                    <MenuItem fontSize="large" icon={<FcHome />}>
                        Home
                    </MenuItem>
                </Link>
                <Link href="/search" passHref>
                    <MenuItem fontSize="large" icon={<BsSearch />}>
                        Search
                    </MenuItem>
                </Link>
                <Link href="/search?purpose=for-sale" passHref>
                    <MenuItem fontSize="large" icon={<FcAbout />}>
                        Buy Home
                    </MenuItem>
                </Link>
                <Link href="/search?purpose=for-rent" passHref>
                    <MenuItem fontSize="large" icon={<FiKey />}>
                        For Rent
                    </MenuItem>
                </Link>
            </MenuList>
        </Menu>
        </Box>
    </Flex>
)

export default Navbar;