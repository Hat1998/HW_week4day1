import React from "react";
import { Route, Routes, Link, Outlet } from "react-router-dom";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
  
export default function Nav(){
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <Box>
         <React.Fragment >
      <chakra.header
        bg=" #48BB78"
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
             </chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              My Cv
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
               <Button variant="ghost"> <Link to = '/saudiday'>Home</Link></Button>
               <Button variant="ghost"> <Link to = '/login'>Login</Link></Button>
 

          

              
            </HStack>
            
          </HStack>
        </Flex>
      </chakra.header>
     </React.Fragment>
    </Box>
   
  );
};
