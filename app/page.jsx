import BestSellers from './componenets/BestSellers';
import Brands from './componenets/Brands';
import FeaturedProduct from './componenets/FeaturedProduct';
import Footer from './componenets/Footer';
import FromBlog from './componenets/Fromblog';
import Header from './componenets/Header';
import HeaderSection from './componenets/Header-section-2';
import Navbar from './componenets/Navbar';
import NewsLetterFooter from './componenets/Newsletter';
import Testimonials from './componenets/Testimonials';


export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <HeaderSection />
      <FeaturedProduct />
      <BestSellers />
      <NewsLetterFooter />
      <Brands />
      <FromBlog />
      <Testimonials />
      <Footer />
    </div>
  );
}
