import Header from "@/components/Header";
import ThemeLayout from "@/components/themes/supplier-theme";
import React, { ReactNode } from "react";

const Layout = ({children} : {children : ReactNode}) =>{
    return    <main className="root-container ">
        <ThemeLayout>
        <div className="mx-auto max-w-7xl">
            <Header/>
            <div className="m-20 pb-20 ">
                {children}
            </div>
        </div>
        </ThemeLayout>
        </main>
}


export default Layout