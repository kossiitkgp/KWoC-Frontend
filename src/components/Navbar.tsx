import kwoc_logo from '../assets/kwoc_logo.png'

const Nav = () => {
    let Links =[
        {name:"HOME",link:"/"},
        {name:"STUDENT",link:"/"},
        {name:"MENTOR",link:"/"},
        {name:"ADMIN",link:"/"},
        {name:"ABOUT",link:"/"},
        {name:"CONTACT",link:"/"},
    ];
    return (
        <>
        <div className='fixed inset-x-0 top-4 z-50 w-full'>
            <div className='flex shadow-md items-center justify-between max-w-7xl gap-4 mx-auto border border-[#FFFFFF]/[0.16] px-4 py-2 rounded-lg w-[95%] inset-x-0 backdrop-blur-md z-50'>
            <div className='font-bold  text-2xl cursor-pointor flex items-center font-Poppins text-white'>
                <span className='mr-1'>
                    <img className='h-10 w-10' src={kwoc_logo} alt='kwoc-logo'></img>
                </span>
                KHARAGPUR WINTER OF CODE
            </div>
            <ul className='flex flex-row items-center'>
                {
                    Links.map((Link)=>(
                        <li key={Link.name} className='ml-8'>
                            <a href={Link.link} className='font-Poppins text-white hover:text-gray-400 duration-500'>{Link.name}</a>
                        </li>
                    ))
                }
            </ul>
            </div>
        </div>
        </>
    )
}

export default Nav