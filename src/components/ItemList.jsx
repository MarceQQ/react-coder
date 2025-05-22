import { SimpleGrid } from "@chakra-ui/react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </SimpleGrid>
  );
};

export default ItemList;