import Section from '../../components/Section/Section';
import { Heading } from '../../components/Heading/Heading';
import { TagList } from '../../components/TagList';
import Prose from '../../components/Prose/Prose';

type Skill = { label: string; icon?: string };

const skills: Skill[] = [
  { label: 'TypeScript', icon: 'typescript-plain' },
  { label: 'React', icon: 'react-plain' },
  { label: 'HTML/CSS', icon: 'html5-plain' },
  { label: 'Tailwind', icon: 'tailwindcss-original' },
  { label: 'Storybook', icon: 'storybook-plain' },
  { label: 'PostgreSQL', icon: 'postgresql-plain' },
  {
    label: 'AWS (Lambda, SNS/SQS, S3)',
    icon: 'amazonwebservices-plain-wordmark',
  },
  { label: 'GraphQL', icon: 'graphql-plain' },
  { label: 'Web Components' },
];

const learning: Skill[] = [
  { label: 'Convex' },
  { label: 'TanStack Start/Query/Router/Forms' },
  { label: 'Go', icon: 'go-plain' },
  { label: 'Gleam', icon: 'gleam-plain' },
];

const softSkills: Skill[] = [
  { label: 'Product engineering (Shape Up methodologies)' },
  { label: 'Design systems & design engineering' },
  { label: 'Web standards (a11y, best practices, performance, browser APIs)' },
  { label: 'Testing methodologies (unit, integration, E2E, VRT)' },
  { label: 'On-call duties & incident management' },
  { label: 'Remote work' },
];

function Skills() {
  return (
    <Section title="Skills">
      <header>
        <Heading level={3}>Technologies</Heading>
        <Prose size="small">
          Languages, frameworks, and tools I extensive or recent experience with
        </Prose>
      </header>
      <TagList items={skills} />

      <header>
        <Heading level={3}>Specialties</Heading>
        <Prose size="small">
          I have extensive domain knowledge and experience in these areas
        </Prose>
      </header>
      <TagList items={softSkills} />
      <header>
        <Heading level={3}>Learning</Heading>
        <Prose size="small">
          Technologies & concepts I&apos;m learning in my spare time
        </Prose>
      </header>
      <TagList items={learning} />
    </Section>
  );
}

export default Skills;
