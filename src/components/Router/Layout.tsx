import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";


function Layout(){
    return(
        <>
            <header>
                <NavBar/>
            </header>
            <main>
                <Outlet/>
            </main>
        </>


    )
}

export default Layout