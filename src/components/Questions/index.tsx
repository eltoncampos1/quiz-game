import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { getQuestions } from '../../services/getQuestions';
import { useQuestions } from '../../context/questions';
import { useFetchQuestionsByQuantity } from '../hooks/useFetchQuestionsByQuantity';
import { Question } from './Question';

interface QuestionProps {
    category: string;
    question: string;
    difficulty: string;
    incorrect_answers: Array<any>;
    type?: string;
}

export const Questions = () => {
  const { formValues } = useQuestions();
  const [quantity, setQuantity] = useState(Number(formValues.numberofQuestions));
  const [questions, setQuestions] = useState<Array<QuestionProps>>([] as QuestionProps);
  const [loading, setLoading] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const NextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  console.log(questions);

  const fetchQuestions = async () => {
    const data = await getQuestions(quantity);
    setQuestions(data.results);
    return data;
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        flexDirection: 'column',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Question questions={questions} />
    </Box>
  );
};
