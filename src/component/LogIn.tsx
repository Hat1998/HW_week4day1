import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Box, Button, FormControl, Input, Heading , FormLabel } from "@chakra-ui/react";
function LogIn() {
  const [firestName, setFirestName] = React.useState("");
  const [isLoggedin, setIsLoggedIn] = React.useState(true);

  const [pass, setPass] = React.useState<any>();
  const navigate = useNavigate();

  const getInfo = () => {
    if (firestName.length >= 3 && pass.length >= 3) {
      localStorage.setItem("firestName", firestName);
      navigate("/saudiday");
    } else {
      alert("Please enter correct information");
    }
  };

  const logout = ()=> {
    
    localStorage.removeItem("firestName");
    setIsLoggedIn(false)
  }
  return (
    <FormControl display={'flex'} gap={10} className="logIn-form">
        {isLoggedin? 
        <fieldset className="logIn-fieldset">
      
        <FormLabel>your are logged in</FormLabel>
  
        <Button onClick={logout} ><Link to='/logout'>Logout</Link></Button>
  
        </fieldset  >


        :

        
        <fieldset className="logIn-fieldset">

        <FormLabel textAlign={'center'} >تسجيل دخول</FormLabel>
        <Input
          placeholder="First Name"
          onChange={(e) => {
            setFirestName(e.target.value);
          }}
        ></Input>
        <Input
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        ></Input>
        <Button type="submit" onClick={getInfo}>
          أهلًا وسهلًا
        </Button>
      </fieldset>

       
      
      }
      
    </FormControl>
  );
}

export default LogIn;
