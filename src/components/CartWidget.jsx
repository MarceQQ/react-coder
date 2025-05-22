import { useCart } from '../context/CartContext';
import { IconButton, Box } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { RiShoppingCartFill } from 'react-icons/ri';

const CartWidget = () => {
    const { obtenerTotalProductos } = useCart();
    const total = obtenerTotalProductos();

    return (
        <Link to='/carrito'>
            <Box position="relative" display="inline-block">
                <IconButton aria-label="Carrito" icon={<RiShoppingCartFill />} />
                {total > 0 && (
                    <Box
                        position="absolute"
                        top="-1"
                        right="-1"
                        background="red.500"
                        color="white"
                        borderRadius="full"
                        width="5"
                        height="5"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize="xs"
                    >
                        {total}
                    </Box>
                )}
            </Box>
        </Link>
    );
};

export default CartWidget;