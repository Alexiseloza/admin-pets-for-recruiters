import React from 'react';

// agregar cita
import AgregarCita from './components/AgregarCita';
import ListadoCitas from './components/ListadoCitas';
import Footer from './components/Footer';

// REDUX
import store from './store';
import {Provider} from 'react-redux';


function App() {
  return (
    <Provider store={store}>
    <div className="container">
      <header>
        <h1 className="text-center"> Veterinary Patients ADMIN</h1>
      </header>
      <div className="row mt-5">
        <AgregarCita />
        <div className="col-md-6">
          <ListadoCitas />
        </div>
      </div>
    
    </div>
    <div className="footer">
      <Footer />
    </div>
    </Provider>
  );
}

export default App;
