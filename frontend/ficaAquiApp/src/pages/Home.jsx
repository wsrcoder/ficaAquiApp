
import Header from '../components/Header'
import Hero from '../components/Hero'
import BentoGrid from '../components/BentoGrid'
import Footer from '../components/Footer'

import heroImage from '../assets/images/hero_02.png'
import gridImage_1 from '../assets/images/grid_01.png'
import gridImage_2 from '../assets/images/grid_02.png'
import gridImage_3 from '../assets/images/grid_03.png'
import gridImage_4 from '../assets/images/grid_04.png'  


function Home() {
  return (
    <div className="home-page">
      <Header />
      <main>
        <Hero image={heroImage} />
        <BentoGrid image={[gridImage_1, gridImage_2, gridImage_3, gridImage_4]} />
      </main>
      <Footer />
    </div>


  );
}

export default Home;