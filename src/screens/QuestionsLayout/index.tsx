import { Box } from "@mui/system"
import { Formik, Form } from "formik"
import { ChooseQuestion } from "../../components/ChooseQuestion"
import { LayoutContainer } from "../../components/LayoutContainer"
import { Questions } from "../../components/Questions"
import { StartOrCancel } from "../../components/StartOrCancel"

import { useQuestions } from "../../context/questions"
import { Steps } from "./types"

export const QuestionsLayout = () => {
  const { formValues, currentStep, handleNext } = useQuestions()

  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <Formik
        initialValues={formValues}
        validateOnBlur={false}
        validateOnChange={false}
        enableReinitialize
        onSubmit={handleNext}
      >
        {() => (
          <Form>
            <LayoutContainer>
              {currentStep === Steps.ChooseNumberOFQuestions && <ChooseQuestion />}
              {currentStep === Steps.ChooseStartOrCancel && <StartOrCancel />}
              {currentStep === Steps.Questions && <Questions />}
            </LayoutContainer>
          </Form>
        )}
      </Formik>
    </Box>
  )
}
