import React from 'react';
import Button from '../Button';
import { StyledHeader, Container } from './styles';

const Header = React.forwardRef((props: {}, ref: React.Ref<HTMLHeadingElement>) => {
  return (
    <StyledHeader ref={ref}>
      <Container>
        <h1>Kate’s Music Intros Connections Quiz</h1>
        <Button
          onClick={() =>
            alert(
              "Songs appear in their original order (except the ones I've replaced) but can be listened to in any order. Most of them are the first 10-30 seconds of the intro, but if the title is mentioned somewhere in there, or if I think there's a better bit of the song, I've put that in instead. Connections could be between the songs, or the artists, or both (usually both). Most are wordy, some are a bit more interesting. With every new song you play, the number of available bonus points will go down. So, as soon as you know what the connection is, summarise it in the connection box (don't overthink this) and submit. You will only get one guess!\nFor songs and artists, just type your answers in the corresponding boxes, before selecting Mark Answers. Don't worry about numbers, I should have accounted for different formats of numbers. I never thought I'd say this, but punctuation is not important. Spelling is, although the marking is not case-sensitive.\nI do not own any of these songs, but they are all good, except one."
            )
          }
          variant="interrobang"
        >
          ‽
        </Button>
        <p>
          In each round there are ten points available for the artists, ten points for the songs, and up to ten bonus
          points for the connection, depending on how soon you get it.
        </p>
        <p>
          Each connection also applies to the first song of the next round, which can be thought of as a reject from the
          previous round.
        </p>
        <p>Play any song to start!</p>
      </Container>
    </StyledHeader>
  );
});

export default Header;
