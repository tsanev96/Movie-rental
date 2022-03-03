import { Route, Routes as RoutesWrapper } from "react-router-dom";
import { Customers } from "./Customers/Customers";
import { Login } from "./Login/Login";
import { Movies } from "./Movies/Movies";
import { Rentals } from "./Rentals/Rentals";

export const Routes = () => {
  return (
    <RoutesWrapper>
      <Route path="/rentals" element={<Rentals />} />
      <Route path="/login" element={<Login />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/" element={<Movies />} />
    </RoutesWrapper>
  );
};
