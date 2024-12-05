import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";


function Layout(){
    return(
        <>
            <header>
                <NavBar brandName="MyWebsite" navItems={["Home", "About", "Contact"]} />
            </header>
            <main>
                <Outlet/>
            </main>
        </>


    )
}

export default Layout