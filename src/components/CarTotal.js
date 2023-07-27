import { useSelector } from "react-redux";

function CarTotal() {
  const total = useSelector(({ cars: { searchTerm, data } }) =>
    data
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0)
  );
  return <div className="car-value">Total Cost: ${total}</div>;
}

export default CarTotal;
