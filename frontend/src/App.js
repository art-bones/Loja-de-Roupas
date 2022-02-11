import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './routes';
import Header from './components/Header';
import { Container } from '@material-ui/core';
import { Provider } from 'react-redux';
import store from './components/store';



const App = () => {

const localCart = JSON.parse(localStorage.getItem('soccershopping: cart'));

if(localCart != null){
  store.dispatch({type: 'CHANGE_CART', localCart})
}

  return (
    <Provider store={store}>
      <Container maxWidth="xl">
        <Router>
          <Header />
          <MainRoutes />
        </Router>
      </Container>
    </Provider>
  )
}

export default App;
