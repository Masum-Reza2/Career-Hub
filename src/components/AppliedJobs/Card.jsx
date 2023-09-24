import { Link } from "react-router-dom"

const Card = ({ job }) => {
    // console.log(job)
    let { job_title, company_name, educational_requirements, experiences, job_description, job_responsibility, job_type, location, logo, salary, id } = job
    return (
        <div className="text-center py-5 border shadow-md shadow-gray-500 flex flex-col items-center justify-center space-y-2 rounded-lg">
            <p className="font-bold">{job_title}</p>
            <img src={logo} alt="" />
            <div className="space-y-1 border p-4 rounded-md bg-purple-50 text-start">
                <p><span className="underline">Company</span> : {company_name}</p>
                <p><span className="underline">Experience</span> : {experiences}</p>
                <p><span className="underline">Location</span> : {location}</p>
                <p className="font-semibold"><span className="underline">Salary</span> : {salary}</p>
            </div>
            <Link to={`/appliedJobs/${id}`}>
                <button className="btn bg-purple-400">Details</button>
            </Link>
        </div>
    )
}

export default Card