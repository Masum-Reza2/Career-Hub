import BannerPhoto from '../../assets/images/user.png'

const Banner = () => {
    return (
        <div className='flex gap-5 items-center justify-center'>
            <div className='space-y-3  w-[30%]' >
                <h1 className='text-4xl font-extrabold'>One Step Closer To Your</h1>
                <span className='text-4xl font-extrabold text-purple-400'>Dream Job</span>
                <p className='text-sm'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn bg-purple-400 text-white'>Get Started</button>
            </div>
            <div className='w-[30%]'>
                <img className='' src={BannerPhoto} alt="" />
            </div>
        </div>
    )
}

export default Banner