import React, { Component } from 'react'
import Layout from './layout'
import ProductItem from '../components/productItem'
import Row from '../components/row'

class MainPage extends Component {

  render() {
    return (
    <Layout>
      <h3> Tarjoustuotteet </h3>
      <Row>
        <ProductItem name="D-D Farkut" oldPrice="12.00€" price="10.90€" img="m_farkut_1.jpg" manufacturer="SOHO" />
        <ProductItem name="D-D Farkut" oldPrice="12.00€" price="10.90€" img="m_farkut_1.jpg" manufacturer="SOHO" />
        <ProductItem name="D-D Farkut" oldPrice="12.00€" price="10.90€" img="m_farkut_1.jpg" manufacturer="SOHO" />
        <ProductItem name="D-D Farkut" oldPrice="12.00€" price="10.90€" img="m_farkut_1.jpg" manufacturer="SOHO" />
        <ProductItem name="D-D Farkut" oldPrice="12.00€" price="10.90€" img="m_farkut_1.jpg" manufacturer="SOHO" />
        <ProductItem name="D-D Farkut" oldPrice="12.00€" price="10.90€" img="m_farkut_1.jpg" manufacturer="SOHO" />
        <ProductItem name="D-D Farkut" oldPrice="12.00€" price="10.90€" img="m_farkut_1.jpg" manufacturer="SOHO" />
      </Row>
    </Layout>
    );
  }
}

export default MainPage;
