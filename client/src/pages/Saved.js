// was Saved.js

import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import ViewBtn from "../components/ViewBtn";
import SaveBtn from "../components/SaveBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { SavedList, SavedListItem } from "../components/SavedList";
import { Input, TextArea, FormBtn } from "../components/Form";

class Detail extends Component {
  state = {
    book: {}
  };
  // Add code to get the book with an _id equal to the id in the route param
  // e.g. http://localhost:3000/books/:id
  // The book id for this route can be accessed using this.props.match.params.id
  componentDidMount() {
    const id = this.props.match.params.id;
    API.getBook(id).then(res => {
      this.setState({
        book: res.data
      });
    });
  }

  render() {
    return (
      <Container fluid>

<Row>
          <Col size='md'>
            <Jumbotron>
              <h1>(React) Google Books Search</h1>
              <h3>Search for and Save Books of Interest</h3>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size='md'>
            <form>
            <h3>Book Search</h3>
            <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <FormBtn
                disabled={!(this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </Col>
          </Row>
          <Row>
          <Col size='md'>
            <SavedList>
              <p>Saved Books</p>
              <SavedListItem />
            </SavedList>
          
          </Col>
          


        </Row>























        {/* <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.book.title} by {this.state.book.author}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>{this.state.book.synopsis}</p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row> */}
      </Container>
    );
  }
}

export default Detail;