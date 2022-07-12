import { ChakraProvider } from '@chakra-ui/react';
import { DrawerExample } from './Example';

function App() {
  return (
    <ChakraProvider>
      <DrawerExample />
    </ChakraProvider>
  );
}

export default App;
