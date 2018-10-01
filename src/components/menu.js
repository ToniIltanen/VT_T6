import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class Menu extends Component {


  goToLink = (link) => {
    browserHistory.push(link)
  }

  render() {
    return (
        <nav className="navbar sticky-top navbar-expand-md bg-dark navbar-dark opacity">
            <a className="navbar-brand" >TKI Webstore</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href={process.env.PUBLIC_URL + "/verkkokauppa"}>Etusivu</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href={process.env.PUBLIC_URL + "/verkkokauppa"} role="button" aria-haspopup="true" aria-expanded="false">Naiset</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" onClick={() => this.goToLink(process.env.PUBLIC_URL + "/verkkokauppa/64023f77-fbd7-44af-8e03-c2595f650258")}>Housut</a>
                        <a className="dropdown-item" onClick={() => this.goToLink(process.env.PUBLIC_URL + "/verkkokauppa/f299516d-0e2c-4c15-8a09-92cbe4efd793")}>Paidat</a>
                        <a className="dropdown-item" onClick={() => this.goToLink(process.env.PUBLIC_URL + "/verkkokauppa/cf87deee-a868-4cc6-b696-22673406579f")}>Takit</a>
                        <a className="dropdown-item" onClick={() => this.goToLink(process.env.PUBLIC_URL + "/verkkokauppa/cf87deee-a868-4cc6-b696-22673406579f")}>Tarvikkeet</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href={process.env.PUBLIC_URL + "/verkkokauppa"} role="button" aria-haspopup="true" aria-expanded="false">Miehet</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" onClick={() => this.goToLink(process.env.PUBLIC_URL + "/verkkokauppa/5e442be8-d8d5-4f0b-a02d-1f8d390b7852")}>Housut</a>
                        <a className="dropdown-item" onClick={() => this.goToLink(process.env.PUBLIC_URL + "/verkkokauppa/82d7c3e2-0643-4625-a982-e640d6c3a82a")}>Paidat</a>
                        <a className="dropdown-item" onClick={() => this.goToLink(process.env.PUBLIC_URL + "/verkkokauppa/64023f77-fbd7-44af-8e03-c2595f650258")}>Takit</a>
                    </div>
                </li>
            </ul>
            </div>
        </nav>
    );
  }
}

export default Menu;
