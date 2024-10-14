import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
  return (
    <>

      <TransitionPage />
      <CircleImage />
      <AvatarServices />
      <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
        <div className="max-w-[450px]">
<br /><br /><br /><br />
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-9">Mis <span className="font-bold text-secondary"> servicios.</span></h1>
          <br /><p className="mb-5 text-x2 text-gray-300 md:mt-0 mt-3">
            Ofrezco servicios de desarrollo web frontend especializados, creando sitios web y aplicaciones atractivas, funcionales y personalizadas para cada cliente, utilizando las últimas tecnologías como HTML, CSS, JavaScript, React, Angular y Vue.js.
          </p>
          <a href="/contact"><button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button></a>
        </div>
        {/* SLIDER */}
        <div>
          <SliderServices />
        </div>
        <br />
      </div>
    </>
  );
}

export default ServicesPage;