const ReservationAvanCafe = () => {
  return (
    <div className="flex-center h-106 flex-col rounded-2xl bg-white px-5 py-4 shadow-[0_0_6px_rgba(0,0,0,0.1)]">
      <img
        src="/images/pictures/pages/home/reserve-your-table-section/reservation-avan-cafe.webp"
        alt="map"
        loading="lazy"
      />
      <div className="flex-justify-center flex-col items-start gap-2 divide-y divide-primary/20 *:py-2">
        <div className="w-full">
          <b>ساعت کاری:</b>
          <span> 8 صبح تا 12 شب</span>
        </div>
        <div className="w-full">
          <b>تلفن تماس:</b>
          <span>09911943412</span>
        </div>
        <div className="w-full">
          <b>مکان:</b>
          <span> تهران، صادقیه، خیابان ستار، پلاک 10</span>
        </div>
      </div>
    </div>
  );
};

export default ReservationAvanCafe;
