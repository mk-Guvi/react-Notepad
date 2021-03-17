import "./styles.css";
import Folder from "./components/Folder";
import Notes from "./components/Notes";
import NotesText from "./components/NotesText";
import { Route, Switch } from "react-router-dom";
import routes from "./routes/routes";
import Header from "./components/Header";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={routes.folders}>
          <div className="folder">
            <Folder />
          </div>
        </Route>
        <Route path={routes.NotesText}>
          <div className="folder">
            <Folder />
          </div>
          <div className="notes">
            <Notes />
          </div>
          <div className="notestext">
            <NotesText />
          </div>
        </Route>
        <Route path={routes.Notes}>
          <div className="folder">
            <Folder />
          </div>
          <div className="notes">
            <Notes />
          </div>
        </Route>
      </Switch>
    </div>
  );
}
