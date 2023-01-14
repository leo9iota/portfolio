import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <div>
    <Section nopadding id='projects'>
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map(({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image}/>
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div draggable='false'>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit}>Code</ExternalLinks>
              <ExternalLinks href={source}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  </div>
);

export default Projects;
