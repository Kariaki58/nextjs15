import AppSidebar from "@/app/componenets/dashboard/Left";


export const metadata = {
  title: 'Dashboard',
  description: 'Admin Dashboard for the Cosmetic Brand',
};

const page = ({ children }) => {
  return (
    <div className="flex">
      <div className="lg:w-60">
        <AppSidebar />
      </div>
      <div className="flex-1 p-4 bg-gray-100 overflow-y-hidden">
        {children}
      </div>
    </div>
  )
}

export default page
