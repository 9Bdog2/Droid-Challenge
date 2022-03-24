import { Card, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

const BookListings = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/search/mongodb")
      .then((res) => res.json())
      .then((data) => setBooks(data.books))
      .then(console.log(books));
    setLoading(false);
  }, []);

  return (
    <div>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookListings;
