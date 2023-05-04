import {
  Heading,
  Title,
  Logo,
  Wrapper,
  SubTitle,
  TitleWrapper,
} from './Header.styles';
import pizzaLogo from '../../assets/pizza-img.png';

export default function Header() {
  return (
    <Heading>
      <Wrapper>
        <Logo src={pizzaLogo} alt="ReactPizza logo" />
        <TitleWrapper>
          <Title>REACT PIZZA</Title>
          <SubTitle>самая вкусная пицца во вселенной</SubTitle>
        </TitleWrapper>
      </Wrapper>
      <button type="button">590p | 3</button>
    </Heading>
  );
}
