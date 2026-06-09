import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Map from "./components/Map/Map";
import ReservationAvanCafe from "./components/ReservationAvanCafe/ReservationAvanCafe";
import ReserveYourTableForm from "./components/ReserveYourTableForm/ReserveYourTableForm";

const ReserveYourTableSection = () => {
  return (
    <section>
      <SectionTitle>میزتو رزرو کن!</SectionTitle>

      <div className="mt-6 flex-center flex-col gap-6 lg:flex-row">
        <ReserveYourTableForm />
        <div className="flex-center gap-6">
          <Map />
          <ReservationAvanCafe />
        </div>
      </div>
    </section>
  );
};

export default ReserveYourTableSection;
