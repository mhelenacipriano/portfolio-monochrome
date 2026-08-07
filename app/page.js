import Nav from '@/components/Nav/Nav';
import Bio from '@/components/Bio/Bio';
import Experience from '@/components/Experience/Experience';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects/Projects';
import Education from '@/components/Education/Education';
import Contact from '@/components/Contact/Contact';

export default function Home() {
  return (
    <div>
      <Nav />
      <Bio />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}
