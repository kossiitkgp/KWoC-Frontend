import TESTIMONIALS from '../data/testimonials.json';

function Testimonials() {
  return (
    <div className="pt-28 px-20">
      <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">Testimonials</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {TESTIMONIALS.testimonials.map(
          ({imageLink, name, role, blogLink, quote}) => (
            <div className="h-full m-auto p-2">
              <div className="flex w-full items-center justify-center h-32">
                <img
                  src={imageLink}
                  alt={name}
                  className="rounded-full h-full"
                />
                <div className="ml-5">
                  <h3 className="text-zinc-400 text-2xl my-2">{name}</h3>
                  <p className="text-zinc-300 text-sm mb-4">{role}</p>

                  <a href={blogLink} target="_blank" rel="noopener noreferrer">
                    <div className="w-fit px-4 py-2 bg-white/20 rounded-lg hover:bg-white/10 hover:text-black hover:shadow-md transition-all duration-300 ease-in-out">
                      <p className="text-white text-center font-bold">Read Full Blog</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mx-auto mt-8 md:mb-8 md:flex justify-center items-center">
                <p className="text-center my-auto px-2 text-[15px] sm:text-xl italic font-medium text-zinc-100">
                  "{quote}"
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Testimonials;
