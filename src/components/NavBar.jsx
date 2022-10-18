import { NavLink } from "react-router-dom";
import { pizzaContext } from "../context/PizzasProvider";
import { useContext } from "react";

export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "disabled");
  const { detail } = useContext(pizzaContext);

  return (
    <div className="nav">
      <NavLink className={setActiveClass} end to="/">
      🍕 Pizzería Mamma Mía!
      </NavLink>

      <NavLink className={setActiveClass} to="/ShoppingCart">
      🛒 {detail
                    .map((item) => item.price * item.amount)
                    .reduce((prev, curr) => prev + curr, 0)
                    .toLocaleString('de-DE')}
      </NavLink>
    </div>
  );
}