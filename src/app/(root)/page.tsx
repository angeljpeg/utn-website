export default function Page() {
  return (
    <>
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-green-500 min-h-screen flex flex-col md:flex-row justify-between items-center p-8 md:pl-36">
        <div className="max-w-full md:max-w-3xl flex flex-col gap-y-6 sm:gap-y-8 text-center md:text-left pt-14">
          <h1 className="text-white leading-snug sm:leading-tight text-balance">
            Tu futuro comienza en UTN
          </h1>
          <span className="text-base sm:text-lg md:text-xl text-white/80">
            Aquí, tu educación está diseñada para brindarte las habilidades y
            conocimientos que te llevarán a alcanzar el éxito.
          </span>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="flex items-center justify-center gap-3 text-sm sm:text-base py-3 sm:py-4 px-6 sm:px-8 bg-orange-400 rounded-full hover:bg-orange-500 transition duration-300">
              Modelo Educativo {/* FUTURO ICONO */}
            </button>
            <button className="text-sm sm:text-base py-3 sm:py-4 px-6 sm:px-8 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-green-500 transition duration-300">
              Conoce más
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
