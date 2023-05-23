import { STitle } from './styles';

interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  return <STitle>{text}</STitle>;
}
