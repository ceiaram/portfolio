// Core packages
import Image from "next/image";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges.block";
import CopyBlock from "../../blocks/about.copy.block";

// Section scss
import about from "../../../styles/sections/index/about.module.scss";

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 *
 * @returns {jsx} <Technical />
 */
export default function Technical() {
  return (
    <Section classProp={`${about.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Technical"
          preTitle="Hardskills"
          subTitle="As an aspiring software developer, I work on a variety of projects using a diverse set of tools and languages."
        />
        <section className={`${about.content} ${about.container}`}>
          <div className={about.copy}>
            <CopyBlock
              title="Multi-skilled foundation"
              icon={["fat", "chart-network"]}
              copy="With a diverse range of computer science disciplines, I bring a multifaceted skill set to every project and I am constantly learning and evolving to stay up-to-date with the latest industry trends, ensuring my approach remains versatile and adaptive."
              iconClass={about.icon}
              containerClass={about.container}
            />
            <BadgesBlock
              title="Software I love to work with"
              copy="With experience across various projects spanning diverse disciplines, I am deeply adaptable in navigating a multitude of software products within the world of computer science. This is just some of the software I have used over that time."
              list={software}
              block="software"
              fullContainer="fullContainer"
              icon="grid-2-plus"
              containerClass={about.container}
              headerIcon={about.icon}
            />
            <BadgesBlock
              title="Technologies I love to build with"
              copy="I deeply enjoy solving problems through code. From configuring APIs in the back-end to crafting front-end web development, extending to mobile applications and diving into the realms of machine learning, among other areas. I am confident in my ability to tackle and excel in any project I undertake."
              list={tech}
              block="tech"
              fullContainer="fullContainer"
              icon="laptop-code"
              containerClass={about.container}
              headerIcon={about.icon}
            />
          </div>
          <div className={`${about.image} ${about.technicalSvg}`}>
            <Image
              src="/img/dataism-24.svg"
              width={477}
              height={1111}
              alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b"
            />
          </div>
        </section>
      </Container>
      {/* <SectionGridBg gridSize={4}/> */}
    </Section>
  );
}

const software = [
  { key: "figma", name: "Figma", type: "devicon" },
  { key: "flutter", name: "Flutter", type: "devicon" },
  { key: "vscode", name: "VSCode", type: "devicon" },
  { key: "visualstudio", name: "Visual Studio", type: "devicon" },
  { key: "java", name: "Eclipse", type: "devicon" },
  { key: "mailbox", name: "Postman", type: "fas" },
  { key: "cube", name: "VirtualBox", type: "fas" },
  { key: "ubuntu", name: "Ubuntu", type: "devicon" },
  { key: "github", name: "GitHub", type: "devicon" },
  // { key: "unity", name: "Unity", type: "devicon" },
  // { key: "blender", name: "Blender", type: "devicon" },
];

const tech = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "typescript", name: "TypeScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "python", name: "Python", type: "devicon" },
  { key: "flask", name: "Flask", type: "devicon" },
  { key: "pytorch", name: "PyTorch", type: "devicon" },
  { key: "dart", name: "Dart", type: "devicon" },
  { key: "cplusplus", name: "C++", type: "devicon" },
  { key: "csharp", name: "C#", type: "devicon" },
  { key: "java", name: "Java", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "tailwindcss", name: "Tailwind CSS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
  { key: "firebase", name: "Firebase", type: "devicon" },
  { key: "nextjs", name: "Vercel", type: "devicon" },
  { key: "amazonwebservices", name: "AWS", type: "devicon" },
];
