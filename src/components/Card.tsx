export default function Card(props: any) {
  return (
    <div className="text-zinc-100 text-center bg-black/50 backdrop-blur-sm mx-auto mb-10 lg:w-1/4 sm:w-3/4 px-4 py-16 border border-[#FFFFFF]/[0.16] rounded-[10px] hover:cursor-pointer">
      <h1 className="mb-4 font-extrabold leading-none tracking-tight text-3xl sm:text-4xl md:text-3xl lg:text-5xl sm:px-16 md:px-2 xl:px-10">
        {props.header}
      </h1>
      <p className="text-lg md:px-2 xl:px-10 mt-10">{props.content}</p>
    </div>
  );
}
