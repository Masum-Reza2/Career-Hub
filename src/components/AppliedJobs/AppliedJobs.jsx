import { useLoaderData } from "react-router-dom"
import { jobApplication } from "../Utility/LocalStorage"
import { useEffect, useState } from "react"
import Card from "./Card"


const AppliedJobs = () => {
  const jobs = useLoaderData()
  const appliedIds = jobApplication()
  // console.log(jobs, appliedIds)
  const [appliedJobs, setAppliedJobs] = useState([])
  const [displayJob, setDisplayJob] = useState([])

  // console.log(appliedJobs)

  useEffect(() => {
    if (jobs.length > 0) {
      let appls = []
      appliedIds.forEach(element => {
        let exist = jobs.find(job => job.id === element)
        appls.push(exist)
      })
      setAppliedJobs(appls)
      setDisplayJob(appls)
    }
  }, [jobs])

  // console.log(appliedJobs)
  const handleDisplayJob = data => {
    if (data === 'all') {
      setDisplayJob(appliedJobs)
    }
    else if (data === 'remote') {
      let remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
      setDisplayJob(remoteJobs)
    }
    else if (data === 'onsite') {
      let onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
      setDisplayJob(onsiteJobs)
    }
  }

  return (
    <div>
      <h1 className="text-center font-bold text-2xl">You applied in {appliedJobs.length} jobs</h1>

      <div className="flex justify-center py-3">
        <details className="dropdown">
          <summary className="m-1 btn">Filter By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleDisplayJob('all')}><a>All</a></li>
            <li onClick={() => handleDisplayJob('remote')}><a>Remote</a></li>
            <li onClick={() => handleDisplayJob('onsite')}><a>Onsite</a></li>
          </ul>
        </details>
      </div>

      <div className="w-[80%] mx-auto grid gap-5 grid-cols-1 py-5">
        {
          displayJob.map(job => <Card key={job.id} job={job} />)
        }
      </div>
    </div>
  )
}

export default AppliedJobs