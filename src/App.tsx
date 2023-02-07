
import './App.css'
import Routes from './component/Routes'
import LogIn from './component/LogIn'
import {Box} from '@chakra-ui/react'
import Nav from './component/Nav'
import Footer from './component/Footer'

function App() {


  return (
    <Box >
      <Nav/>
     <Routes/>
     <Footer/>

{/* <LogIn/> */}
    </Box>
  )
}

export default App
