import ItemCount from './ItemCount'
import { useCart } from '../context/CartContext';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
    Flex,
    Image,
    Text,
    Heading,
    Badge,
    Button,
    Card,
    CardHeader,
    CardBody,
} from '@chakra-ui/react'

const ItemDetail = ({ item }) => {
    if (!item) return null
    const { agregarProducto } = useCart();
    const [added, setAdded] = useState(false);

    const handleAdd = (cantidad) => {
        agregarProducto(item, cantidad);
        setAdded(true);
    };


    return (
        <Flex
            justify="center"
            align="center"
            minH="60vh"
            w="100%"
        >
            <Card
                maxW="sm"
                w="sm"
                overflow="hidden"
                boxShadow="md"
            >
                <Image
                    src={item.imagen || "https://via.placeholder.com/300x200"}
                    alt={item.titulo}
                    objectFit="cover"
                    height="200px"
                />

                <CardHeader>
                    <Heading size="md">{item.titulo}</Heading>
                    <Badge
                        colorScheme={
                            item.stock > 5
                                ? "green"
                                : item.stock > 0
                                    ? "orange"
                                    : "red"
                        }
                        mt="2"
                    >
                        {item.stock > 0 ? `Stock: ${item.stock}` : "Sin stock"}
                    </Badge>
                </CardHeader>

                <CardBody>
                    <Text fontSize="2xl" fontWeight="bold">
                        ${item.precio}
                    </Text>

                    {!added ? (
                        <ItemCount
                            stock={item.stock}
                            initial={1}
                            onAdd={handleAdd}
                        />
                    ) : (
                        <Button
                            as={Link}
                            to="/carrito"
                            colorScheme="teal"
                            mt={4}
                            w="full"
                        >
                            Ir al carrito
                        </Button>
                    )}
                </CardBody>

            </Card>
        </Flex>
    )
}

export default ItemDetail
