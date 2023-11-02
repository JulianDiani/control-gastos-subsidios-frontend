import { presupuestoPrueba } from '../constants/constants';

//SEPARAR LOS SERVICIOS DEL ADMIN Y LOS DEL INVESTIGADOR (ARMAR DOS DIRECTORIOS SEPARADOS UNO PARA CADA UNO DONDE TENGAN SUS COMPONENTES Y SERVICIOS)
export async function getProyectsForAdmin() {
  const url = 'https://viaduct.proxy.rlwy.net:53692/api/proyectos/findAllConCompra';
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    json: true,
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-w
  });
  return response.json();
}
// DELETE ERA LA QUE TENIA GRUPO 2
//export async function getProyectsForAdmin() {
//   const url = 'https://viaduct.proxy.rlwy.net:53692/api/proyectos/allProyects';
//   const response = await fetch(url, {
//     method: 'GET', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     json: true,
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-w
//   });
//   return response.json();
// }

export async function getProyecto(username) {
  const url = `https://viaduct.proxy.rlwy.net:53692/api/proyectos/${username}`;
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    json: true,
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  //const proyecto = await response.json();
  return response.json();
}

// DELETED ERA LA QUE TENIA EL GRUPO 2
// export async function getProyecto(user) {
//   const url = 'https://viaduct.proxy.rlwy.net:53692/api/proyectos';
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     json: true,
//     body: JSON.stringify({ user: user }),
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//   });
//   //const proyecto = await response.json();
//   return response.json();
// }
export async function getUserByProyect(idProyecto) {
  const url = `https://viaduct.proxy.rlwy.net:53692/api/usuariosproyectos/getUsuariosIdProyecto/${idProyecto}`;
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    json: true,
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  //const proyecto = await response.json();
  return response.json();
}

export async function getProyectoById(idProyecto) {
  const url = `https://viaduct.proxy.rlwy.net:53692/api/proyectos/findByName/${idProyecto}`;
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    json: true,
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  //const proyecto = await response.json();
  return response.json();
}

// DELETED este tenia grupo 2
// export async function getProyectoById(idProyecto) {
//   const url = 'https://viaduct.proxy.rlwy.net:53692/api/proyectos/findByName';
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     json: true,
//     body: JSON.stringify({ id: idProyecto }),
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//   });
//   //const proyecto = await response.json();
//   return response.json();
// }

export function getPresupuesto() {
  return Promise.resolve(presupuestoPrueba);
}

export async function createProyecto(body) {
  const url = 'https://viaduct.proxy.rlwy.net:53692/api/proyectos/create';
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origi
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
