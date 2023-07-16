import { Container, Yatzy } from './header.styles';

const Header = () => {
  return (
    <Container>
      <div>NEW GAME</div>
      <Yatzy>YATZY</Yatzy>
      <div>HIGH SCORE</div>
    </Container>
  );
};

export default Header;
