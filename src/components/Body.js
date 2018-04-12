import React from "react";

class Body extends React.Component {
  constructor(props){
    super(props);
  }

    render() {
        return (

        <div>
          <section id="home_introduction" styles="background-image: url(/wp-content/themes/name-a-star/images/milky-way-2k_mini.jpg);">
            <div className="wrapper">
              <h1 className="white center-text">Name A Star For Someone Special</h1>
              <div className="center-text grey"><p><strong>Give a unique gift that will last a lifetime when you buy a <span styles="color: #ffffff;"><a styles="color: #ffffff;" href="http://nameastar.wpengine.com/buy-a-star/star-naming-service-packages/">Name a Star Gift Package</a></span> for that someone special from the original star naming service.</strong></p>
  <p><strong>Buying a star allows you to give the perfect gift for any occasion, one that will be remembered with each glance at the stars. </strong></p>
  <h5> </h5></div>
              <div className="row product-cta">
                <div className="row cta-container">
                  <div className="product-incentive">
                    <a href="https://www.nameastar.com/product/name-a-star-instant-certificate/"><img src="https://www.nameastar.com/wp-content/uploads/2015/04/Sample-Certificate-1.jpg" /></a>
                    <p>Print your certificate immediately after placing your order!</p>
                    <button className="button primary medium center-object" href="https://www.nameastar.com/product/name-a-star-instant-certificate/">Instant Certificate</button>
                  </div>
                  <div className="product-incentive">
                    <a href="https://www.nameastar.com/buy-a-star/"><img src="https://www.nameastar.com/wp-content/uploads/2015/04/deluxe.jpg" /></a>
                    <p>Click here for packages and prices on all of our products!</p>
                    <button className="button primary medium center-object" onClick={this.showAll}>View Star Packages</button>
                  </div>
                </div>
              </div>
            </div>
          </section>,

          <section id="home_best_sellers" className="white-background">
            <section className="wrapper">
              <h2 className="bright-blue center-text">Name a Star Online Best Sellers</h2>
              <ul className="row best_selling_products">
                    <li className="column col-4 med-12">
                      <div className="best_seller grey-background">

                        <div className="image_container">
                          <a href="https://www.nameastar.com/product/deluxe-framed-memorial-package/">
                            <img width="180" height="180" src="//www.nameastar.com/wp-content/uploads/2015/11/NAS-Product-Photos-2-2EDIT-WEB-180x180.jpg" className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="Image of the Deluxe Memorial Star Framed Certificate Package" srcSet="//www.nameastar.com/wp-content/uploads/2015/11/NAS-Product-Photos-2-2EDIT-WEB-180x180.jpg 180w, //www.nameastar.com/wp-content/uploads/2015/11/NAS-Product-Photos-2-2EDIT-WEB-150x150.jpg 150w, //www.nameastar.com/wp-content/uploads/2015/11/NAS-Product-Photos-2-2EDIT-WEB-300x300.jpg 300w" sizes="(max-width: 180px) 100vw, 180px" />                        </a>
                        </div>

                        <a href="https://www.nameastar.com/product/deluxe-framed-memorial-package/"><h4 className="dark-blue">Deluxe Memorial Star Framed Certificate Package</h4></a>
                        <div className="price">
                          <span className="original" styles="color: #648855;font-weight: 700;">$69.95</span>                      </div>
                        <p>The Name a Star Deluxe Memorial Stars are dedicated in honor of your loved ones, and placed in the Polar region of the sky visible year round in the Northern Hemisphere.</p>
                        <a className="button primary medium full-width" href="https://www.nameastar.com/product/deluxe-framed-memorial-package/">Customize</a>
                      </div>
                    </li>


                    <li className="column col-4 med-12">
                      <div className="best_seller grey-background">

                        <div className="image_container">
                          <a href="https://www.nameastar.com/product/name-a-star-instant-certificate/">
                            <img width="180" height="180" src="//www.nameastar.com/wp-content/uploads/2015/04/Sample-Certificate-Wide-1-180x180.jpg" className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="Image of Instant Certificate" srcSet="//www.nameastar.com/wp-content/uploads/2015/04/Sample-Certificate-Wide-1-180x180.jpg 180w, //www.nameastar.com/wp-content/uploads/2015/04/Sample-Certificate-Wide-1-150x150.jpg 150w, //www.nameastar.com/wp-content/uploads/2015/04/Sample-Certificate-Wide-1-300x300.jpg 300w, //www.nameastar.com/wp-content/uploads/2015/04/Sample-Certificate-Wide-1-600x600.jpg 600w" sizes="(max-width: 180px) 100vw, 180px" />                        </a>
                        </div>

                        <a href="https://www.nameastar.com/product/name-a-star-instant-certificate/"><h4 className="dark-blue">Name a Star Instant Certificate</h4></a>
                        <div className="price">
                          <del><span className="original" styles="color:#77a464;" >$28.95 </span></del><span className="sale" styles="color: #648855;font-weight: 700;">$19.95</span>                      </div>
                        <p>The beautifully detailed Print-it-yourself Certificate is suitable for framing and can be given as a memorial or for any other occasion.</p>
                        <a className="button primary medium full-width" href="https://www.nameastar.com/product/name-a-star-instant-certificate/">Customize</a>
                      </div>
                    </li>


                    <li className="column col-4 med-12">
                      <div className="best_seller grey-background">

                        <div className="image_container">
                          <a href="https://www.nameastar.com/product/deluxe-kids-framed-package/">
                            <img width="180" height="180" src="//www.nameastar.com/wp-content/uploads/2015/04/NAS-Deluxe-Kids-Large-180x180.jpg" className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="Large image of the Deluxe Kids Package" srcSet="//www.nameastar.com/wp-content/uploads/2015/04/NAS-Deluxe-Kids-Large-180x180.jpg 180w, //www.nameastar.com/wp-content/uploads/2015/04/NAS-Deluxe-Kids-Large-150x150.jpg 150w, //www.nameastar.com/wp-content/uploads/2015/04/NAS-Deluxe-Kids-Large-300x300.jpg 300w, //www.nameastar.com/wp-content/uploads/2015/04/NAS-Deluxe-Kids-Large-600x600.jpg 600w" sizes="(max-width: 180px) 100vw, 180px" />                        </a>
                        </div>

                        <a href="https://www.nameastar.com/product/deluxe-kids-framed-package/"><h4 className="dark-blue">Deluxe Kid&#8217;s Framed Package with Star Projection Toy</h4></a>
                        <div className="price">
                          <del><span className="original" styles="color:#77a464;" >$99.95 </span></del><span className="sale" styles="color: #648855;font-weight: 700;">$84.95 - 99.95</span>                      </div>
                        <p>The Deluxe Name a Star Kid’s Package includes a standard bound portfolio, a second framed certificate, plus a children’s Twilight Companion.</p>
                        <a className="button primary medium full-width" href="https://www.nameastar.com/product/deluxe-kids-framed-package/">Customize</a>
                      </div>
                    </li>

              </ul>
              <a className="button primary large center-object" href="/buy-a-star/">View All</a>
            </section>
          </section>
        </div>
        )
    }
};

export {Body};
