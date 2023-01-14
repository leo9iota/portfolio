import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Portfolio Website
      </SectionTitle>
      <SectionText>
        Hello there, my name is Léon Kiefer and I am a aspiring software engineer.
        I use Arch btw.
      </SectionText>
      <Button onClick={() => window.location = "https://www.linkedin.com/in/l%C3%A9on-kiefer-125939260/"}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;