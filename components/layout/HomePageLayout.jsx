import Footer from "../Footer";
import Navbar from "../Navbar";

export default function HomePageLayout({children}){
    return(
       <>
        <Navbar/>

<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"> 
{children}
</div>
<Footer/>
       </>
    )
}