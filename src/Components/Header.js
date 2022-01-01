import React, { Component } from "react";

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#experience">
                Experiences
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#skill">
                Skills
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#education">
                Education
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#certification">
                Certifications
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#course">
                Courses
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#award">
                Awards
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#publication">
                Publications
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}.</h1>
            <h3>{description}.</h3>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
