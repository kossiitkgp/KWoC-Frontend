export default function Card(props: any){
    return (
        <div className="backdrop-blur-sm bg-white/10 mx-auto mb-10 lg:w-1/4 md:w-full sm:w-full p-8 rounded-[20px]">
            <h1 className="text-zinc-300 text-center mb-4 font-extrabold leading-none tracking-tight text-5xl mt-16 sm:px-16 xl:px-10">{props.header}</h1>
            <p className="text-zinc-400 text-center text-base font-normal sm:px-16 xl:px-10 mt-10">{props.content}</p>
            <p className="text-zinc-400 text-center text-base font-normal sm:px-16 xl:px-10 mt-10">{props.secondary}</p>
        </div>
    );
}