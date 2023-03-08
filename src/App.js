import styled from "styled-components";
import "./App.css";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Partners from "./components/Products";


const Container = styled.div`
  height: 100vh;
  background-color: rebeccapurple;
  /* scroll-snap-type: y mandatory; */
  scroll-behavior: smooth;
  overflow-y: auto;
  background: url("./img/bg.jpeg");
  scrollbar-width: none;
  color: white;
  overflow-x: hidden;
`;

function App() {
  return (
    <>
    <Container>
      <Hero />
      <Who />
      <Works />
   
      <Partners/>
     
      <Contact />
      
      
    </Container> 
    
    </>
  );
}

export default App;
