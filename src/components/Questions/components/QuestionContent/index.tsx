import { Link } from "react-router-dom"
import { useQuestions } from "../../../../context/questions"
import { convertAsciiToString } from "../../../../utils"
import { QuestionProps } from "../../types"

interface IQuestionProps {
  question: QuestionProps
  questionId: number
  randomAnswers: string[]
  questions: QuestionProps[]
}

export const QuestionContent = ({
  question,
  questionId,
  randomAnswers,
  questions,
}: IQuestionProps) => {
  const {
    checkCorrectAnswer,
    answered,
    incorrecstAnswers,
    correctAnswers,
    changeIsAnswered,
  } = useQuestions()

  const convertToString = () => {
    const newStr = convertAsciiToString(question.question)

    return newStr
  }
  return (
    <div>
      {question.category.toString()}
      <h1 style={{ fontSize: "2rem" }}>{convertToString()}</h1>
      {randomAnswers.map((awnser: string, _: number, array: string[]) => (
        <button
          onClick={() => checkCorrectAnswer(awnser, question.correct_answer, array)}
          type="button"
          key={awnser}
        >
          {awnser}
        </button>
      ))}
      {answered && (
        <div>
          Respostas erradas:
          {incorrecstAnswers.map((incorrect) => (
            <p style={{ fontSize: "1rem" }} key={incorrect}>
              {incorrect}
            </p>
          ))}
          Respostas certa: {correctAnswers}
        </div>
      )}
    </div>
  )
}
