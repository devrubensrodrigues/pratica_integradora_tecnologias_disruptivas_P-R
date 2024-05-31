import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import TemporaryDrawer from "./pages/tarefa/anchor";

function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
      <TemporaryDrawer />
    </div>
  );
}

export default App;
