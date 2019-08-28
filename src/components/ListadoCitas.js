
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

// eliminar la cita 
import {borrarCitaAction} from '../actions/citasActions';

const ListadoCitas = () => {

     // obtiene las citas del state
     const citas = useSelector((state) => state.citas);
     
     // mensaje condicional
     const mensaje = Object.keys(citas.citas).length === 0 ? 'Create a site first! , No data saved yet!' : 'Manage your appointments Here!';

     // dispatch para llmar al action de eliminar las citas
     const dispatch = useDispatch();

     return <div className="card mt-5 container-fluid">
				<div className="card-body">
					<h2 className="card-title text-center">{mensaje} </h2>
					<div className="lista-citas">
						{citas.citas.map(cita => (
                              <div key={cita.id} className="media mt-3">
							<div className="media-body">
									<h3 className="mt-0" > <span className="text-alert">Pet's: </span>  {cita.mascota}</h3>
									<p className="card-text"> <span>Owner name: </span>{cita.propietario}
									</p>
									<p className="card-text"> <span>Date: </span>{cita.fecha}
									</p>
									<p className="card-text"> <span>Hour: </span>{' '}{cita.hora}
									</p>
									<p className="card-text"><span>Symptom: </span> <br />{' '}{cita.sintomas}
									</p>
								<button className="btn btn-danger"
                                        onClick={() => dispatch(borrarCitaAction(cita.id)) }
                                        >Delete &times;</button>
							</div>
                              </div>
                              ))}
					</div>
				</div>
			</div>;
}

export default ListadoCitas;
