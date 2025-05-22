import React from 'react';
import { Flex, Box, Heading, Button, useColorModeValue, Spacer } from '@chakra-ui/react';
import CartWidget from "./CartWidget.jsx";
import Menu from "./Menu.jsx";
import { Link } from "react-router-dom";
const Navbar = () => {
  const bg = useColorModeValue('gray.100', 'gray.900');

  return (
    <Box bg={bg} px={4} position="sticky" top={0} zIndex="sticky">
      <Flex h={16} alignItems="center" gap={2}>
        <Link to='/'>
          <Heading size="md">
            <Box as="span" color="red.600">Ping</Box>
            <Box as="span" color="blue.600">Pong</Box>
            <Box as="span" color="black">Lomas</Box>
          </Heading>
        </Link>
        <Spacer />
        <Flex display={{ base: 'none', md: 'flex' }} gap={2}>
          <Menu />
        </Flex>




        <CartWidget></CartWidget>
      </Flex>
    </Box>
  );
};

export default Navbar;