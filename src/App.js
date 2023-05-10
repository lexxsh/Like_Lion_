import React from "react";
import { GlobalStyle } from "./components/Globle/Globle";
import Head from "./components/Head/Head";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main"
import Card from "./components/Card/Card"


function App() {
  return (
    <div>
    <GlobalStyle />
    <Head></Head>
    <Main></Main>
    <Card></Card>
    <Footer></Footer>
    </div>
  );
}
export default App;