import ShippingDetails from "@/app/componenets/ShippingDetails"
import ProfileCard from "./ProfileCard"
import { Card } from "@/components/ui/card"
import SocialAccountCard from "./SocialAccountCard"
import Address from "@/app/componenets/Address"


const page = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <div>
        <div className="mb-5">
          <ProfileCard />
        </div>
        <SocialAccountCard />
      </div>
      <Card className="p-4 col-span-2 inline-block">
        <Address />
      </Card>
    </div>
  )
}

export default page