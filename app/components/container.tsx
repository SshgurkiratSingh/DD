'use client';
interface ContainerProps {
    children: React.ReactNode;
}
const Container:React.FC<ContainerProps >= ({children}) => {
    
    return ( <div className="max-w-[2520px] mx-auto px-5 xl:px-20 md:px-10 sm:px-5 px-4
    ">{children}</div> );
}
 
export default Container;