import TestimonialCard from "../components/TestimonialPageCard";
import testimonialsData from "../data/testimonials.json";

function Testimonials() {
  return (
    <div className="text-center pt-24 m-auto w-[95%] md:w-[70%]">
      <section className="px-16 my-8 mx-0">
        <h1 className="font-bold text-3xl sm:text-5xl mb-8 text-center">
          Testimonials
        </h1>
        <p className="text-xl font-semibold text-center">
          What past participants say
        </p>
      </section>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4 ">
        {testimonialsData.testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4 items-start">
        <div className="grid gap-3 place-items-start">
          {testimonialsData.testimonials.map(
            (testimonial, index) =>
              index % 3 == 1 && (
                <TestimonialCard key={index} testimonial={testimonial} />
              ),
          )}
        </div>
        <div className="grid gap-3 place-items-start">
          {testimonialsData.testimonials.map(
            (testimonial, index) =>
              index % 3 == 0 && (
                <TestimonialCard key={index} testimonial={testimonial} />
              ),
          )}
        </div>
        <div className="grid gap-3 place-items-start">
          {testimonialsData.testimonials.map(
            (testimonial, index) =>
              index % 3 == 2 && (
                <TestimonialCard key={index} testimonial={testimonial} />
              ),
          )}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
