import { createContext, useContext, useState } from "react";
import { Steps } from "../screens/QuestionsLayout/types";
import {IDefaultValues, IQuestionContext, QuestionsProviderProps} from './types'

const QuestionsContext = createContext({} as IQuestionContext)

export const QuestionsProvider = ( { children }: QuestionsProviderProps) => {
    const [currentStep, setCurrentStep] = useState<Steps>(
        Steps.ChooseNumberOFQuestions,
      );

      
      
      const defaultValues :IDefaultValues = {
          numberofQuestions: '',
        }
        
        const [formValues, setFormValues] =
        useState<IDefaultValues>(defaultValues);
        
        console.log(formValues);
    const handleNext = (values: IDefaultValues) => {
        setFormValues(values);
       
        setCurrentStep(currentStep + 1);
    };

    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };

    return (
        <QuestionsContext.Provider value={{ currentStep, formValues, handleNext, handlePrev }} >
            {children}
        </QuestionsContext.Provider>
    )
}

export const useQuestions = () => {
    const context = useContext(QuestionsContext)

    return context
}