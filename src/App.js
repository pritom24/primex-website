import styled from "styled-components";
import "./App.css";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Partners from "./components/Partners";
import Projects from "./components/Projects";
import Service from "./components/Service";
import Team from "./components/Team";

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
      
      <Container className="relative z-0">
        <Hero />
        <Who />

        <Works />
      <Service />
        {/* <Products /> */}
        <Partners />
        <Projects />
        <Team/>
        <Contact />
      </Container>
    </>
  );
}

export default App;
