import { useState, useEffect } from "react";
import { fetchTypes } from "../utility/workoutapi";

export default function WorkoutCreationInterface() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchTypes();
      setData(res);
    };
    fetchData();
  }, []);

  console.log(data);

  return <div>hi</div>;
}
