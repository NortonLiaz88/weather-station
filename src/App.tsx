import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';

import { BrowserRouter } from 'react-router-dom';

import { muiTheme } from './styles/mui-theme';
import theme from './styles/theme';
import RoutesSystem from './routes';
import GlobalStyle from './styles/global';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MuiThemeProvider theme={muiTheme}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <RoutesSystem />
          </BrowserRouter>
        </MuiThemeProvider>
      </MuiThemeProvider>
      <GlobalStyle />
    </QueryClientProvider>

  )
}

export default App
