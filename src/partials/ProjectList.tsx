import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Project SIPBL"
        description="This website is designed to support the Project Based Learning (PBL) method which focuses on learning through practical projects."
        link="/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.LIME}>Web design</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="Project Game 'MATH VENTURE' "
        description="Math Venture is a math educational game designed to help students learn math in an interactive and fun way. One of the features this game has is that it uses 3 levels."
        link="/"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
