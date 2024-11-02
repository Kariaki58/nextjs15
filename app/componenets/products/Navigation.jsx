import Link from "next/link";


const Navigation = () => {
  return (
    <nav className='flex justify-center'>
        <div className='flex gap-10'>
            <Link href='/product/1'>Description</Link>
            <Link href='/product/1/product-info'>Additional information</Link>
            <Link href='/product/1/reviews'>Reviews (5)</Link>
        </div>
    </nav>
  )
}

export default Navigation