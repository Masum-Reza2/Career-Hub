import { IoLocationOutline } from 'react-icons/io5';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    // console.log(job)
    let { salary, remote_or_onsite, location, job_type, logo, job_title, company_name,id } = job
    return (
        <div className="flex flex-col items-start justify-center pl-20 border space-y-5 py-8 shadow-sm rounded-lg">
            <img src={logo} alt="" />
            <div className="space-y-2">
                <p className="font-semibold">{job_title}</p>
                <p>{company_name}</p>
                <div className="flex gap-3">
                    <p className="border px-2 py-1 border-purple-400 rounded-md text-purple-600 text-sm font-semibold">{remote_or_onsite}</p>
                    <p className="border px-2 py-1 border-purple-400 rounded-md text-purple-600 text-sm font-semibold">{job_type}</p>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <div className="flex justify-center items-center gap-1">
                        <IoLocationOutline />
                        <p>{location}</p>
                    </div>
                    <div className="flex gap-1 justify-center items-center">
                        <HiOutlineCurrencyDollar />
                        <p>{salary}</p>
                    </div>
                </div>
                <Link to={`/job/${id}`}>
                    <button className='btn bg-indigo-400 text-white hover:text-black'>Details</button>
                </Link>
            </div>
        </div>
    )
}

export default Job