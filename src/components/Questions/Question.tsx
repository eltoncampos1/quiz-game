type IQuestionProps = {
    questions: Array<any>
}

export const Question = ({ questions }:IQuestionProps) => (
  <div style={{
    scrollBehavior: 'smooth', width: '100%', height: '100vh', overflowY: 'hidden', scrollSnapType: 'y mandatory',
  }}
  >

    {questions.map((question, idx) => (

      <div
        key={question.question}
        id={`question${idx}`}
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          scrollSnapType: 'y mandatory',
          fontSize: '3rem',
          scrollSnapAlign: 'center',
        }}
      >

        {question.category}
        <a type="button" href={`#question${idx + 1}`}>click-me</a>
      </div>
    ))}
  </div>
);
