import React from 'react';
import Header from './components/Header/Header';
import GlobalStyle from './theme/globalStyles';
import CardsList from './components/CardsList/CardsList';
import Title from './components/Title/Title';

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
