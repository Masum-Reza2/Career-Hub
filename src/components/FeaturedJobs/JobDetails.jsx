import { useLoaderData, useParams } from "react-router-dom"

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();

    const requireData = jobs.find(job => job.id === parseFloat(id))
    // this is not the best practice, for a piece of data we should not load the entire data, just load a single piece of data.

    let { company_name, contact_information, educational_requirements, experiences, job_description, job_responsibility, job_title, job_type, location, logo, remote_or_onsite, salary } = requireData
    let { address, email, phone } = contact_information

    return (
        <div>
            <div className="w-[90%] mx-auto">
                <h1 className="font-semibold text-xl text-center underline">Job Details of : {job_title}</h1>

                <div className="flex flex-col md:flex-row gap-10 py-16">
                    <div className="md:w-[60%] space-y-3">
                        <div>
                            <span className="font-bold underline">Job Description</span>
                            <span>{job_description}</span>
                        </div>
                        <div>
                            <span className="font-bold underline">Job Responsibility</span>
                            <span>{job_responsibility}</span>
                        </div>
                        <div>
                            <span className="font-bold underline">Educational Qualification</span>
                            <p>{educational_requirements}</p>
                        </div>
                        <div>
                            <span className="font-bold underline">Experience</span>
                            <p>{experiences}</p>
                        </div>
                    </div>

                    <div className="md:w-[30%] border py-5 px-3 bg-purple-50 rounded-lg space-y-2">
                        <h5 className="font-semibold text-lg border-b border-gray-400 pb-2">Job Details</h5>
                        <p className="font-semibold">Salary : <span className="text-gray-500">{salary}/Month</span></p>
                        <p className="font-semibold">Job Title : <span className="text-gray-500">{job_title}</span></p>

                        <h5 className="font-semibold border-b border-gray-400 pb-2 text-lg">Contact Information</h5>
                        <div>
                            <p className="font-semibold">Phone : <span className="text-gray-500">{phone}/Month</span></p>
                            <p className="font-semibold">Email : <span className="text-gray-500">{email}/Month</span></p>
                            <p className="font-semibold">Address : <span className="text-gray-500">{address}/Month</span></p>
                        </div>
                        <div className="text-center py-5">
                            <button className="btn bg-purple-400 text-white hover:text-black">Apply Now</button>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default JobDetails