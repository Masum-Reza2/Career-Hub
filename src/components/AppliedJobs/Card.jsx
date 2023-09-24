const Card = ({ job }) => {
    // console.log(job)
    let {job_title} = job
    return (
        <div className="text-center">
            <h1>{job_title}</h1>
        </div>
    )
}

export default Card