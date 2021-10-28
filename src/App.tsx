import { QuestionsProvider } from './context/questions';
import { Routes } from './routes/Routes';
import { QuestionsLayout } from './screens/QuestionsLayout';

function App() {
  return (
    <QuestionsProvider>
      <QuestionsLayout />
      {/* <Routes /> */}
    </QuestionsProvider>
  );
}

export default App;
