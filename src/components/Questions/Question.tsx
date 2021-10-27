/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import { useState, useCallback } from 'react';

import { getShuffledArr } from '../../utils/shuffleArray';

type IQuestionProps = {
    questions: Array<any>
}

export const Question = ({ questions }:IQuestionProps) => {
  const [isCorrect, setIscorrect] = useState<string[]>([]);
  const [correctsResponses, setCorrectResponses] = useState(0);
  const [incorrectsResponses, setIncorrectsResponses] = useState(0);
  const [isIncorrect, setIsIncorrect] = useState<string[]>([]);
  const [response, setResponse] = useState(false);

  const filterIncorrectsAnswers = (array: Array<string>, correctItem:string) => {
    const incorrectsAnswers = array.filter((item) => {
      if (item !== correctItem) {
        return [...item];
      }
    });
    setIsIncorrect(incorrectsAnswers);
    return incorrectsAnswers;
  };
  console.log('correct', correctsResponses);
  console.log('incorrect', incorrectsResponses);

  const checkCorrectAnswer = (answer:string, correctAnswer:string, answerArr:Array<string>) => {
    filterIncorrectsAnswers(answerArr, correctAnswer);
    const correct = answerArr.filter((response) => response === correctAnswer);
    setIscorrect(correct);

    if (answer === correctAnswer) {
      setCorrectResponses((current) => current + 1);
    } else {
      setIncorrectsResponses((current) => current + 1);
    }
    setResponse(true);
  };

  return (
    <div style={{
      scrollBehavior: 'smooth', width: '100%', height: '100vh', overflowY: 'hidden', scrollSnapType: 'y mandatory',
    }}
    >

      {questions.map((question, idx) => {
        const answers = [...question.incorrect_answers, question.correct_answer];

        const randomAnswers = getShuffledArr(answers);

        return (

          <div
            key={question.question}
            id={`question${idx}`}
            style={{
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              scrollSnapType: 'y mandatory',
              fontSize: '3rem',
              scrollSnapAlign: 'center',
            }}
          >
            {question.category}
            <h1 style={{ fontSize: '2rem' }}>{question.question}</h1>

            {randomAnswers.map((awnser:string, idx, array) => (
              <button
                style={{ background: isCorrect ? 'green' : 'red' }}
                onClick={() => checkCorrectAnswer(awnser, question.correct_answer, array)}
                type="button"
                key={awnser}
              >
                <p>{awnser}</p>

              </button>

            ))}
            {response && (
              <div>
                Respostas erradas:
                {isIncorrect.map((incorrect) => (
                  <p style={{ fontSize: '1rem' }} key={incorrect}>
                    {incorrect}
                  </p>
                ))}
                Respostas certa:
                {' '}
                {isCorrect}
              </div>
            )}

            <a href={`#question${idx + 1}`} onClick={() => setResponse(false)}>click-me</a>
          </div>
        );
      })}
    </div>

  );
};
