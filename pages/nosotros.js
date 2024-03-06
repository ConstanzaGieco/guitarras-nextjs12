import Image from "next/image"
import Layout from "../components/layout"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <div>
        <Layout
          title={'Nosotros'}
          description={'Sobre nosotros, guitarLA, tienda de música'}
        >
          <main className="contenedor">
            <h1 className="heading">Nosotros</h1>
            <div className={styles.contenido}>
              <Image src='/img/nosotros.jpg' width={1000} height={800} alt="Imagen sobre nosotros"/>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat eleifend felis at pretium. Vivamus feugiat eget est quis tristique. Etiam rutrum dui nec augue placerat vehicula. Pellentesque ac nulla et leo scelerisque fermentum. Donec ultricies rutrum congue. Maecenas rutrum consequat purus, aliquam efficitur eros fermentum at. In consequat ac orci id malesuada. Vivamus aliquam faucibus nulla vitae lobortis. Phasellus ac turpis lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ante nec ligula lacinia sodales in ac lectus.</p>
                <p>Sed rhoncus nisi vel facilisis malesuada. Integer rutrum ullamcorper arcu, in pharetra ante viverra et. Quisque dignissim maximus porta. Nunc faucibus vel nunc id aliquam. Vestibulum dignissim turpis turpis, quis hendrerit nisi ultricies nec. Donec suscipit libero et lacus posuere ornare. Donec malesuada nisi libero, in condimentum nibh interdum eu. Proin quis est tempus, faucibus felis non, blandit erat.</p>
              </div>
            </div>
          </main>
        </Layout>
    </div>
  )
}
