import { Steps } from "./../screens/QuestionsLayout/types";
import { ReactNode } from "react";

export type QuestionsProviderProps = {
  children: ReactNode;
};

export interface IQuestionContext {
  currentStep: Steps;
  formValues: IDefaultValues;
  handleNext: (values: IDefaultValues) => void;
  handlePrev: (values: IDefaultValues) => void;
}

export type IDefaultValues = {
  numberofQuestions: string;
};
