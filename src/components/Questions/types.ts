export interface QuestionProps {
  category: string
  question: string | string[]
  difficulty: string
  incorrect_answers: string[]
  correct_answer: string
  type?: string
}
