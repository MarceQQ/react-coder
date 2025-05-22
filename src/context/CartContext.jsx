import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (productoActualizado, cantidad) => {
    const existeEnCarrito = carrito.find(prod => prod.id === productoActualizado.id);

    if (existeEnCarrito) {
      const stockDisponible = productoActualizado.stock;
      const nuevaCantidad = existeEnCarrito.cantidad + cantidad;

      if (nuevaCantidad > stockDisponible) {
        alert(`Solo quedan ${stockDisponible} unidades disponibles`);
        return;
      }

      setCarrito(carrito.map(prod =>
        prod.id === productoActualizado.id
          ? { ...prod, cantidad: nuevaCantidad }
          : prod
      ));
    } else {
      setCarrito([...carrito, { ...productoActualizado, cantidad }]);
    }
  };

  const reducirCantidad = (productoId) => {
    setCarrito(carrito.map(producto => {
      if (producto.id === productoId) {
        const nuevaCantidad = producto.cantidad - 1;

        if (nuevaCantidad === 0) {
          return null; // Filtramos después
        }

        return { ...producto, cantidad: nuevaCantidad };
      }
      return producto;
    }).filter(Boolean)); // Eliminamos nulls
  };

  const eliminarProducto = (productoId) => {
    setCarrito(carrito.filter(producto => producto.id !== productoId));
  };

  const limpiarCarrito = () => {
    setCarrito([]);
  };

  const estaEnCarrito = (productoId) => {
    return carrito.some(producto => producto.id === productoId);
  };

  const obtenerTotalProductos = () => {
    return carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  };

  const obtenerPrecioTotal = () => {
    return carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
  };

  const valor = {
    carrito,
    agregarProducto,
    eliminarProducto,
    limpiarCarrito,
    estaEnCarrito,
    obtenerTotalProductos,
    obtenerPrecioTotal,
    reducirCantidad
  };

  return (
    <CartContext.Provider value={valor}>
      {children}
    </CartContext.Provider>
  );
};