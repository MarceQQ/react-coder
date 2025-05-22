import { Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate();


    const categorias = [
        { label: "Profesional", value: "profesional" },
        { label: "Semi Profesional", value: "semi-profesional" },
        { label: "Amateur", value: "amateur" }
    ];

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue) {
            navigate(`/nivel/${selectedValue}`);
        } else {
            navigate("/");
        }
    };

    return (
        <Select
            placeholder="Todas las Categorias"
            size="sm"
            width="320px"
            border="1px solid"
            _hover={{ borderColor: "teal.500", bg: "gray.50", cursor: "pointer" }}
            onChange={handleChange}
        >
            {categorias.map((categoria) => (
                <option
                    key={categoria.value}
                    value={categoria.value}
                >
                    {categoria.label}
                </option>
            ))}
        </Select>
    );
};

export default Menu;