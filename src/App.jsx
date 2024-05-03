import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
    return (
        <div className="App">
            <header className="header">
                <h1>Coffee Shop</h1>
                <Navbar />
            </header>
            <ItemListContainer greeting="Item List Container: Texto de prueba" />
        </div>
    );
}

export default App;
