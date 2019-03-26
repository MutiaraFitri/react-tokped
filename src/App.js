import React, { Component } from 'react';
import pulsa from './smartphone.png';
import './App.css';
import Product from './Product';
import './bootstrap.css';
import Banner from './Banner';
import Promo from './Promo';
import Official from './Official';

class App extends Component {
  render() {
    return (
      <div>
      <div>
      <div className="text-center">
        <br></br>
        <h1>React Store</h1>
        <hr></hr><br></br><br></br>
      </div>
      <div className="content-1 container">
        <div className="row">
          <div className="col-8">
              <h5>Promo</h5>
              <Banner sumber="https://ecs7.tokopedia.net/img/cache/1242/banner/2019/2/15/25618007/25618007_b75a6e52-6102-4b42-9c3e-8967f50be04e.jpg"/>
          </div>
          <div className="col-3">
          <h5>Pembayaran & Top Up</h5>
            <div className="Promo row">
              <Promo gambar={pulsa} tag="Pulsa"/>
              <Promo gambar={pulsa} tag="Pecel"/>
              <Promo gambar={pulsa} tag="Sayur"/>
            </div><br></br>
            <div className="Promo row">
              <Promo gambar={pulsa} tag="lele"/>
              <Promo gambar={pulsa} tag="Teri"/>
              <Promo gambar={pulsa} tag="Ikan"/>
            </div>
          </div>
        </div>
      </div>
      {/* ini untuk tampilan Hotlist yang ada di atur di Products */}
      <div className="container">
      <h5>Hot List</h5>
        <div className="App" className="row">
          <Product judul="Core" harga="0"/>
          <Product judul="Component" harga="100.000"/>
          <Product judul="Class" harga="99.999"/>
          <Product judul="CSS" harga="75.000"/>
        </div>
      </div>
      </div>
      
      {/* ini untuk membuat official store */}
      <div className="official container">
        <h5>Official Store</h5>
        <div className="Official" className="row">
          <div className="col-md-4">
            <img src="https://ecs7.tokopedia.net/img/official_store/os-banner-optimaze.jpg"/>
          </div>
          <div className="col-md-8 row">
              <Official gambarkecil="https://ecs7.tokopedia.net/img/cache/244/attachment/2017/8/28/20132839/20132839_3e527c78-3176-4e5f-9d17-f67783ebcf06.png"/>
              <Official gambarkecil="https://ecs7.tokopedia.net/img/cache/244/attachment/2018/2/5/20132839/20132839_c8174f54-16cd-4030-8aa4-38da24769de2.png"/>
              <Official gambarkecil="https://ecs7.tokopedia.net/img/cache/244/attachment/2017/8/28/20132839/20132839_3e527c78-3176-4e5f-9d17-f67783ebcf06.png"/>
              <Official gambarkecil="https://ecs7.tokopedia.net/img/cache/244/attachment/2018/2/5/20132839/20132839_c8174f54-16cd-4030-8aa4-38da24769de2.png"/>
              <Official gambarkecil="https://ecs7.tokopedia.net/img/cache/244/attachment/2017/8/28/20132839/20132839_3e527c78-3176-4e5f-9d17-f67783ebcf06.png"/>
              <Official gambarkecil="https://ecs7.tokopedia.net/img/cache/244/attachment/2018/2/5/20132839/20132839_c8174f54-16cd-4030-8aa4-38da24769de2.png"/>
              <Official gambarkecil="https://ecs7.tokopedia.net/img/cache/244/attachment/2017/8/28/20132839/20132839_3e527c78-3176-4e5f-9d17-f67783ebcf06.png"/>
              <Official gambarkecil="https://ecs7.tokopedia.net/img/cache/244/attachment/2018/2/5/20132839/20132839_c8174f54-16cd-4030-8aa4-38da24769de2.png"/>
       
       
          </div>
        </div>
      </div>
      </div>
    );
  }
}


export default App;
