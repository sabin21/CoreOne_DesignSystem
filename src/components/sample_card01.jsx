import React from 'react';

import Card from 'react-bootstrap/lib/Card'
import CardColumns from 'react-bootstrap/lib/CardColumns'

class CardColumnSample extends React.Component {
      
    render() {
  
      return (
        <CardColumns>
            <Card>
                <Card.Img variant="top" src={require('../img/photo_sample/480/01.jpg')} />
                <Card.Body>
                <Card.Title>Card title that wraps to a new line</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    This is a longer card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="p-3">
                <blockquote className="blockquote mb-0 card-body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                    erat a ante.
                </p>
                <footer className="blockquote-footer">
                    <small className="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                    </small>
                </footer>
                </blockquote>
            </Card>
            <Card>
                <Card.Img variant="top" src={require('../img/photo_sample/480/02.jpg')} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card bg="primary" text="white" className="text-center p-3">
                <blockquote className="blockquote mb-0 card-body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                    erat a ante.
                </p>
                <footer className="blockquote-footer">
                    <small className="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                    </small>
                </footer>
                </blockquote>
            </Card>
            <Card className="text-center">
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                <Card.Text>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img  src={require('../img/photo_sample/480/03.jpg')} />
            </Card>
            <Card className="text-right">
                <blockquote className="blockquote mb-0 card-body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                    erat a ante.
                </p>
                <footer className="blockquote-footer">
                    <small className="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                    </small>
                </footer>
                </blockquote>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                <Card.Text>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
                </Card.Body>
            </Card>
            </CardColumns>
      );
    }
  }

  export class CardSample01 extends React.Component {
    render() {
      return (
        <div className="page-wrap">
            <div className="content-wrap">
                <div className="system-header">
                    <div className="container">
                        <h1 className="system-chapter-title">Cards <span>-01</span></h1>
                        <p>React bootstrap Cards 및 기타 Cards 샘플</p>
                    </div>
                </div>
                <div className="container">
                    <h4 className="system-chapter-subtitle">React Bootstrap <span>- Cards Columns</span></h4>
                    <div className="row">
                        <div className="col-12">
                          <CardColumnSample />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
      );
    }
  }
export default CardSample01;
