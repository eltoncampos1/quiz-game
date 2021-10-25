import { createContext, useContext, useState } from "react";
import { Steps } from "../screens/QuestionsLayout/types";
import {IDefaultValues, IQuestionContext, QuestionsProviderProps} from './types'

const QuestionsContext = createContext({} as IQuestionContext)

export const QuestionsProvider = ( { children }: QuestionsProviderProps) => {
    const [currentStep, setCurrentStep] = useState<Steps>(
        Steps.ChooseNumberOFQuestions,
      );

    const defaultValues :IDefaultValues = {
        numberofQuestions: 0,
    }

    const [formValues, setFormValues] =
        useState<IDefaultValues>(defaultValues);

    const handleNext = (values: IDefaultValues) => {
        setFormValues(values);
       
        setCurrentStep((currentStep) => currentStep + 1);
    };

    const handlePrev = (values: IDefaultValues) => {
        setFormValues(values);
       
        setCurrentStep((currentStep) => currentStep - 1);
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