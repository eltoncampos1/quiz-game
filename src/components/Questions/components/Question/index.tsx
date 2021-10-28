/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import { Link } from "react-router-dom"
import { QuestionContent } from ".."
import { useQuestions } from "../../../../context/questions"
import {
  convertAsciiToString,
  generateRandomNumber,
  getShuffledArr,
} from "../../../../utils"
import { IQuestionProps } from "./types"

export const Question = ({ questions }: IQuestionProps) => {
  const {
    checkCorrectAnswer,
    answered,
    incorrecstAnswers,
    correctAnswers,
    changeIsAnswered,
  } = useQuestions()
  return (
    <div
      style={{
        scrollBehavior: "smooth",
        width: "100%",
        height: "100vh",
        overflowY: answered ? "auto" : "hidden",
        scrollSnapType: "y mandatory",
      }}
    >
      {questions.map((question, idx) => {
        const answers = [...question.incorrect_answers, question.correct_answer]
        const randomAnswers = getShuffledArr(answers)

        return (
          <div
            key={generateRandomNumber()}
            id={`question${idx}`}
            style={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              scrollSnapType: "y mandatory",
              fontSize: "3rem",
              scrollSnapAlign: "center",
            }}
          >
            <QuestionContent
              key={generateRandomNumber()}
              questions={questions}
              question={question}
              questionId={idx}
              randomAnswers={randomAnswers}
            />

            {idx !== questions.length - 1 ? (
              <a
                href={`#question${idx + 1}`}
                onClick={() => changeIsAnswered(false)}
                rel="noreferrer"
              >
                click-me
              </a>
            ) : (
              <Link to="/results">Ver Resultados </Link>
            )}
          </div>
        )
      })}
    </div>
  )
}
