import Layout from "../components/layout"
import Guitarra from "../components/guitarra"
import styles from '../styles/grid.module.css'


export default function Tienda({guitarras}) {

  return (
    <div>
        <Layout
          title={'Tienda Virtual'}
          description={'Tienda virtual, venta de guitarras, instrumentos, GuitarLA'}
        >
          <main className="contenedor">
            <h1 className="heading">Nuestra Colección</h1>
            <div className={styles.grid}>
              {guitarras?.map(guitarra => (
                <Guitarra 
                  key={guitarra.id}
                  guitarra={guitarra.attributes}
                />
              ))}
            </div>
          </main>
        </Layout>
    </div>
  )
}

//ServerSideProps se utiliza cuando la info cambia de forma continua en cada request o donde la pagina se actualiza cada poco tiempo (por ejemplo una pagina de noticias). El proceso es asi, tenemos un usuario que visita la pagina /clientes, y en esa visita request, NEXT.js va a generar la pagina HTML y se la sirve al usuario.
//StaticProps se utiliza cuando la info no cambia en cada request (por ejemplo un portafolio, una pagina de tramites). El proceso es asi, NEXT.js va a generar esta versión cuando se escriba en la terminal next build y va a generar una serie de archivos HTML los cuales se van a servir a diferentes usuarios. Entonces este HTML es utilizado por muchos usuarios, y de esta forma se crean todos los archivos y quedan en el servidor y son reutilizados por todos los usuarios.
//StaticPaths va con getStaticProps y se utiliza cuando hay routing dinamico, si no suficiente con StaticProps.

/* export async function getStaticProps(){
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const {data: guitarras} = await respuesta.json()

  return {
    props: {
      guitarras
    }
  }
} */

export async function getServerSideProps(){
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const {data: guitarras} = await respuesta.json()

  return {
    props: {
      guitarras
    }
  }
}

