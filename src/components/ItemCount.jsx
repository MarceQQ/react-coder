import React, { useState } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
    const [cantidad, setCantidad] = useState(initial);

    const aumentar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };

    const disminuir = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <Box textAlign="center" p={4}>
            <Button
                onClick={disminuir}
                mr={2}
                isDisabled={cantidad === 1}
            >
                -
            </Button>

            <Text as="span" p={3} fontSize="xl">
                {cantidad}
            </Text>

            <Button
                onClick={aumentar}
                ml={2}
                isDisabled={cantidad === stock}
            >
                +
            </Button>

            <Button
                colorScheme="teal"
                mt={4}
                w="full"
                onClick={() => onAdd(cantidad)}
                isDisabled={stock === 0 || cantidad > stock}
            >
                Agregar al carrito
            </Button>
        </Box>
    );
};

export default ItemCount;