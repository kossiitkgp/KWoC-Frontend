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
        <div className='shadow-md w-full fixed to-0 left-0'>
            <div className='flex items-center justify-between bg-white py-1 px-7'>
            <div className='font-bold text-2xl cursor-pointor flex items-center font-[Poppins] text-gray-800'>
                <span className='text-3xl text-zinc-950 mr-1'>
                    <img className='h-10 w-10' src={kwoc_logo} alt='kwoc-logo'></img>
                </span>
                KWoC
                </div>
            <ul className='flex flex-row items-center'>
                {
                    Links.map((Link)=>(
                        <li key={Link.name} className='ml-8 text-xl'>
                            <a href={Link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{Link.name}</a>
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