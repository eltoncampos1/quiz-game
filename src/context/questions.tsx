/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import { createContext, useContext, useState } from "react"
import { Steps } from "../screens/QuestionsLayout/types"
import { IDefaultValues, IQuestionContext, QuestionsProviderProps } from "./types"

const QuestionsContext = createContext({} as IQuestionContext)

export const QuestionsProvider = ({ children }: QuestionsProviderProps) => {
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([])
  const [correctsResponses, setCorrectResponses] = useState(0)
  const [incorrectsResponses, setIncorrectsResponses] = useState(0)
  const [incorrecstAnswers, setIncorrectsAnswers] = useState<string[]>([])
  const [answered, setAnswered] = useState(false)

  const [currentStep, setCurrentStep] = useState<Steps>(
    Steps.ChooseNumberOFQuestions
  )

  const changeIsAnswered = (value: boolean) => {
    setAnswered(value)
  }

  const getCorrectsAnswers = (value: string[]) => {
    setCorrectAnswers(value)
  }

  const getIncorrectsAnswers = (value: string[]) => {
    setIncorrectsAnswers(value)
  }

  const getTotalCorrectsAnswers = () => {
    setCorrectResponses((correctsResponses) => correctsResponses + 1)
  }
  const getTotalIncorrectsAnswers = () => {
    setIncorrectsResponses((incorrectsResponses) => incorrectsResponses + 1)
  }

  const filterIncorrectsAnswers = (array: Array<string>, correctItem: string) => {
    const incorrectsAnswers = array.filter((item) => {
      if (item !== correctItem) {
        return [...item]
      }
    })
    getIncorrectsAnswers(incorrectsAnswers)
    return incorrectsAnswers
  }

  const checkCorrectAnswer = (
    answer: string,
    correctAnswer: string,
    answerArr: Array<string>
  ) => {
    filterIncorrectsAnswers(answerArr, correctAnswer)
    const correct = answerArr.filter((response) => response === correctAnswer)
    getCorrectsAnswers(correct)

    if (answer === correctAnswer) {
      getTotalCorrectsAnswers()
    } else {
      getTotalIncorrectsAnswers()
    }
    changeIsAnswered(true)
  }

  const defaultValues: IDefaultValues = {
    numberofQuestions: "",
  }

  const [formValues, setFormValues] = useState<IDefaultValues>(defaultValues)

  const handleNext = (values: IDefaultValues) => {
    setFormValues(values)

    setCurrentStep(currentStep + 1)
  }

  const handlePrev = () => {
    setCurrentStep(currentStep - 1)
  }

  return (
    <QuestionsContext.Provider
      value={{
        answered,
        correctAnswers,
        correctsResponses,
        incorrectsResponses,
        incorrecstAnswers,
        changeIsAnswered,
        currentStep,
        formValues,
        handleNext,
        handlePrev,
        getTotalIncorrectsAnswers,
        getIncorrectsAnswers,
        getTotalCorrectsAnswers,
        getCorrectsAnswers,
        checkCorrectAnswer,
        filterIncorrectsAnswers,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  )
}

export const useQuestions = () => {
  const context = useContext(QuestionsContext)

  return context
}
