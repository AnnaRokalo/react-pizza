import styled from 'styled-components';

interface TitleProps {
  weight: 200 | 300 | 400 | 500 | 600 | 700;
}
export const STitle = styled.h2<TitleProps>`
  font-weight: ${({ weight = 600 }) => weight};
  font-size: ${({ fontSize }) => fontSize}px;
  padding: 0 60px;
`;
