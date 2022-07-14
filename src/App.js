import "./App.css";
import { explorer } from "./data/folderData";
import { Folder } from "./Folder";

function App() {
  return (
    <div className="App">
      <Folder explorer={explorer} />
    </div>
  );
}

export default App;
