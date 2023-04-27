import { Fragment } from 'react';
import Header from './components/Header/Header';
import GlobalStyle from './theme/globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Header />
        <p>Hello! Main part will be here soon.</p>
      </div>
    </>
  );
}

export default App;
