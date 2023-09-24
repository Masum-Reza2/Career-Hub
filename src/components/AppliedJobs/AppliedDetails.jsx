import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'

const AppliedDetails = () => {
    const navigate = useNavigate()
    const allJobs = useLoaderData()
    const jobId = useParams().detaildId
    const [details, setDatails] = useState([])

    const { logo, job_description, job_responsibility } = details


    useEffect(() => {
        const reqId = allJobs.find(job => job.id === parseFloat(jobId))
        setDatails(reqId)
    }, [])

    return (
        <div className='py-5 space-y-3'>

            <div className='py-5 w-[50%] mx-auto border shadow-md shadow-gray-500 px-5'>
                <div className='flex flex-col items-center justify-center space-y-5'>
                    <img src={logo} alt="" />
                    <p>{job_description}</p>
                    <p>{job_responsibility}</p>
                </div>
            </div>

            <div className='text-center'>
                <button className='border px-3 py-1 shadow-md shadow-gray-500 rounded-sm' onClick={() => navigate(-1)}>Go Back</button>
            </div>
        </div>
    )
}

export default AppliedDetails
