import { Card } from "react-bootstrap";
import { BiExitFullscreen } from "react-icons/bi";

const BookDetail = ({ book, setFocusedItem }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 d-flex justify-content-center ">
          <Card style={{ width: "40vw" }}>
            <Card.Img variant="top" src={book.image} />
            <Card.Body>
              <div className="d-flex ">
                <div>
                  <Card.Title className="text">{book.title}</Card.Title>
                  <Card.Text className="text">{book.subtitle}</Card.Text>
                </div>
                <div className="ml-auto">
                  <button onClick={(e) => setFocusedItem(false)}>
                    <BiExitFullscreen />
                  </button>
                  <button>Add To Cart</button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
