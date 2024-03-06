import { useState, useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  //aseguramos asi que el codigo de localStorage se ejecute sólo del lado del cliente y no del servidor ya que si no tiraria error por no existir localStorage en next.js. Si window (que está del lado del cliente) no es undefined, entonces traeme lo que esté en el carrito en formato arreglo (recordar que localstorage trae todo en formato string). Si no hay nada en LS entonces traeme un arreglo vacio y si hay problemas con window, tambien traeme un arreglo vacio.
  const carriLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : []
  const [carrito, setCarrito] = useState(carriLS)

  //aca solucionamos el problema de hidratacion en next.js por el tema del LS, y al final, en el return hacemos que todo lo relacionado al carrito se ejecute una vez que pase a true la pagina.
  const [paginaLista, setPaginaLista] = useState(false)
  useEffect(()=>{
    setPaginaLista(true)
  }, [])

  useEffect(()=>{
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])

  const agregarCarrito = guitarra => {
    // Comprobar si la guitarra ya esta en el carrito...
    if(carrito.some( guitarraState =>  guitarraState.id === guitarra.id )) {
        // Iterar para actualizar la cantidad
        const carritoActualizado = carrito.map( guitarraState => {
            if( guitarraState.id === guitarra.id ) {
                guitarraState.cantidad = guitarra.cantidad;
            } 
            return guitarraState;
        });
        // Se asigna al array
        setCarrito([...carritoActualizado]);
        localStorage.setItem('carrito', JSON.stringify( carrito ));
    } else {
        // En caso de que el articulo no exista, es nuevo y se agrega
        setCarrito([...carrito, guitarra]);
        localStorage.setItem('carrito', JSON.stringify( carrito ));
    }
 }

  const eliminarProducto = id => {
    const carritoActualizado = carrito.filter( producto => producto.id != id)
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify( carrito ));
  }

  const actualizarCantidad = guitarra => {
    const carritoActualizado = carrito.map( guitarraState => {
      if(guitarraState.id === guitarra.id ) {
        guitarraState.cantidad = parseInt( guitarra.cantidad )
      } 
      return guitarraState
    })
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify( carrito ));
  }

  return paginaLista ? <Component {...pageProps}
    carrito={carrito} 
    agregarCarrito={agregarCarrito}
    eliminarProducto={eliminarProducto}
    actualizarCantidad={actualizarCantidad}
  /> : null
}

export default MyApp
