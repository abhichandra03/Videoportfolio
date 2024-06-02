import Image from 'next/image'
import { FC } from 'react'
import pfp from '../../assests/pfp.jpeg'

interface HomePageProps {
  
}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
  <div id='home' className='w-full h-screen flex justify-center items-center'>

  <div className='flex flex-col max-w-[1000px] w-full h-screen md:flex-row'>
    <div className='w-full h-1/2 b flex justify-center items-end p-2 md:w-3/5 md:h-full md:items-center'>
        <div className='flex flex-col justify-center items-center p-4'>
            <h1 className='text-6xl font-bold lg:text-8xl'>{`Gayatri's`} <br /> {`Portfolio`} </h1>
        </div>
    </div>

    <div className='flex justify-center items-center w-full h-1/2  p-2 md:w-2/5 md:h-full'>
        <div className=' flex justify-center items-center max-h-1/2 max-w-full overflow-hidden '>
          <Image 
          className='rounded-full aspect-square object-contain w-1/2 h-1/2 '
          src={pfp}
          alt='Pfp'
          />
          
        </div>
    </div>
  </div>
  </div>
  )
}

export default HomePage