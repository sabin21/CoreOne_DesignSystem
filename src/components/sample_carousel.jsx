import React from 'react';

import Carousel from 'react-bootstrap/lib/Carousel'

class ControlledCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../img/photo_sample/1280x720/01.jpg')}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../img/photo_sample/1280x720/02.jpg')}
              alt="Third slide"
            />
  
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../img/photo_sample/1280x720/03.jpg')}
              alt="Third slide"
            />
  
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }

export class CarouselSample extends React.Component {
    render() {
      return (
        <div className="page-wrap">
            <div className="content-wrap">
                <div className="system-header">
                    <div className="container">
                        <h1 className="system-chapter-title">Carousel</h1>
                        <p>React bootstrap Carousel 및 기타 Carousel 샘플</p>
                    </div>
                </div>
                <div className="container">
                    <h4 className="system-chapter-subtitle">React Bootstrap <span>- Controlled Carousel</span></h4>
                    <div className="row">
                        <div className="col-12">
                          <ControlledCarousel />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
      );
    }
  }

export default CarouselSample;
