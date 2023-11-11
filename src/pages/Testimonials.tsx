import TestimonialCard from "../components/TestimonialPageCard";
import testimonialsData from "../data/testimonials.json";

function Testimonials() {
  return (
    <div className="text-center p-4 m-auto w-[95%] md:w-[70%] py-12">
      <div className="my-16">
        <p className="text-2xl mb-6">What past participants say</p>
        <div className="grid grid-cols-3 gap-3 p-4 ">
          {testimonialsData.testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
