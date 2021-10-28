import { Button, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { getQuestions } from "../../services/getQuestions"
import { useQuestions } from "../../context/questions"
import { Question } from "./components"
import { QuestionProps } from "./types"

export const Questions = () => {
  const { formValues } = useQuestions()
  const [quantity, setQuantity] = useState(Number(formValues.numberofQuestions))
  const [questions, setQuestions] = useState<QuestionProps[]>([])

  console.log(questions)

  const fetchQuestions = async () => {
    const data = await getQuestions(quantity)
    setQuestions(data.results)
    return data
  }

  useEffect(() => {
    fetchQuestions()
  }, [])

  return (
    <Box
      sx={{
        width: "100%",
        flexDirection: "column",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Question questions={questions} />
    </Box>
  )
}
