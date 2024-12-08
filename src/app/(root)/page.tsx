export default function Page() {
  return (
    <>
      <div className="text-7xl font-extrabold bg-green-500 min-h-screen flex justify-between items-center pl-36">
        <div className="max-w-3xl flex flex-col gap-y-8">
          <h1 className="text-white text-7xl leading-tight">
            Tu futuro comienza en UTN
          </h1>
          <span className="text-xl text-white opacity-80">
            Aquí, tu educación está diseñada para brindarte las habilidades y
            conocimientos que te llevarán a alcanzar el éxito.
          </span>
          <div className="flex gap-4">
            <button className="flex gap-3 text-sm py-4 px-8 bg-orange-400 rounded-full hover:bg-orange-500 transition duration-300">
              Modelo Educativo {/* FUTURO ICONO */}
            </button>
            <button className="text-sm py-4 px-8 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-green-500 transition duration-300">
              Conoce más
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
