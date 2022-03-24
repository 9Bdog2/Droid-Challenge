import { Card } from "react-bootstrap";
import { BiExitFullscreen } from "react-icons/bi";

const BookDetail = ({ book, setFocusedItem }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-3 col-lg-3 col-xl-3  ">
          <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src={book.image} />
            <Card.Body>
              <Card.Title className="text">{book.title}</Card.Title>
              <Card.Text className="text">{book.subtitle}</Card.Text>
            </Card.Body>
            <button onClick={(e) => setFocusedItem(false)}>
              <BiExitFullscreen />
            </button>
            <button>Add To Cart</button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
