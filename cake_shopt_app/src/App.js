import './App.css';
import CakeContainer from './Components/CakeContainer';
import { Provider } from 'react-redux'
import store from './redux/store';
import HooksCakeContainer from './Components/HooksCakeContainer';
import IceCreamContiner from './Components/IceCreamContiner';
import SweetsContiner from './Components/SweetsContiner';
import NewCakeContainer from './Components/NewCakeContainer';
import ItemContainer from './Components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContiner />
        <SweetsContiner />
        <NewCakeContainer />
        <ItemContainer cake />
        <ItemContainer />
      </div>
    </Provider>
    
  );
}

export default App;
