import React, { useEffect, useContext } from 'react';
import { Context } from './src/js/store/appContext.js';
import TarjetaDeContacto from './TarjetaDeContacto'; 

function Contacto() {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadContacts();
    }, []);

    return (
        <div>
            {store.contacts.map(contact => <TarjetaDeContacto key={contact.id} data={contact} />)}
            <Link to="/addcontact">
                <button>Agregar nuevo contacto</button>
            </Link>
        </div>
    );
}

export default Contacto;
