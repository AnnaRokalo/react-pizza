import { CardWrapper } from './styles';
import { Product } from '../../models';

interface CardProps {
  product: Product;
}

function Card({ product }: CardProps) {
  return <CardWrapper>{product.name}</CardWrapper>;
}

export default Card;
