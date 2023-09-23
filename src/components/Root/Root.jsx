import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

const Root = () => {
    return (
        <>
            <Header />
            <div className='min-h-[50vh]'>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Root