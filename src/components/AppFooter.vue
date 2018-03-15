<template>
  <footer class="fixed-bottom justify-content-center">
    <div class="container">
      <div class="row text-center w-100">
      <i class="m-auto">
        <small>
          <router-link class="footer-link" :to="{name: 'PrivacyPolicy'}">Privacy Policy</router-link> | &copy; 2018 Washed But Not Forgotten
        </small>
      </i>
      <form class="form-inline m-auto">
          <input class="form-control email-signup mx-3" name="email" type="email" placeholder="Sign up for email updates">
          <button type="submit" class="btn btn-outline-dark my-auto">Signup</button>
        </form>
    </div>
    </div>
  </footer>
</template>

<style>
footer {
  background-color: #17a2b8;
  color: white;
  padding-top: 5px;
  padding-bottom: 5px;
}
.footer-link {
  text-decoration: none;
  color: white;
}
.grid-container {
  display: grid-inline !important;
  grid-column-gap: 300px;
}
.grid-item {
  max-width: 40px;
}
.email-signup {
  font-size: 0.8rem;
  min-width: 250px;
}
.pallete-blue {
  background: #C5D1EB;
}
</style>
