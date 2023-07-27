import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();
  const { cars, name } = useSelector(
    ({ cars: { data, searchTerm }, form: { name } }) => {
      const matchedCars = data.filter(({ name }) =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return {
        cars: matchedCars,
        name,
      };
    }
  );
  const handleDeleteCar = (car) => {
    dispatch(removeCar(car.id));
  };
  const renderedCars = cars.map((car) => {
    const isBold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div key={car.id} className={`panel ${isBold && "bold"}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleDeleteCar(car)}
        >
          Delete
        </button>
      </div>
    );
  });
  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
