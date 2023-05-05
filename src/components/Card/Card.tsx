import CardWrapper from './Card.styles';
import { IProduct } from '../../models';

interface CardProps {
  product: IProduct;
}

function Card({ product }: CardProps) {
  return <CardWrapper>{product.name}</CardWrapper>;
}

export default Card;
