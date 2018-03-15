<template>
  <div>
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
        <button href="#donate-money" id="donate-money-btn" class="btn btn-default">Donate Money</button>
        <button href="#donate-clothes" id="donate-clothes-btn" class="btn btn-default">Donate Clothes</button>
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

    <div id="donate-clothes" class="col-sm-12 text-center">
      <h1>Donate Clothes</h1>
      <p>
        Have extra clothes? We want them! We have several donation locations
        that are available to give clothes.
      </p>
    </div>
  </div>
</template>

<style>
#donate-money-btn {
  padding-right: 10px;
}
#donation-buttons {
  padding-bottom: 3em;
}
#donate-money {
  padding-bottom: 3em;
}

#donate-clothes {
  background-color: #e9ecef;
  height: 100%;
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
