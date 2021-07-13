import React from 'react';
import { Provider } from 'react-redux';
import { Reset } from 'styled-reset';

// Importação do Provider para o theme.js
import { ThemeProvider } from 'styled-components';

// Importação da Store do Redux
import store from './redux/store' 

// Importação do Tema default (necessita do Provider)
import theme from './theme'
import Home from './pages/Home';



function App() {
	
  return (
<Provider store={store} >
			<ThemeProvider theme={theme}>
				<Reset />
				<Home />
			</ThemeProvider>
		</Provider>
	);
}

export default App;
