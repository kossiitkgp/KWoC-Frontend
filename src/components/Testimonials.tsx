import { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TestimonialCard from "./TestimonialCard";

export default class Testimonials extends Component {
    render() {
        return (
            <div className="m-auto w-[90%] sm:w-[70%] md:w-[80%] lg:w-[50%]">
                <h1 className="text-zinc-300 text-center mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl mt-36 lg:text-8xl">What Develepors think about us</h1>
                <div className="w-full m-auto my-32 bg-black/50 sm:p-16">
                    <Carousel
                        showArrows={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        showStatus={false}
                        showIndicators={false}
                        autoPlay={true}
                        interval={2000}
                    >
                        {/* <div className="w-1/2 m-auto my-10 bg-white/10 p-8 rounded-lg">
                            <div className="w-1/2 m-auto">
                                <img src={profile_image}/>     
                            </div>
                            <h3 className="text-zinc-400 text-2xl my-4">Swaraj Biswal</h3>
                            <div className="px-4 py-2 m-auto bg-black/30 rounded-lg">
                                <a href="#" className="text-zinc-400 text-center">Blog</a>
                            </div>
                            <p className="text-zinc-400 text-1xl my-4">
                                It's freeing to be able to catch up on customized news and not be
                                distracted by a social media element on the same site.
                            </p>
                        </div> */}
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