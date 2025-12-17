import { ReactNode } from 'react';
import { ThemeProvider } from '@eclat/evaire-ui';

const AppProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default AppProvider;
