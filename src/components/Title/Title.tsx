import { STitle } from './Title.styles';

interface TitleProps {
  text: string;
}

function Title({ text }: TitleProps) {
  return (
    <STitle weight={600} fontSize={32}>
      {text}
    </STitle>
  );
}

export default Title;
