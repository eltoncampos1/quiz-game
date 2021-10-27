import axios from 'axios';

export const getQuestions = async (quantity: number) => {
  const { data } = await axios.get(
    ` https://opentdb.com/api.php?amount=${quantity}`,
  );

  return data;
};
