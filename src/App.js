import React from 'react';

// Importação do Provider para o theme.js
import { ThemeProvider } from 'styled-components';

// Importação do Tema default (necessita do Provider)
import theme from './theme'
import Home from './pages/Home';



function App() {
	
  return (
		<ThemeProvider theme={theme}>
			<Home />
		</ThemeProvider>
	);
}

export default App;
