import { Box, Container, Heading, Text } from '@chakra-ui/react';

const HeroSection = () => {
    return (
        <Box
            bgGradient="linear(to-r, blue.700, red.600)"
            py={16}
            px={4}
            mb={2}
        >
            <Container maxW="container.lg" centerContent textAlign="center">
                <Heading
                    as="h1"
                    size="2xl"
                    fontWeight="bold"
                    color="white"
                    mb={4}
                >
                    Tienda Ping Pong Lomas
                </Heading>
                <Text
                    fontSize="xl"
                    color="white"
                    mb={8}
                    maxW="2xl"
                >
                    Equipamiento profesional de tenis de mesa para jugadores de todos los niveles
                </Text>
            </Container>
        </Box>
    );
};

export default HeroSection;