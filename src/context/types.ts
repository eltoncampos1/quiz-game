import { ReactNode } from "react"
import { Steps } from "../screens/QuestionsLayout/types"

export type QuestionsProviderProps = {
  children: ReactNode
}

export interface IQuestionContext {
  currentStep: Steps
  formValues: IDefaultValues
  answered: boolean
  correctsResponses: number
  incorrectsResponses: number
  incorrecstAnswers: string[]
  correctAnswers: string[]
  changeIsAnswered: (value: boolean) => void
  handleNext: (values: IDefaultValues) => void
  handlePrev: () => void
  getTotalIncorrectsAnswers: () => void
  getTotalCorrectsAnswers: () => void
  getCorrectsAnswers: (value: string[]) => void
  getIncorrectsAnswers: (value: string[]) => void
  filterIncorrectsAnswers: (array: Array<string>, correctItem: string) => string[]
  checkCorrectAnswer: (
    answer: string,
    correctAnswer: string,
    answerArr: Array<string>
  ) => void
}

export type IDefaultValues = {
  numberofQuestions: string
}
