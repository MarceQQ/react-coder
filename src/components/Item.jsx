import { useCart } from "../context/CartContext";
import { Link } from 'react-router-dom'
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
} from "@chakra-ui/react";

const Item = ({ item }) => {
  const { agregarProducto } = useCart();

  const agregarAlCarrito = (cantidad) => {
    agregarProducto(item, cantidad);
  };

  return (
    <Card maxW="sm" overflow="hidden" boxShadow="md">
      <Image
        src={item.imagen || "https://via.placeholder.com/300x200"}
        alt={item.titulo}
        objectFit="cover"
        height="200px"
      />

      <CardHeader>
        <Heading size="md">{item.titulo}</Heading>
        <Badge colorScheme={item.stock > 5 ? "green" : item.stock > 0 ? "orange" : "red"} mt="2">
          {item.stock > 0 ? `Stock: ${item.stock}` : "Sin stock"}
        </Badge>
      </CardHeader>

      <CardBody>
        <Text fontSize="l" color="gray.600" mb="3">
          {item.descripcion}
        </Text>
        <Text fontSize="m" fontWeight="bold" color="blue.500" mb="3">
          {item.nivel}
        </Text>
        <Flex align="center" justify="space-between" mt={4}>
          <Text fontSize="2xl" fontWeight="bold">
            ${item.precio}
          </Text>
          <Link to={`/producto/${item.id}`}>
            <Button colorScheme="teal" size="sm">
              Ver más
            </Button>
          </Link>
        </Flex>


      </CardBody>
    </Card>
  );
};

export default Item;
