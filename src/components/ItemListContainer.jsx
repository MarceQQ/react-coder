import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { Container, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import getProducts from "../services/productService";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { nivel } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const productos = await getProducts();

        if (nivel) {
          const productosFiltrados = productos.filter(producto =>
            producto.nivel?.toLowerCase() === nivel.toLowerCase()
          );
          setItems(productosFiltrados);
        } else {
          setItems(productos);
        }
      } catch (error) {
        console.error("Error al cargar productos desde Firestore:", error);
        setError("No se pudieron cargar los productos.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [nivel]);

  return (
    <Container maxW="container.xl" centerContent px={0} w="100%">
      {loading && <Spinner size="xl" mt={8} />}
      {error && <Text color="red.500" mt={4}>{error}</Text>}
      {!loading && !error && <ItemList items={items} />}
    </Container>
  );
};

export default ItemListContainer;
