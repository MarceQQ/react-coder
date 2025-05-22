import React from 'react'
import { Flex, Image } from '@chakra-ui/react'
import Imagen from '../assets/NotFound.png'

const NotFound = () => {
    return (
        <Flex
            direction="column"
            align="center"
            justify="center"
            minH="50vh"
            textAlign="center"
            p={4}
        >
            <Image
                src={Imagen}
                alt="Página no encontrada"
                maxW="600px"
                mb={4}
            />
        </Flex>
    )
}

export default NotFound