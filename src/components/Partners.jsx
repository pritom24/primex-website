import React from "react";
import styled from "styled-components";
import BallCanvas from "./canvas/Ball";
import { StarWrapper } from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { technologies } from "../constants";
const Section = styled.div`
  max-height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 200;
  flex-direction: row;
`;

const Partner = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10;
`;
// const Ball = styled.div`
//   width: 150px;
//   height: 150px;
// `;
const Partners = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={`${styles.sectionSubText} `}>Our Proud</p>
    <h1 className={`${styles.sectionHeadText}`}>Partners.</h1>
  </motion.div>

  <div className="w-full flex">
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      Following projects showcases my skills and experience through
      real-world examples of my work. Each project is briefly described with
      links to code repositories and live demos in it. It reflects my
      ability to solve complex problems, work with different technologies,
      and manage projects effectively.
    </motion.p>
  </div>
    <Section>
      {/* <Title>Our partner</Title> */}
     
      <Partner className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28 " key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </Partner>
    </Section>
    </>
  );
};

export default StarWrapper(Partners, "");
