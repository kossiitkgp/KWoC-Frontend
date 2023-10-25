
function TimeLineCard(props: { date: string, info: string, right: boolean}) {
    return (
        <div className="text-zinc-100 text-center backdrop-blur-sm bg-white/10 mx-auto mb-10 lg:w-1/6 md:w-full sm:w-full p-4 rounded-[10px]">
            <h1 className="mb-1 font-extrabold leading-none tracking-tight text-3xl mt-1 sm:px-16 xl:px-10">{props.date}</h1>
            <p className="text-base font-bold sm:px-16 xl:px-10 mt-5">{props.info}</p>
        </div>
    );
}

export default TimeLineCard;