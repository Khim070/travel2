import * as React from "react";
import image1 from "../../assets/1.jpg";

function Navigation() {
    return (
        <nav className="flex gap-5 self-stretch my-auto max-md:flex-wrap max-md:max-w-full">
            <a href="#home" className="grow">
                Home
            </a>
            <a href="#review" className="flex-auto">
                Review
            </a>
            <a href="#about" className="flex-auto">
                About
            </a>
            <a href="#contact" className="flex-auto">
                Contact Us
            </a>
        </nav>
    );
}

export default function HeadScreen() {
    return (
        <div className="flex overflow-hidden relative flex-col items-start px-20 pt-12 pb-20 text-9xl font-bold leading-[207px] min-h-[1035px] max-md:px-5 max-md:text-4xl">
            <img
                loading="lazy"
                src={image1}
                // src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6cd67a544fe616e1e7a177bd39b6ef533bba8c988fc4759b3c319381618fa01?apiKey=64f1e1c68e014e70a3672f59293f1313&"
                alt=""
                className="object-cover absolute inset-0 size-full"
            />
            {/* <header class="flex relative gap-5 items-center self-center w-full text-3xl text-white max-w-[1672px] max-md:flex-wrap max-md:pr-5 max-md:max-w-full justify-center"> */}
            {/* <header class="grid grid-cols-1 place-items-center relative gap-5 items-center self-center w-full text-3xl text-white max-w-[1672px] max-md:flex-wrap max-md:pr-5 max-md:max-w-full"></header> */}
            {/* <header className="flex relative gap-5 items-center self-center w-full text-3xl text-white max-w-[1672px] max-md:flex-wrap max-md:pr-5 max-md:max-w-full ">
                <h1 className="flex-auto text-left self-stretch my-auto">Travel</h1>
                <Navigation />
                <a
                    href="#signin"
                    className="justify-center text-right self-stretch px-7 py-5 text-3xl bg-white rounded-[30px] text-stone-900 max-md:px-5"
                >
                    Sign In
                </a>
            </header> */}
            <header class="flex relative gap-5 items-center justify-between w-full text-3xl text-white max-w-[1672px] max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <span class="text-left">Travel</span>
                <Navigation />
                <a href="#signin" class="text-right self-stretch px-5 py-3 text-2xl bg-white rounded-[30px] text-stone-900 max-md:px-5">Sign In</a>
            </header>
            <section className="relative text-left mt-96 text-white max-md:mt-10 max-md:max-w-full max-md:text-3xl">
                <h2>Visit</h2>
                <h2>Cambodia</h2>
            </section>
            <section className="relative mt-7 text-zinc-50 max-md:max-w-full max-md:text-4xl">
            </section>
        </div>
    );
}