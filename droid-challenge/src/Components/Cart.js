import { BiArchiveOut } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "react-use-cart";
import BookDetail from "./BookDetail";

const Cart = ({ book }) => {
  const { isEmpty, totalUniqueItems, totalItems, cartTotal, emptyCart } =
    useCart();

  /* console.log(cartTotal); */

  if (isEmpty)
    return (
      <div className="container-fluid cart ml-2">
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
            <div className="cart_area  justify-content-center">
              Cart is Empty
            </div>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className="container-fluid cart ml-2">
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
              <span>Cart ({totalUniqueItems})</span>
              {/* <span>total Item :({totalItems})</span> */}
            </div>
            <div className="cart_area  justify-content-center">
              <div className="row">
                <span>Total:${cartTotal}</span>
                <span>Price:{book.price}</span>
                <span>{book.title}</span>
              </div>
              <div className="row">
                <button
                  onClick={() => emptyCart()}
                  className="btn btn-danger ms-2"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cart;
