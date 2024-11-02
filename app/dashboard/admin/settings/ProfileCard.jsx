import React from 'react'
import profile1 from '@/public/assets/profile-1.jpg';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const ProfileCard = () => {
  return (
    <Card className="p-4">
        <div>
            <Image src={profile1} width={200} height={300} alt="profile image" className='rounded-xl'/>
        </div>
        <div>
            <h3 className='text-black font-bold text-xl'>John Doe</h3>
            <p className='text-black'>Software Engineer</p>
        </div>
        <Button className="mt-4 text-lg p-5">Change Picture</Button>
    </Card>
  )
}

export default ProfileCard