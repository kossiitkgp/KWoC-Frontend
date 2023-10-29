import { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TestimonialCard from "./TestimonialCard";

export default class Testimonials extends Component {
    render() {
        return (
            <div className="m-auto w-[90%] bg-black/50 backdrop-blur-lg border border-[#FFFFFF]/[0.16]">
                <div className="w-[90%] sm:w-[90%] md:w-[80%] lg:w-[60%] m-auto pt-16 sm:p-32">
                    <h1 className="text-zinc-300 text-center mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-7xl">What Develepors think about us</h1>
                    <Carousel
                        showArrows={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        showStatus={false}
                        showIndicators={false}
                        autoPlay={true}
                        interval={2000}
                    >
                        <TestimonialCard />
                        <TestimonialCard />
                        <TestimonialCard />
                    </Carousel>
                    <div className='sm:w-1/5 m-auto py-8 text-center text-zinc-400 font-bold text-lg'>
                        <a href="#" className="hover:text-zinc-300">
                            Know More
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}