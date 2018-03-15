<template>
  <div id="main-page">
    <div class="jumbotron">
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

    <div id="donate-money" class="col-sm-12">
      <h1 class="text-center">Donate Money</h1>
      <p class="offset-sm-3 col-sm-6 text-center">
        Want to help out but don't have extra clothes? All monetary donations goes directly
        to providing our services. It takes money to rent our locations, provide transporation
        between sites, and make sure all clothes are cleaned thoroughly.
      </p>
    </div>

    <div id="donate-clothes" class="col-sm-12">
      <h1 class="text-center">Donate Clothes</h1>
      <p class="text-center">
        Have extra clothes? We want them! We have several donation locations
        that are available to give clothes.
      </p>
      <div class="row text-center">
        <div class="offset-sm-3 col-sm-3">
          <h3><u>What we accept</u></h3>
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
        <div class="col-sm-3">
          <h3><u>What we don't accept</u></h3>
          <ul class="list-unstyled">
            <li>Used socks</li>
            <li>Used underwear</li>
            <li>Damaged clothes</li>
          </ul>
        </div>
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
}
#donate-money-btn {
  margin-right: 20px;
}
#donation-buttons {
  padding-bottom: 3em;
}
#donate-money {
  padding-bottom: 3em;
}

#donate-clothes {
  background-color: #e9ecef;
  min-height: 40%;
  padding-top: 2em;
}
.header-text {
  color: yellow;
  font-weight: 700;
}
.jumbotron {
  background-image: url("../assets/Vibrant_small_inverted.png");
  background-size: cover;
  border-radius: 0px;
}
</style>
