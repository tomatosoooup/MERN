import { TextCensor } from "./components/text-censor";

function App() {
  const badWords = ["someBadWord", "test"];
  const someText =
    "Very long text who contains someBadWord and testWord Very long text who contains someBadWord and testWord Very long text who contains someBadWord and testWord";
  return (
    <>
      <TextCensor initialText={someText} badWords={badWords} />
    </>
  );
}

export default App;
