import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Footer from "./Pages/Footer/Footer";


function Layout(){
    return(
        <>
            <NavBar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default Layout