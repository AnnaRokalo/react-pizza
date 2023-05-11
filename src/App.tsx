import React from 'react';
import Header from '@components/Header/Header';
import CardsList from '@components/CardsList/CardsList';
import Title from '@components/Title/Title';
import GlobalStyle from './theme/globalStyles';

function App() {
  return (
    <div>
      <GlobalStyle />
      <div>
        <Header />
        <Title text="All Pizza" />
        <CardsList />
      </div>
    </div>
  );
}

export default App;
