import Main from './src/app/Main';
import { store } from './src/app/store'
import { Provider } from 'react-redux'
export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}


