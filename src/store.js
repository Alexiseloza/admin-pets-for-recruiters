import { createStore } from 'redux';
import reducer from './reducers';

// localstorege
import { obtenerStateStorage , guardarStateStorage} from './localstorage';

// state inicial
//   const initialState = [];

// obteber las citas de localstorage
const storageState = obtenerStateStorage();

 const store = createStore(
     reducer, 
     storageState,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe( () => {
    guardarStateStorage({
        citas: store.getState().citas
    })
})

export default store;
