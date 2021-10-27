import { QuestionsProvider } from './context/questions';
import { QuestionsLayout } from './screens/QuestionsLayout';

function App() {
  return (
    <QuestionsProvider>
      <QuestionsLayout />
    </QuestionsProvider>
  );
}

export default App;
