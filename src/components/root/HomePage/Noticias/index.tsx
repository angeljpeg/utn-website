"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, FreeMode } from "swiper/modules";
import { ArrowUpRight } from "lucide-react";

const news = [
  {
    title: "Noticias 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto fugiat, mollitia hic distinctio deserunt saepe, non aperiam, molestias molestiae maiores rerum quibusdam. Vitae, nemo. Nesciunt dolores aperiam sit sunt modi.",
    image:
      "https://cdn.prod.website-files.com/65de4c6f8dc17dc010f8ac55/65de4e8fa9dea47849bfe182_654d5b61a2e2c9c8d6cdeae7_5f57c46384cca65e79589acf_students1.jpeg",
    link: "https://tailwindcss.com/docs/functions-and-directives",
  },
  {
    title: "Noticias 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto fugiat, mollitia hic distinctio deserunt saepe, non aperiam, molestias molestiae maiores rerum quibusdam. Vitae, nemo. Nesciunt dolores aperiam sit sunt modi.",
    image:
      "https://cdn.prod.website-files.com/65de4c6f8dc17dc010f8ac55/65de4e8fa9dea47849bfe182_654d5b61a2e2c9c8d6cdeae7_5f57c46384cca65e79589acf_students1.jpeg",
  },
  {
    title: "Noticias 3",
    description:
      "Ejemplo adicional de una noticia para probar múltiples vistas.",
    image:
      "https://cdn.prod.website-files.com/65de4c6f8dc17dc010f8ac55/65de4e8fa9dea47849bfe182_654d5b61a2e2c9c8d6cdeae7_5f57c46384cca65e79589acf_students1.jpeg",
  },
];

interface propsCards {
  title: string;
  description: string;
  image: string;
  link: string | undefined;
}

const NewsCard = ({ title, description, image, link }: propsCards) => (
  <div className="relative shadow-lg rounded-xl overflow-hidden h-[400px] w-full max-w-[90%] md:max-w-[550px] lg:max-w-[600px] aspect-video cursor-pointer group mb-20">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-50 duration-200" />
    <div className="relative flex flex-col gap-3 p-6 text-white">
      <h1 className="text-xl lg:text-2xl font-bold">{title}</h1>
      <p className="lg:text-[18px] text-sm leading-6">{description}</p>
    </div>
    <a
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Leer más sobre ${title}`}
      className="absolute flex items-center justify-center gap-3 px-4 py-2 bottom-5 left-5 w-auto h-[40px] border border-white bg-black/40 text-white font-semibold rounded-md group-hover:bg-green-500 group-hover:text-white duration-200"
    >
      <span>Leer más</span>
      <ArrowUpRight className="group-hover:rotate-45 duration-200" />
    </a>
  </div>
);

export function Noticias() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-gray-300">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 sm:px-10 lg:px-20 max-w-screen-xl">
        <h4 className="text-4xl md:text-6xl font-extrabold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 tracking-tight">
          Noticias
        </h4>
        <p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mb-8">
          Entérate de lo nuevo.
        </p>

        <Swiper
          breakpoints={{
            640: { slidesPerView: 1.1, spaceBetween: 10 },
            768: { slidesPerView: 1.3, centeredSlides: true, spaceBetween: 15 },
            1024: {
              slidesPerView: 1.5,
              centeredSlides: true,
              spaceBetween: 20,
            },
            1280: { slidesPerView: 2, centeredSlides: true, spaceBetween: 30 },
          }}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="max-w-full w-full mySwiper"
        >
          {news.map((item) => (
            <SwiperSlide
              key={item.title}
              className="flex justify-center items-center"
            >
              <NewsCard
                title={item.title}
                description={item.description}
                image={item.image}
                link={item.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
