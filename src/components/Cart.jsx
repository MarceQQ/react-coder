import React from 'react';
import { useCart } from '../context/CartContext';
import Contact from './Contact';
import productos from '../data/productos';
import {
    Box,
    Heading,
    Text,
    VStack,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button,
    Divider,
    Flex
} from '@chakra-ui/react';

const Cart = () => {
    const {
        carrito,
        eliminarProducto,
        limpiarCarrito,
        obtenerPrecioTotal,
        reducirCantidad,
        agregarProducto
    } = useCart();

    return (
        <Box p={8} maxW="1200px" mx="auto">
            <Heading mb={6} textAlign="center">Carrito de Compras</Heading>

            {carrito.length === 0 ? (
                <Text fontSize="xl" textAlign="center" mt={8}>
                    🛒 Tu carrito está vacío. ¡Agrega productos para continuar!
                </Text>
            ) : (
                <>
                    <Table variant="striped" mb={8}>
                        <Thead>
                            <Tr>
                                <Th>Producto</Th>
                                <Th>Precio Unitario</Th>
                                <Th>Cantidad</Th>
                                <Th>Subtotal</Th>
                                <Th>Acciones</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {carrito.map((productoCarrito) => {
                                const productoActual = productos.find(p => p.id === productoCarrito.id);

                                return (
                                    <Tr key={productoCarrito.id}>
                                        <Td>{productoCarrito.titulo}</Td>
                                        <Td>${productoCarrito.precio}</Td>
                                        <Td>
                                            <Flex align="center" gap={2}>
                                                <Button
                                                    size="s"
                                                    onClick={() => reducirCantidad(productoCarrito.id)}
                                                    isDisabled={productoCarrito.cantidad === 1}
                                                >
                                                    -
                                                </Button>
                                                <Text>{productoCarrito.cantidad}</Text>
                                                <Button
                                                    size="s"
                                                    onClick={() => agregarProducto(productoCarrito, 1)}
                                                    isDisabled={productoCarrito.cantidad >= productoCarrito.stock}
                                                >
                                                    +
                                                </Button>
                                            </Flex>
                                        </Td>
                                        <Td>${(productoCarrito.precio * productoCarrito.cantidad).toFixed(2)}</Td>
                                        <Td>
                                            <Button
                                                colorScheme="red"
                                                size="sm"
                                                onClick={() => eliminarProducto(productoCarrito.id)}
                                            >
                                                Eliminar
                                            </Button>
                                        </Td>
                                    </Tr>
                                );
                            })}
                        </Tbody>
                    </Table>

                    <Divider mb={6} />

                    <VStack spacing={4} align="end">
                        <Heading size="lg">
                            Total: ${obtenerPrecioTotal().toFixed(2)}
                        </Heading>

                        <Button
                            colorScheme="red"
                            onClick={limpiarCarrito}
                            size="lg"
                        >
                            Vaciar Carrito
                        </Button>

                        <Contact onPurchase={limpiarCarrito} />
                    </VStack>
                </>
            )}
        </Box>
    );
};

export default Cart;