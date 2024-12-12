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
  {
    title: "Noticias 4",
    description:
      "Ejemplo adicional de una noticia para probar múltiples vistas.",
    image:
      "https://cdn.prod.website-files.com/65de4c6f8dc17dc010f8ac55/65de4e8fa9dea47849bfe182_654d5b61a2e2c9c8d6cdeae7_5f57c46384cca65e79589acf_students1.jpeg",
  },
  {
    title: "Noticias 5",
    description:
      "Ejemplo adicional de una noticia para probar múltiples vistas.",
    image:
      "https://cdn.prod.website-files.com/65de4c6f8dc17dc010f8ac55/65de4e8fa9dea47849bfe182_654d5b61a2e2c9c8d6cdeae7_5f57c46384cca65e79589acf_students1.jpeg",
  },
];

export function Noticias() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-gray-300">
      <div className="container mx-auto flex flex-col items-center justify-center px-6">
        {/* Título */}
        <h4 className="text-4xl md:text-6xl font-extrabold mb-3 text-green-500 text-center">
          Noticias
        </h4>
        <p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mb-8">
          Entérate de lo nuevo.
        </p>

        {/* Carrusel de noticias */}
        <div className="w-full flex items-center justify-center flex-col h-[550px] bg-gradient-to-b from-stone-200 to-stone-300 rounded-md shadow-lg">
          <Swiper
            breakpoints={{
              768: {
                slidesPerView: 1.2,
                spaceBetween: 0,
                centeredSlides: true
              },
              1024: {
                slidesPerView: 1.4,
                spaceBetween: 0,
                centeredSlidesBounds: true

              },
              1280: {
                slidesPerView: 2,
                spaceBetween: 0,
                centeredSlidesBounds: true
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="max-w-full w-full mySwiper"
          >
            {news.map((item) => (
              <SwiperSlide
                key={item.title}
                className="flex justify-center items-center"
              >
                <div className="flex flex-col gap-6 mb-20 group relative shadow-2xl text-white rounded-xl px-6 py-8 h-[350px] w-[550px] lg:h-[400px] lg:w-[600px] overflow-hidden cursor-pointer">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50 duration-150" />
                  <div className="relative flex flex-col gap-3 text-balance">
                    <h1 className="text-xl lg:text-2xl font-bold">{item.title} </h1>
                    <p className="lg:text-[18px] text-sm leading-6">{item.description} </p>
                  </div>
                  <div className="absolute group-hover:text-green-600 flex gap-3 text-center group-hover:px-5 px-4 py-2 rounded-md items-center bottom-5 left-5 w-[50%] h-[35px] border-2 border-white bg-black/30 duration-150 font-bold">
                    <span>Ver Mas</span>
                    <ArrowUpRight className="group-hover:rotate-45 duration-150" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
