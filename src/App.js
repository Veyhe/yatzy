import Header from "./components/header/header.component";
import Scoreboard from "./components/scoreboard/scoreboard.component";
import Dicerolls from "./components/dicerolls/dicerolls.component";

import logo from "./logo.svg";
import { GlobalStyle } from "./global.styles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Scoreboard />
      <Dicerolls />
    </>
  );
};

export default App;
