import { TodoContextProvider } from '../TodoContext';
import AppUI from './AppUI';

function App() {
  return (
    <TodoContextProvider>
      <AppUI/>;
    </TodoContextProvider>
  );
}

export default App;
