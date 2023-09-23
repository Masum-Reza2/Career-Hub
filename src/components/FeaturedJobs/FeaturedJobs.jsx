import { useEffect, useState } from "react"
import SectionHeader from "../SectionHeader/SectionHeader"
import Job from "./Job"

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([])
    const [jobLength, setJonLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [jobLength])
    // console.log(jobs)

    return (
        <div className="py-5">
            <SectionHeader title={'Featured Jobs'} desc={'Explore thousands of job opportunities with all the information you need. Its your future'} />

            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    jobs.slice(0, jobLength).map(job => <Job key={job.id} job={job} />)
                }
            </div>
            <div className="text-center pt-5">
                {jobLength < jobs.length ?
                    <button onClick={() => setJonLength(jobs.length)} className="btn bg-indigo-400 hover:text-black text-white">See All Jobs</button> :
                    <button onClick={() => setJonLength(4)} className="btn bg-indigo-400 hover:text-black text-white">See Less Jobs</button>
                }
            </div>

        </div>
    )
}

export default FeaturedJobs