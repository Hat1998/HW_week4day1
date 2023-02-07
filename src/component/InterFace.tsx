import React from 'react'
import { FormControl, FormLabel, Button, Box}from '@chakra-ui/react'
import { useNavigate  } from "react-router-dom";

function InterFace() {

    const navigate = useNavigate()


    const LogIn =()=>{
        navigate("/logIn")  
       
    }
  return (
    <FormControl className='main' display={'flex'} gap={10}>

        <FormLabel className='text'>مالحد منة، الله اللي عزنا</FormLabel>
        <Box className='btn'>
        <Button onClick={LogIn}>تسجيل دخول</Button>
        <Button> تسجيل جديد</Button>
        </Box>
      
    </FormControl>
  )
}

export default InterFace