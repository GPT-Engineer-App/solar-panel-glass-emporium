import React from "react";
import { Box, Heading, Text, Flex, Image, Stack, Button, Grid, Avatar, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaStar } from "react-icons/fa";

const Index = () => {
  const glassBg = useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(26, 32, 44, 0.8)");
  const glassColor = useColorModeValue("gray.800", "white");

  const products = [
    { name: "Solar Panel X1", price: "$299", image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsfGVufDB8fHx8MTcxMDMzNjUwOXww&ixlib=rb-4.0.3&q=80&w=1080" },
    { name: "Solar Panel X2", price: "$499", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxzb2xhciUyMHBhbmVsfGVufDB8fHx8MTcxMDMzNjUwOXww&ixlib=rb-4.0.3&q=80&w=1080" },
    { name: "Solar Panel X3", price: "$799", image: "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxzb2xhciUyMHBhbmVsfGVufDB8fHx8MTcxMDMzNjUwOXww&ixlib=rb-4.0.3&q=80&w=1080" },
  ];

  const reviews = [
    {
      name: "John Doe",
      text: "Great product! Easy to install and works perfectly.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwYXZhdGFyfGVufDB8fHx8MTcxMDMzNjUxMHww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      name: "Jane Smith",
      text: "I'm very satisfied with my purchase. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBhdmF0YXJ8ZW58MHx8fHwxNzEwMzM2NTEwfDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Flex minHeight="100vh" alignItems="center" justifyContent="center" backgroundImage="https://images.unsplash.com/photo-1508001300512-4763bb1c5583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwZmllbGR8ZW58MHx8fHwxNzEwMzM2NTEwfDA&ixlib=rb-4.0.3&q=80&w=1080" backgroundSize="cover" backgroundPosition="center" position="relative">
        <Box bg={glassBg} color={glassColor} p={8} borderRadius="lg" backdropFilter="blur(10px)" boxShadow="lg" maxWidth="xl" textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Solar Panels for a Brighter Future
          </Heading>
          <Text fontSize="xl" mb={8}>
            Harness the power of the sun with our high-quality solar panels.
          </Text>
          <Button colorScheme="blue" size="lg" leftIcon={<FaSun />}>
            Shop Now
          </Button>
        </Box>
      </Flex>

      {/* Products Section */}
      <Box p={8}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Our Products
        </Heading>
        <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={8}>
          {products.map((product, index) => (
            <Box key={index} bg={glassBg} p={6} borderRadius="lg" boxShadow="md" textAlign="center">
              <Image src={product.image} alt={product.name} borderRadius="lg" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                {product.name}
              </Heading>
              <Text fontSize="xl" fontWeight="bold" mb={4}>
                {product.price}
              </Text>
              <Button colorScheme="blue">Buy Now</Button>
            </Box>
          ))}
        </Grid>
      </Box>

      {/* Reviews Section */}
      <Box bg={glassBg} p={8}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          What Our Customers Say
        </Heading>
        <Stack spacing={8}>
          {reviews.map((review, index) => (
            <Flex key={index} alignItems="center">
              <Avatar src={review.avatar} size="lg" mr={4} />
              <Box>
                <Heading as="h3" size="md" mb={2}>
                  {review.name}
                </Heading>
                <Flex alignItems="center" mb={2}>
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <FaStar key={i} color="gold" />
                    ))}
                </Flex>
                <Text>{review.text}</Text>
              </Box>
            </Flex>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Index;
