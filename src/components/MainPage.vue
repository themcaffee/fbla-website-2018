<template>
  <div id="main-page">
    <div class="jumbotron my-0">
      <div class="container">
        <h1 class="display-3 header-text">Give Potential</h1>
        <p class="lead header-text">
          Everyone should have clothes. <br>
          Give yours to those who need them.
        </p>
        <div class="col-sm-4">
          <hr>
        </div>
        <p class="lead">
          <a href="#donate-money" id="donate-money-btn" class="btn btn-light m-1" role="button">Donate Money</a>
          <a href="#donate-clothes" id="donate-clothes-btn" class="btn btn-light m-1" role="button">Donate Clothes</a>
          <a href="#get-clothes" class="btn btn-light m-1" role="button">Get Clothes</a>
        </p>
      </div>
    </div>
    <div class="container">
      <div id="donate-money" class="row pt-5">
        <div class="col-sm-6">
          <h1>Donate Money</h1>
          <p class="col-sm-6 p-0">
              Want to help out but don't have extra clothes? All monetary donations goes directly
              to providing our services. It takes money to rent our locations, provide transporation
              between sites, and make sure all clothes are cleaned thoroughly.
          </p>
        </div>
        <div class="offset-sm-2 col-sm-3">
          <h3>Ways to Donate</h3>
          <ul class="list-unstyled">
            <li><a class="btn btn-outline-dark donate-option donate-with-crypto" href="https://commerce.coinbase.com/checkout/97933911-8dc4-49c9-a061-08ece4e3bb2d">Cryptocurrency</a></li>
            <li><a class="btn btn-outline-dark donate-option" href="https://paypal.me/pools/c/82H4gI9hr5">PayPal</a></li>
            <li>
                <div>
                    <b-dropdown id="ddown1" text="Credit Card" toggle-class="btn-outline-dark donate-option">
                    <b-dropdown-item @click="openPayment(100)">$1</b-dropdown-item>
                    <b-dropdown-item @click="openPayment(500)">$5</b-dropdown-item>
                    <b-dropdown-item @click="openPayment(1000)">$10</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item @click="openPayment(10000)">$100</b-dropdown-item>
                    <b-dropdown-item @click="openPayment(50000)">$500</b-dropdown-item>
                    </b-dropdown>
                </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div id="donate-clothes">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <h1>Donate Clothes</h1>
            <p>
              Have extra clothes? We want them! We have several donation locations
              that are available to give clothes. Either come to our main location during
              our business hours or visit one of our 24 hour dropoff locations.
            </p>
          </div>
          <div class="text-center col-sm-3">
            <h3>Acceptable</h3>
            <ul class="list-unstyled">
              <li>T-Shirts</li>
              <li>Pants (Jeans, sweatpants, etc.)</li>
              <li>Hats</li>
              <li>Shoes</li>
              <li>Coats</li>
              <li>Unopened socks</li>
              <li>Unopened underwear</li>
            </ul>
          </div>

          <div class="text-center col-sm-3">
            <h3>Unacceptable</h3>
            <ul class="list-unstyled">
              <li>Used socks</li>
              <li>Used underwear</li>
              <li>Damaged clothes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div id="get-clothes" class="container">
      <h1 class="col-sm-8 p-0">Get Clothes</h1>
      <p class="col-sm-8 p-0">
        Need clothes? We've got you covered! Our facility offers clothing to those
        that need them, no questions asked. Just stop by our main facility and
        you can browse through our collection and take what you need.
      </p>
    </div>

    <div id="contact-info">
      <div class="container mt-5" id="contact-info-container">
        <div class="row">
          <div class="col-sm-6">
            <h1>Contact Us</h1>
            <p>Questions? Comments? We'd love to hear them!</p>
            <ul class="list-unstyled">
              <li><b>Email:</b> contact@washed.mitchmcaffee.com</li>
              <li><b>Mailing Address:</b> 3324 E Eve St, Sandy, UT 84093</li>
              <li><b>Phone:</b> (801) 321-1231</li>
            </ul>
          </div>
          <div class="col-sm-6">
            <div class="text-right">
              <h3>Locations and Hours</h3>
              <div id="main-locations">
                <b>Main Location:</b><br>
                3324 E Eve St, Sandy, UT 84093<br>
                Hours: 9:00 AM - 6:00 PM
              </div>
              <div id="dropoff-locations">
                <b>24 Hour Dropoff Locations:</b>
                <ul class="list-unstyled">
                  <li>242 E Saint Way, Salt Lake City, UT 84106</li>
                  <li>2134 E Drake St, West Valley City, UT 84203</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
// Breakpoints
// ------------------------- Source: http://blog.scur.pl/2012/06/variable-media-queries-less-css/
@highdensity: ~"only screen and (-webkit-min-device-pixel-ratio: 1.5)",
              ~"only screen and (min--moz-device-pixel-ratio: 1.5)",
              ~"only screen and (-o-min-device-pixel-ratio: 3/2)",
              ~"only screen and (min-device-pixel-ratio: 1.5)";
@mobile:      ~"only screen and (max-width: 529px)";
@tablet:      ~"only screen and (min-width: 530px) and (max-width: 949px)";
@desktop:     ~"only screen and (min-width: 950px) and (max-width: 1128px)";
@desktop-xl:  ~"only screen and (min-width: 1129px)";

@color_1: yellow;
@background_color_1: #e9ecef;

.btn-grey {
    background-color: @background_color_1;
}
#main-page {
    height: 100%;
}
#donate-money-btn {
    margin-right: 10px;
}
#donate-clothes-btn {
  margin-right: 10px;
}
#donation-buttons {
    padding-bottom: 3em;
}
.donate-option {
    width: 200px;
    margin: 10px 0;
    &:hover {
        color: white !important;
    }
}
#donate-money {
    padding-bottom: 3em;
}
#donate-clothes {
    min-height: 30%;
    padding-top: 2em;
    padding-bottom: 3em;
    background-color: @background_color_1;
}
#main-locations {
    padding-bottom: 10px;
}
.header-text {
    color: @color_1;
    font-weight: 700;
}
#get-clothes {
  padding-top: 2em;
  padding-bottom: 2em;
}
#contact-info-container {
    @media @mobile {
        height: 80vh;
    }
    height: 30vh;
}
#contact-info {
  padding-top: 1em;
  background-color: @background_color_1;
}
.jumbotron {
    /* The following image is used from Death To The Stock Photo under the license
     https://deathtothestockphoto.com/wp-content/uploads/2017/12/Death-to-the-Stock-Photo-Content-End-User-License-4-2016.pdf
     We are not affiliated with Death to the stock photo. */
    background-image: url("../assets/Vibrant_small_inverted.png");
    background-size: cover;
    border-radius: 0px;
}
</style>

<script>
export default {
  methods: {
    openPayment (amount) {
      window.handler.open({
        name: 'Washed But Not Forgotten',
        description: 'Thank You!',
        image: '/android-chrome-512x512.png',
        locale: 'auto',
        panelLabel: 'Donate {{amount}}',
        zipCode: true,
        amount: amount
      })
    }
  }
}
</script>
