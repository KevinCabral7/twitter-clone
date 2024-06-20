import GlobalStyle from "./styles";
import Nav from "./container/Nav";
import Tread from "./container/Tread";
import Post from "./components/Post";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Nav />
      <Post />
      <Tread /> */}
      <Login isVisible={false} />
    </>
  );
}

export default App;
