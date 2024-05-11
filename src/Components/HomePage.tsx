import { FC } from 'react'

interface HomePageProps {
  
}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
  <div className='flex'>
    <div className='w-3/5 h-screen bg-[#607274] flex justify-end items-center p-2'>
        <div className='flex flex-col text-[#FAEED1]'>
            <h1 className='text-8xl cedarville-curvise font-bold'>Video Editing</h1>
            <h2 className='text-6xl cedarville-curvise'>Portfolio</h2>
        </div>
    </div>

    <div className='flex justify-start items-center w-2/5 h-screen bg-[#607274] p-2'>
        <div className='text-[#FAEED1]'>
          <h1 className='text-6xl cedarville-curvise'>picture</h1>
        </div>
    </div>
  </div>)
}

export default HomePage