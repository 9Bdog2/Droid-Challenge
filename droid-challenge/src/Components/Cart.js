import { BiArchiveOut } from "react-icons/bi";

const Cart = () => {
  return (
    <div className="container cart">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12  justify-content-center">
          <BiArchiveOut /> Contact
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Null auctor,
          urna eu tempor congue, nisi nisi efficitur nisi, eget efficitur nisl
          nisi eget nisl. Pellentesque euismod, urna eu tempor congue, nisi nisi
          efficitur nisi, eget efficitur nisl nisi eget nisl.
        </p>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12  justify-content-center">
          Cart
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
