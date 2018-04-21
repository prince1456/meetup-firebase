import App from './src';
import { config } from './config';
import * as firebase from 'firebase'

firebase.initializeApp(config);

export default App;
