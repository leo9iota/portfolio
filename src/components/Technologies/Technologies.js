import React from 'react';
import { SiReact, SiNextdotjs, SiJava } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of Technologies in the past.
      From back-end to design.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle><SiReact size='3rem' /> Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle><SiNextdotjs size='3rem' /> Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle><SiJava size='3rem' /> OOP</ListTitle>
          <ListParagraph>
            Experience with <br />
            Java
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
