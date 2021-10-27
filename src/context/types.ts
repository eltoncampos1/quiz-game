import { ReactNode } from 'react';
import { Steps } from '../screens/QuestionsLayout/types';

export type QuestionsProviderProps = {
  children: ReactNode;
};

export interface IQuestionContext {
  currentStep: Steps;
  formValues: IDefaultValues;
  handleNext: (values: IDefaultValues) => void;
  handlePrev: () => void;
}

export type IDefaultValues = {
  numberofQuestions: string;
};
