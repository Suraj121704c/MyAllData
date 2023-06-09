import Edit from "../component/Edit";
import { Routes, Route } from "react-router-dom";
import Todos from "../component/Todos";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Todos />} />
      <Route path="/:id" element={<Edit />} />
    </Routes>
  );
};

export default AllRoutes;
