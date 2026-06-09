import Btn from "@/components/Btn/Btn";

const Map = () => {
  return (
    <div className="hidden h-106 flex-col items-start rounded-2xl bg-white px-5 py-4 shadow-2xl sm:flex lg:hidden xl:flex">
      <img
        src="/images/pictures/pages/home/reserve-your-table-section/map.png"
        alt="map"
        loading="lazy"
      />
      <Btn
        svgSrc="/images/icons/icons.svg#arrow-medium"
        className="mt-6 w-full"
      >
        شروع مسیر به آوان
      </Btn>
    </div>
  );
};

export default Map;
