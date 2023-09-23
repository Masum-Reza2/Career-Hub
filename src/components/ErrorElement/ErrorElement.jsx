import { Link, useRouteError } from "react-router-dom"

const ErrorElement = () => {
    const error = useRouteError()
    // console.log(error)
    return (
        <div className='h-screen flex items-center justify-center flex-col'>
            <h1 className='text-red-500 font-bold text-2xl'>Opps something wrong</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <strong className='underline'>{error.data}</strong>

            <Link to={'/'}>
                <button className="border px-3 py-1 shadow-md shadow-black rounded-sm mt-2">Goto Home</button>
            </Link>
        </div>
    )
}

export default ErrorElement