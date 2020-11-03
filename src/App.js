import './App.scss';
import SearchContainer from './components/Search/SearchContainer'
import CatalogContainer from './components/Catalog/CatalogContainer'
import store from './redux/redux-store';
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <SearchContainer />
        <CatalogContainer />
      </div>
    </Provider>
  );
}

export default App;
