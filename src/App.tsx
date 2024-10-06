import { questions } from "./questions";
const options = ["optiona", "optionb", "optionc", "optiond"];

function App() {
  return (
    <div className="space-y-6 p-6">
      {questions.map((q, idx) => (
        <section key={q.qnid} className="space-y-3">
          <h1 className="text-lg">
            {idx + 1}.{q.question}
          </h1>
          <ul className="list-decimal pl-5">
            {options.map((op) => (
              //@ts-ignore
              <li key={op}>{q[op]}</li>
            ))}
          </ul>
          <p className="space-x-2">
            <span>Answer:</span>
            <span className="uppercase text-lg font-medium">
              {options.indexOf(q.correctanswer) + 1}
            </span>
          </p>
          <hr />
        </section>
      ))}
    </div>
  );
}

export default App;
