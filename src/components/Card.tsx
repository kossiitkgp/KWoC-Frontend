export default function Card(props: any){
    return (
        <div>
            <h1 className="text-zinc-300 text-center mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl mt-16 lg:text-5xl">{props.header}</h1>
            <p className="text-zinc-400 text-left mb-6 text-lg font-normal lg:text-2xl sm:px-16 xl:px-10 mt-10">{props.content}</p>
            <p className="text-zinc-400 text-left mb-6 text-lg font-normal lg:text-2xl sm:px-16 xl:px-10 mt-10">{props.secondary}</p>
        </div>
    );
}