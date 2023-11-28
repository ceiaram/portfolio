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
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 *
 * @returns {jsx} <About />
 */
export default function About() {
  return (
    <Section classProp={about.section}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="About Me"
          preTitle="Synopsis"
          subTitle="With a diverse skill set that includes full stack web development, data science, machine learning and more; I am a well-rounded developer who is ready to take on challenging projects and contribute meaningfully to the field."
        />
        <section className={about.content}>
          <div className={about.image}>
            <img src="/img/profile-photo.jpg" alt="Nelson family photo" />
            {/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
          </div>
          <div className={about.copy}>
            <CopyBlock
              title="Softskills and hobbies"
              containerClass={about.container}
              iconClass={about.icon}
              icon={["fat", "ear-listen"]}
              copy="In addition to my technical expertise, I also have strong leadership, passion for learning, and multitasking skills—honed through my experience as a freelancer, mentor for women in computer science, team lead for the mobile development team and undergrad research. Outside of computer science, I enjoy staying active by riding my bmx bike and taking care of my high maintenance pug. I also enjoy playing my ps4 for leisure and play a variety of games such as Dying Light 2, Battlefield 2042, Zombie Army 4 and more. I am confident in my ability to bring passion and value to any project that I work on."
            />
            <BadgesBlock
              title="Learning and programming"
              containerClass={about.container}
              list={methods}
              fullContainer="fullContainer"
              block="methods"
              icon="computer-mouse"
              copy="I choose computer science due to the endless material you can learn, build and create, which keeps the subject fun and interesting. My favorite part of creating is learning new skills and programming, which means learning as I go and that is all it takes to create something new. Here are some of the resources I use to continue learning."
              //invertedColor="inveryouedColor"
              headerIcon={`${about.icon}`}
            />
          </div>
        </section>
      </Container>
    </Section>
  );
}

const methods = [
  //file-binary
  { key: "code", name: "LeetCode", type: "fad" },
  { key: "code", name: "NeetCode", type: "fad" },
  { key: "microchip-ai", name: "Kaggle", type: "fad" },
  { key: "brain-circuit", name: "learnpytorch.io", type: "fad" },
  { key: "display", name: "YouTube", type: "far" },
  { key: "laptop-code", name: "freeCodeCamp", type: "fad" },
  { key: "head-side-brain", name: "LinkedIn Learning", type: "fad" },
  { key: "message-question", name: "Stack Overflow", type: "fad" },
];
