import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/productService';
import { Spinner, Text, Container } from '@chakra-ui/react';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            setLoading(true);
            setError(null);

            try {
                const producto = await getProductById(id);
                setItem(producto);
            } catch (error) {
                console.error("Error al cargar el producto:", error);
                setError("No se pudo cargar el producto.");
            } finally {
                setLoading(false);
            }
        };

        fetchItem();
    }, [id]);

    return (
        <Container centerContent maxW="container.md" mt={10}>
            {loading && <Spinner size="xl" />}
            {error && <Text color="red.500">{error}</Text>}
            {!loading && !error && item && <ItemDetail item={item} />}
        </Container>
    );
};

export default ItemDetailContainer;
