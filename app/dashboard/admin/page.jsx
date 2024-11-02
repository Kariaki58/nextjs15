import Navbar from "@/app/componenets/dashboard/Navbar";
import DashboardCards from "@/app/componenets/dashboard/DashboardCards";
import SalesDashboard from "@/app/componenets/dashboard/SalesDashboard";
// import SalesFromSocials from "@/app/componenets/dashboard/SalesFromSocials";
import SessionSocials from "@/app/componenets/dashboard/SessionSocials";
import TrendingProducts from "@/app/componenets/dashboard/TrendingProducts";


const page = () => {
  return (
    <div className="max-w-screen-xl">
      <Navbar />
      <DashboardCards />
      <SalesDashboard />
      <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-6 mt-6">
        <div className="col-span-2 bg-white shadow-md h-96 p-4 rounded-lg">
          {/* <SalesFromSocials /> */}
        </div>
        <div className="col-span-1 bg-white shadow-md h-96 p-4 rounded-lg">
          <SessionSocials />
        </div>
      </section>
      <section className="w-full mb-6 mt-6 bg-white shadow-md h-96 p-4 rounded-lg">
        <TrendingProducts />
      </section>
    </div>
  );
}

export default page;
