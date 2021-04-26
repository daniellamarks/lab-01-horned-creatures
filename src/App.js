import './App.css';
import Header from './Header';
import CreatureList from './CreatureList'
import images from './creatures'


function App() {
  return  ( 
    <div className="App">
      <header className="App-header">
        <div>
          Hello. 
          <Header/>
          <CreatureList images={images}/>
          <main> </main>
        </div>
      </header>
       </div>
  );
}

export default App;
