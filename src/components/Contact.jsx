import { useForm } from "react-hook-form";
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

  const onSubmit = (data) => {
    const { nombre, apellido, email, suscripcion } = data;


    if (typeof onPurchase === "function") {
      onPurchase();
    }


    toast({
      title: "Confirmación de compra",
      description: `Gracias por tu compra ${nombre} ${apellido}. ` +
        `Hemos enviado un resumen a ${email}.` +
        `${suscripcion ? " ¡Bienvenido a nuestro programa de beneficios!" : ""}`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
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

          <FormControl>
            <Checkbox {...register("suscripcion")}>
              Quiero suscribirme
            </Checkbox>
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