import React from 'react';
import { Reset } from 'styled-reset';

// Importação do Provider para o theme.js
import { ThemeProvider } from 'styled-components';

// Importação do Tema default (necessita do Provider)
import theme from './theme'
import Home from './pages/Home';



function App() {
	
  return (
		<ThemeProvider theme={theme}>
			<Reset />
			<Home />
		</ThemeProvider>
	);
}

export default App;
