import { Provider } from 'react-redux';
import './App.css';
import UserContainer from './Components/UserContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
