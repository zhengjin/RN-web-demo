import { AppRegistry } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('rn_web_demo', () => App);
AppRegistry.runApplication('rn_web_demo', {
    rootTag: document.getElementById('react-root')
});