import {Card } from 'react-bootstrap';


const BookDetail = ({ book }) => {
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-3 col-sm-3 col-lg-3 col-xl-3  ">
            <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={book.image} />
                <Card.Body>
                <Card.Title className="text">{book.title}</Card.Title>
                <Card.Text className="text">{book.subtitle}</Card.Text>
                </Card.Body>
            </Card>
            </div>
        </div>
        </div>
    );
    }

    export default BookDetail;