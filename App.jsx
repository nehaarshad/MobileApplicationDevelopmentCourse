import { registerRootComponent } from 'expo';
import AppNavigator from './src/navigations/appNavigations'

const App = () => {
  return (
    <AppNavigator />
  );
};

export default App;
registerRootComponent(App);