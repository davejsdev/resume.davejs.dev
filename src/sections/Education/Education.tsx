import Card from '../../components/Card/Card';
import Section from '../../components/Section/Section';
import unbLogo from '../../assets/unb-logo.svg';
import Prose from '../../components/Prose/Prose';

const content = {
  title: 'Bachelor of Science in Software Engineering',
  date: new Date(2018, 4),
  institution: {
    name: 'University of New Brunswick',
    logo: {
      src: unbLogo,
    },
    website: {
      href: 'https://unb.ca',
      label: 'unb.ca',
    },
  },
};

const Education = () => {
  return (
    <Section title="Education">
      <Card
        title={content.title}
        subtitle={content.institution.name}
        date={content.date}
        logo={content.institution.logo}
        website={content.institution.website}
      >
        <Prose size="small">
          <p>
            UNB&apos;s software engineering degree is a joint program between
            the faculties of engineering and computer science. The course work
            spanned a broad range of topics including low-level concepts like
            hardware programming, computer architecture, and digital/analog
            networking; as well as high level concepts like software
            architecture, system design, and project management.
          </p>
          <p>
            Languages most studied in this program included Java
            (object-oriented programming, design patterns, algorithms),
            Racket/LISP (functional programming), C & Assembly (machine-level,
            hardware programming), SQL (databases), and VHDL (hardware
            programming).
          </p>
          <p>
            As part of my degree, I completed three work terms with Mariner
            Innovations, UNB&apos;s faculty of education, and Cvent. I also
            worked part-time as a facilitator for CS Square, a weekly series of
            technical talks from industry professionals and students (including
            myself) about emerging technologies.
          </p>
        </Prose>
      </Card>
    </Section>
  );
};

export default Education;
