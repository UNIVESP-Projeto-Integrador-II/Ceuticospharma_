import React, { useState } from 'react';
import {
  Button,
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Flex,
} from "@chakra-ui/react";
import NavBar from '../../components/HomePage/NavBar'
import axios from 'axios';

export default function CreateProduct() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/products", formData);

      console.log("Produto criado com sucesso:", response.data);

      setFormData({
        name: '',
        price: '',
      });
    } catch (error) {
      console.error("Erro ao criar o produto:", error);
    }
  };

  return (
    <Box>
      <NavBar/>
      <Flex justify="center" align="center" h="100vh">
        <form onSubmit={handleSubmit} method="POST">
          <VStack spacing="8">
            <FormControl>
              <FormLabel htmlFor="name">Nome do Produto</FormLabel>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="price">Preço do Produto</FormLabel>
              <Input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                required
              />
            </FormControl>

            <Button type="submit" colorScheme="green">
              Criar Produto
            </Button>
          </VStack>
        </form>
      </Flex>
    </Box>
  );
}
