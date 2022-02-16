import Button from "@components/buttons/Button";


function onClickNoop() {
  console.log('noop');
}

function App() {
  return (
    <div className="w-full p-20">
      Storybook free hosting
      <h1>Button</h1>
      <Button id="button-test" onClick={onClickNoop}>
        button test
      </Button>
    </div>
  );
}

export default App;
