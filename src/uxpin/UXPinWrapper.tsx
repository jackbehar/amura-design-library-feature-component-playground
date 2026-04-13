import type { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import CreateCustomTheme from '../theme';

const theme = CreateCustomTheme({});

export default function UXPinWrapper({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
