<template>
  <div id="main-page">
    <div class="jumbotron my-0">
      <h1 class="display-3 header-text">Give Potential</h1>
      <p class="lead header-text">
        Everyone should have clothes. <br>
        Give yours to those who need them.
      </p>
      <div class="col-sm-4">
        <hr>
      </div>
      <p class="lead">
        <a href="#donate-money" id="donate-money-btn" class="btn btn-default btn-grey" role="button">Donate Money</a>
        <a href="#donate-clothes" id="donate-clothes-btn" class="btn btn-default btn-grey" role="button">Donate Clothes</a>
      </p>
    </div>

    <div id="donate-money" class="col-sm-12 pt-5">
      <h1 class="text-center">Donate Money</h1>
      <p class="offset-sm-3 col-sm-6 text-center">
        Want to help out but don't have extra clothes? All monetary donations goes directly
        to providing our services. It takes money to rent our locations, provide transporation
        between sites, and make sure all clothes are cleaned thoroughly.
      </p>
    </div>

    <div id="donate-clothes" class="col-sm-12">
      <h1 class="text-center">Donate Clothes</h1>
      <p class="offset-sm-3 col-sm-6 text-center">
        Have extra clothes? We want them! We have several donation locations
        that are available to give clothes. Either come to our main location during
        our business hours or visit one of our 24 hour dropoff locations.
      </p>
      <div class="row donate-clothes-info">
        <div class="text-center col-sm-3">
          <h3>What we accept</h3>
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
          <h3>What we don't accept</h3>
          <ul class="list-unstyled">
            <li>Used socks</li>
            <li>Used underwear</li>
            <li>Damaged clothes</li>
          </ul>
        </div>

        <div class="col-sm-6">
          <div class="text-center">
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

      <div id="contact-info" class="text-center">
        <h2>Contact Us</h2>
        <p>Questions? Comments? We'd love to hear them!</p>
        <ul class="list-unstyled">
          <li><b>Email:</b> contact@washed.mitchmcaffee.com</li>
          <li><b>Mailing Address:</b> 3324 E Eve St, Sandy, UT 84093</li>
          <li><b>Phone:</b> (801) 321-1231</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.btn-grey {
  background-color: #e9ecef;
}
#main-page {
  height: 100%;
  background: #e9ecef;
}
#donate-money-btn {
  margin-right: 20px;
}
#donation-buttons {
  padding-bottom: 3em;
}
#donate-money {
    background: white;
  padding-bottom: 3em;
}

#donate-clothes {
  min-height: 40%;
  padding-top: 2em;
  padding-bottom: 3em;
}
#main-locations {
  padding-bottom: 10px;
}
.donate-clothes-info {
  padding-top: 1em;
}
.header-text {
  color: yellow;
  font-weight: 700;
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
