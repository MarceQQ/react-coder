import { useForm } from "react-hook-form";
import { createOrder } from "../services/orderService";
import { useCart } from "../context/CartContext";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useToast,
} from "@chakra-ui/react";


const Contact = ({ onPurchase }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const toast = useToast();
  const { carrito, obtenerPrecioTotal } = useCart();

  const onSubmit = async (data) => {
    const { nombre, apellido, email } = data;

    const orderData = {
      cliente: { nombre, apellido, email },
      productos: carrito.map((prod) => ({
        id: prod.id,
        titulo: prod.titulo,
        cantidad: prod.cantidad,
        precio: prod.precio,
      })),
      total: obtenerPrecioTotal(),
      fecha: new Date(),
    };

    try {
      const orderId = await createOrder(orderData);

      if (typeof onPurchase === "function") {
        onPurchase();
      }

      toast({
        title: "Orden generada",
        description: `Gracias por tu compra ${nombre} ${apellido}. Tu número de orden es: ${orderId}`,
        status: "success",
        duration: 6000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al procesar tu orden. Intenta nuevamente.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="400px" mx="auto" mt={8}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4} align="stretch">
          <FormControl isInvalid={errors.nombre}>
            <FormLabel>Nombre</FormLabel>
            <Input
              placeholder="Nombre"
              {...register("nombre", { required: true })}
            />
          </FormControl>

          <FormControl isInvalid={errors.apellido}>
            <FormLabel>Apellido</FormLabel>
            <Input
              placeholder="Apellido"
              {...register("apellido", { required: true })}
            />
          </FormControl>

          <FormControl isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </FormControl>

          <Button type="submit" colorScheme="teal">
            Enviar
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Contact;
