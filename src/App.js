import Logo from './SORRENTOLOGO.png';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import {Home} from './components/Home'
import {Apartment} from './components/Apartment'
import {Locality} from './components/Locality'
import {Pricing} from './components/Pricing'
import {Bookings} from './components/Bookings'
import {Contact} from './components/Contact'
import {NotFound} from './components/NotFound'
 
import {Header} from './components/Header'

const NavItems = [
  {"name" : "Home", "link" : "/"},
  {"name" : "The Apartment", "link" : "/apartment"},
  {"name" : "Locality", "link" : "/Locality"},
  {"name" : "Pricing", "link" : "/pricing"},
  {"name" : "Bookings", "link" : "/bookings"},
  {"name" : "Contact", "link" : "/contact"}
]

function App() {
  return (
   <div className="website">
     <Header logo ={Logo} nav={NavItems} />
     <header className="header"></header>
     {/* change content - only part that will change across the website */}
     <main className="content">
     <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/apartment">
          <Apartment />
        </Route>
        <Route path="/locality">
          <Locality />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/bookings">
          <Bookings />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
    </Switch>

     </main>
     <footer className="footer"></footer>
   </div>
  );
}

export default App;
