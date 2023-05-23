import Card from 'components/Card/Card';
import { products } from 'data/products';

import { Wrapper } from './styles';

export default function CardsList() {
  return (
    <Wrapper>
      {products.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </Wrapper>
  );
}
