import { Outlet } from "react-router-dom";



function Layout() {
    return (
        <>
            <header>
                zefz
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout;