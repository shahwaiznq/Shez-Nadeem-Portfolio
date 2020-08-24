import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hello World!</h1>
          <h4>I’m Shez, a software engineer with a love of technology!</h4>
          <Button as={AnchorLink} href="#contact">
            Contact me!
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m Shez, a software engineer with a love of technology!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
