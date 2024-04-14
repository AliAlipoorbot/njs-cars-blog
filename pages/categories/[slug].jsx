import CarsList from "@/components/templates/CarsList";
import { useRouter } from "next/router";
import carData from "../../data/carsData";

function Categories() {
  const router = useRouter();
  const slug = router.query.slug;

  if (slug === "sport") {
    const sportCar = carData.filter((car) => car.category === "sport");
    return <CarsList data={sportCar} />;
  } else if (slug === "sedan") {
    const sedanCar = carData.filter((car) => car.category === "sedan");
    return <CarsList data={sedanCar} />;
  } else if (slug === "hatchback") {
    const hatchbackCar = carData.filter((car) => car.category === "hatchback");
    return <CarsList data={hatchbackCar} />;
  } else if (slug === "suv") {
    const suvCar = carData.filter((car) => car.category === "suv");
    return <CarsList data={suvCar} />;
  } else {
    return <p style={{ textAlign: "center" }}>this route is not defined</p>;
  }
}

export default Categories;
