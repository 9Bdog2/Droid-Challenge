import { Card, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

const BookListings = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/search/mongodb")
      .then((res) => res.json())
      .then((data) => setBooks(data.books));
    setLoading(false);
  }, []);

  return (
    <div className="container">
      <div className="row">
        {isLoading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          books.map((book, i) => (
            <div className="col-md-3 col-sm-3 col-lg-3 col-xl-3  ">
              <Card style={{ width: "15rem" }} key={i}>
                <Card.Img variant="top" src={book.image} />
                <Card.Body>
                  <Card.Title className="text">{book.title}</Card.Title>
                  <Card.Text className="text">{book.subtitle}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookListings;
