import  Features from '../components/Features'
import Carousel from '../components/Carousel'
import Category from '../components/Category'
import MidBanner from '../components/MidBanner'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Carousel />
      <Category />
      <MidBanner />
      <Features />
    </div>
  )
}

export default Home