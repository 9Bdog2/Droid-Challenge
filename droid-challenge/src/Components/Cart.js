import { BiArchiveOut } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Row } from "react-bootstrap";

const Cart = () => {
  return (
    <div className="container-fluid cart">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 ">
          <div className="justify-content-start d-flex mb-2">
            <p className="pt-2 ">
              <span className="mr-2 ">
                <BiArchiveOut />
              </span>
              <span>Contact</span>
            </p>
          </div>
          <div className="justify-content-start d-flex mb-2">
            <p className=" cart_contact_content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Null
              auctor.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 mb-2 ">
          <div className="justify-content-start d-flex mb-2">
            <span className="mr-2 ">
              <AiOutlineShoppingCart />
            </span>
            <span>Cart</span>
          </div>
          <div className="cart_area  justify-content-center">Cart is Empty</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

{
  /* <div>
      <h2>Cart</h2>
      <p>You have {props.cart.length} items in your cart.</p>
      <ul>
        {props.cart.map((item, index) => {
          return (
            <li key={index}>
              {item.name} - {item.price}
            </li>
          );
        })}
      </ul>
    </div> */
}
