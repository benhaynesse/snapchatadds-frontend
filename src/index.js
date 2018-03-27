import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import App from './components/App.jsx';

import { Provider } from 'react-redux';
import Store from './store';

const StoreInstance = Store();

ReactDOM.render(
    <Provider store={StoreInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// if (module.hot) {
//     module.hot.accept('./containers/App/App', () => {
//         const NextApp = require('./containers/App/App').default;
//         ReactDOM.render(
//             <Provider store={store}>
//                 <ConnectedRouter history={history}>
//                     <NextApp />
//                 </ConnectedRouter>
//             </Provider>,
//             document.getElementById('root')
//         );
//     });
//     window.store = store;
// }

registerServiceWorker();
