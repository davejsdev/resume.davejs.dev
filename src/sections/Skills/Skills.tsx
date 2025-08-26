import Section from '../../components/Section/Section';
import { Heading } from '../../components/Heading/Heading';
import { TagList } from '../../components/TagList';
import Prose from '../../components/Prose/Prose';

type Skill = { label: string; icon?: string };

const skills: Skill[] = [
  { label: 'TypeScript', icon: 'typescript-plain' },
  { label: 'React', icon: 'react-plain' },
  { label: 'HTML/CSS' },
  { label: 'Tailwind', icon: 'tailwindcss-original' },
  { label: 'Storybook', icon: 'storybook-plain' },
  { label: 'GraphQL', icon: 'graphql-plain' },
  { label: 'Web Components (Stencil.js)' },
  {
    label: 'AWS (Lambda, SNS/SQS, S3)',
    icon: 'amazonwebservices-plain-wordmark',
  },
  { label: 'Terraform', icon: 'terraform-plain' },
  { label: 'PostgreSQL', icon: 'postgresql-plain' },
];

const learning: Skill[] = [
  { label: 'Convex' },
  { label: 'TanStack Start/Query/Router/Forms' },
  { label: 'Go', icon: 'go-plain' },
  { label: 'Gleam', icon: 'gleam-plain' },
];

const softSkills: Skill[] = [
  { label: '🚀 Product engineering' },
  { label: '🎨 Design systems' },
  { label: '🌐 Web standards & browser APIs' },
  { label: '🌟 Web accessibility & best practices' },
  { label: '🧪 Testing methodologies (unit, integration, E2E, VRT)' },
  { label: '🚨 On-call & incident management' },
  { label: '👨‍💻 Remote work' },
];

function Skills() {
  return (
    <Section title="Skills">
      <header>
        <Heading level={3}>Technologies</Heading>
        <Prose size="small">
          I have extensive or recent experience with these technologies
        </Prose>
      </header>
      <TagList items={skills} limit={20} />

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
