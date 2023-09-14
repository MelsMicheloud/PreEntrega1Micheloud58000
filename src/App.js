import "./App.css"
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ProfileCard from "./ProfileCard";
import CaninMini from "./img/royalCaninMini.png";
import CaninMedium from "./img/RoyalCaninMedium.png";
import CaninAdult from "./img/RoyalCaninMiniIndor.png";
import "bulma/css/bulma.css";

function App() {

  return (
    <div>
      <div className="App">
        <NavBar/>
        <ItemListContainer greeting={'Bienvenidos'}/>
      </div>

      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <h1 className="title">Alimentos Royal Canin</h1>
          </div>
        </section>

        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column is-4">
              <ProfileCard titulo="Alimento Royal Canin Perro Mini Adulto 7.5Kg" precio="$18700" img={CaninMini}/>
              </div>

              <div className="column is-4">
              <ProfileCard titulo="Alimento Royal Canin Medium Adulto - 15 Kg" precio="$29550" img={CaninMedium}/>
              </div>

              <div className="column is-4">
              <ProfileCard titulo="Alimento Royal Canin Mini Indoor Adulto - 1 Kg" precio="$3600" img={CaninAdult}/>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default App;
