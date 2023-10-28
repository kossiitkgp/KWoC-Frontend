import { useState, MouseEvent, useCallback } from 'react';


export default function Card(props: any) {

    function throttle<T extends (...args: any[]) => any>(
        func: T,
        delay: number
    ): (...args: Parameters<T>) => void {
        let lastCall = 0;
        return (...args: Parameters<T>) => {
            const now = new Date().getTime();
            if (now - lastCall < delay) {
                return;
            }
            lastCall = now;
            return func(...args);
        };
    }

    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const onMouseMove = useCallback(
        throttle((e: MouseEvent<HTMLDivElement>) => {
            const card = e.currentTarget;
            const box = card.getBoundingClientRect();
            const x = e.clientX - box.left;
            const y = e.clientY - box.top;
            const centerX = box.width / 2;
            const centerY = box.height / 2;
            const rotateX = (y - centerY) / 7;
            const rotateY = (centerX - x) / 7;

            setRotate({ x: rotateX, y: rotateY });
        }, 100),
        []
    );

    const onMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
    };

    return (
        <div className="text-zinc-100 text-center bg-black/50 mx-auto mb-10 lg:w-1/4 sm:w-3/4 p-8 border border-[#FFFFFF]/[0.16] rounded-[10px] hover:cursor-pointer"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave} style={{
                transform: `perspective(1000px) rotateX(${rotate.x / 3}deg) rotateY(${rotate.y / 3}deg) scale3d(1, 1, 1)`,
                transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
            }}
        >
            <h1 className="mb-4 font-extrabold leading-none tracking-tight text-3xl sm:text-5xl mt-16 sm:px-16 xl:px-10">{props.header}</h1>
            <p className="line-clamp-5 md:line-clamp-none text-[15px] sm:text-base font-extrabold md:px-16 xl:px-10 mt-10">{props.content} <br /> {props.secondary}</p>
        </div>
    );
}