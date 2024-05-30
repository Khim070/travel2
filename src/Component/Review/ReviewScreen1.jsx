import * as React from "react";
import image1 from "../../assets/1.jpg";

function DestinationCard({ number, title, description, bgColor }) {
    return (
        <>
            <div
                className={`justify-center text-5xl font-bold self-start px-8 py-5 mt-16 text-white whitespace-nowrap ${bgColor} rounded-[45px] max-md:px-5 max-md:mt-10 max-md:text-4xl`}
            >
                {number}
            </div>
            <h2 className="pr-52 mt-7 text-5xl max-md:max-w-full max-md:text-4xl">
                {title}
            </h2>
            <p className="mt-8 text-2xl leading-9 text-zinc-500 max-md:max-w-full">
                {description}
            </p>
        </>
    );
}

export default function ReviewScreen1() {
    const destinations = [
        {
            number: "01",
            title: "Angkor Wat",
            description:
                "Angkor Wat is a Hindu-Buddhist temple complex in Cambodia. Located on a site measuring 162.6 hectares",
            bgColor: "bg-indigo-500",
        },
        {
            number: "02",
            title: "Angkor Thom",
            description:
                "Angkor Thom alternatively Nokor Thom located in present-day Cambodia, was the last and most enduring capital city of the Khmer Empire.",
            bgColor: "bg-pink-400",
        },
        {
            number: "03",
            title: "Phnum Kulen",
            description:
                "Phnum Kulen is a mountain range and a part of Phnom Kulen National Park in Siem Reap Province, Cambodia.",
            bgColor: "bg-orange-300",
        },
    ];

    return (
        <main className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
            <section className="mt-32 w-full max-w-[1623px] max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <article className="flex text-left flex-col w-[59%] max-md:ml-0 max-md:w-full">
                        <h1 className="flex flex-col grow text-5xl font-bold text-black leading-[75px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                            <span className="pr-52 text-left text-5xl text-fuchsia-600 max-md:max-w-full">
                                Popularity
                            </span>
                            <span className="pr-52 mt-9 text-left text-6xl leading-[96px] max-md:max-w-full max-md:text-4xl max-md:leading-[66px]">
                                Most Popular <br />
                                Visit Destination
                            </span>
                        </h1>
                        {destinations.map((destination) => (
                            <DestinationCard key={destination.number} {...destination} />
                        ))}
                    </article>
                    <aside className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            src={image1}
                            alt="Scenic view of a popular destination"
                            className="self-stretch my-auto w-full aspect-[0.83] max-md:mt-10 max-md:max-w-full"
                        />
                    </aside>
                </div>
            </section>
        </main>
    );
}