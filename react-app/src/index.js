import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { ModalProvider, Modal } from './context/Modal';
import ProjectForm from './components/Projects/ProjectForm';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <Provider store={store}>
        <App />
        {/* <ProjectForm/> */}
        <Modal />
      </Provider>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
