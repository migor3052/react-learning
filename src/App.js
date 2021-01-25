import './App.css';
import react from "./react.png";
function Header(props) {
  return(
    <header>
      <h1>{props.name}'s Place</h1>
    </header>
  )
}

function Main(props){
  return(
    <section>
      <p>The best place there is. It's {props.adjective}</p>
      <img src={react} height={150} alt="react logo"/>
      <ul style={{textAlign:"left"}}>
        {props.tools.map(tool => (
        <li key={tool.id}>{tool.title}</li>
        ))}
      </ul>
    </section>
  )
}

function Footer(props){
  return(
    <p>Copyright {props.year}</p>
  )
}
const tools = [
  "Hammer", 
  "Sickle",
  "Saw"
]

const toolsObjects = tools.map((tool, i) => ({ id: i, title: tool }));
console.log(toolsObjects);

function App() {
  return (
    <div className="App">
      <Header name="Michael"/>
      <Main adjective="Amazing" tools={toolsObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
