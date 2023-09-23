import { Outlet } from "react-router-dom"

const Root = () => {
    return (
        <>
            this is the root file
            <div className='min-h-screen'>
                <Outlet />
            </div>
            footer 
        </>
    )
}

export default Root