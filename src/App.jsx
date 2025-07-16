import { Provider } from 'react-redux';
import store from './redux/store';
import AppMain from './AppMain';
import './App.css';

function App() {
   return (
      <Provider store={store}>
         <AppMain />
      </Provider>
   );
}

export default App;
