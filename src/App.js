
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
function App() {
  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      dasc: "You need to go to the market to get this job done1"
    },
    {
      sno: 2,
      title: "Go to the mall",
      dasc: "You need to go to the market to get this job done2"
    },
    {
      sno: 3,
      title: "Go to the ghat",
      dasc: "You need to go to the market to get this job done3"
    }
  ]
  return (
    <>
      <Header title="my todos list" searchBar={false}/>
      <Todos todos={todos}/>
      <Footer/>
      <h1>Hello world</h1>
    </>
  );
}

export default App;
