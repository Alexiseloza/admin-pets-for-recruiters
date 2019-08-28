import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {agregarCitaAction} from '../actions/citasActions';
import {validarFormularioAction} from '../actions/validarActions';
import uuid from 'uuid/v4';

const AgregarCita = () => {
     // State local de este componente
     const [ mascota, guardarMascota ] = useState('');
     const [propietario, guardarPropietario] = useState('');
     const [fecha, guardarFecha] = useState('');
     const [hora, guardarHora] = useState('');
     const [sintomas, guardarSintomas] = useState('');

    // dispatch para ejecutar las acciones
    const dispatch = useDispatch();
    const AgregarNuevaCita = (cita) => dispatch( agregarCitaAction (cita));
    const validarFormulario = (estado) => dispatch(validarFormularioAction(estado));

    // useSelector es el reemplazo de mapStateToProps con redux Hooks!!
    const error = useSelector( ( state) => state.error);


    // cuando se envia el formulario 
    const submitNuevaCita = e => {
        e.preventDefault();

        // valida el formulario
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' ) {
            validarFormulario(true);
            return;
        }

        validarFormulario(false);

        // crea la nueva cita
        AgregarNuevaCita({
            id: uuid(),
            mascota,
            propietario,
            fecha,
            hora,
            sintomas
        })

        // reinicia le formualrio
        guardarMascota('');
        guardarPropietario('');
        guardarFecha('');
        guardarHora('');
        guardarSintomas('');


    }
     return(
         <div className="container">
          <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center mb-5">Add an appointment</h2>
                <form onSubmit={submitNuevaCita}>
                    <div className="form-group row">
                        < label className = "col-sm-4 col-lg-2 col-form-label" > The pet 's name</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="pet´s name" 
                                value={mascota}
                                onChange={ e => guardarMascota(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Owner</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text" 
                                className="form-control"  
                                placeholder = "pet owner's name"
                                value={propietario}
                                onChange={ e => guardarPropietario(e.target.value) }
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                            <input 
                                type="date" 
                                className="form-control"
                                 value={fecha}
                                onChange={ e => guardarFecha(e.target.value) }
                            />
                        </div>                            

                        <label className="col-sm-4 col-lg-2 col-form-label">Hour</label>
                        <div className="col-sm-8 col-lg-4">
                            <input 
                                type="time" 
                                className="form-control"
                                 value={hora}
                                onChange={ e => guardarHora(e.target.value) } 
                            />
                        </div>
                    </div>
                    
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label"> Pet Symptom</label>
                        <div className="col-sm-8 col-lg-10">
                            <textarea 
                                className="form-control"
                                 value={sintomas}
                                onChange={ e => guardarSintomas(e.target.value) }
                            ></textarea>
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success btn-block w-100">Add</button>
                        </div>
                    </div>
                </form>
                {error.error ? <div className="alert alert-danger text-center p2">Please complete all fields, are required! </div> : null}
               
            </div>
    </div>
    </div>

     );
}

export default AgregarCita;
