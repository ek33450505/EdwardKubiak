import React from "react";
import { Container } from "react-bootstrap";

const aboutData = {
  title: "Get to Know Me",
  paragraphs: [
    "I am Edward Kubiak, an accomplished MERN full stack developer with extensive experience in both front-end and back-end development. I specialize in crafting scalable applications and enhancing existing software systems. My primary skill set includes MongoDB, Express.js, React, and Node.js, along with proficiency in additional programming languages and frameworks such as AngularJS, PHP, and Python.",
    "Currently, I am focused on improving application performance and user interaction at META Solutions by transitioning legacy systems to modern architectures. My passion lies in continuously learning and implementing the latest technologies to deliver high-quality solutions.",
    "Based in Columbus, Ohio, I am committed to contributing to innovative projects and collaborating with diverse teams to drive technological advancements. My goal is to leverage my skills to create impactful software that meets the evolving needs of businesses and users alike.",
    "In my personal life, I am a proud father of two wonderful children. I cherish spending quality time with my family, exploring the outdoors, and creating lasting memories together.",
    "Outside of work, I am passionate about endurance running and CrossFit. I have dedicated myself to training for trail ultramarathons. The discipline and endurance required for this sport inspire me in all aspects of my life, pushing me to set and achieve ambitious goals both personally and professionally.",
  ]  
};

const About = () => (
  <Container className="about-container mt-4">
    <h1 className="homename">{aboutData.title}</h1>
    {aboutData.paragraphs.map((paragraph, index) => (
      <p key={index}>
        {index === 1 ? (
          <>
            Currently, I am improving application performance and user
            interaction at{" "}
            <a
              href="https://www.metasolutions.net/ "
              style={{ color: "white", textDecoration: "underline" }}
              target="_blank"
              rel="noopener noreferrer"

            >
              META Solutions
            </a>{" "}
            by transitioning legacy systems to modern architectures. My passion
            lies in continuously learning and implementing the latest
            technologies to deliver high-quality solutions.
          </>
        ) : (
          paragraph
        )}
      </p>
    ))}
  </Container>
);

export default About;
