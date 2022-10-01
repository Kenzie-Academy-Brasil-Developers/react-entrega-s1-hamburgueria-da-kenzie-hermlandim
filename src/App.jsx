import Container from "./Components/Container";
import HeaderMain from "./Components/Header";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <Container>
        <HeaderMain />
        <Main />
      </Container>
    </div>
  );
}

export default App;
