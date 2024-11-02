import ProductPage from "@/app/componenets/products/ProductPage";
import Footer from "@/app/componenets/Footer";
import Navigation from "@/app/componenets/products/Navigation";


const layout = ({children}) => {
  return (
    <>
        <div className="border p-4">
            <ProductPage />
            <Navigation />
            <div className="border p-5 mb-10">
                {children}
            </div>
        </div>
        <Footer />
    </>
    
  )
}

export default layout