<template>
  <div>
    <div class="limiter">
      <div class="container-login100 login-background">
        <div class="wrap-login100 p-l-50 p-r-50 p-t-33 p-b-20">
          <form class="login100-form validate-form flex-sb flex-w">
            <div class="logo-holder">
              <img src="assests/images/logo-parle.png" alt="logo" class="logo-image" />
            </div>
            <!-- <span class="login100-form-title p-b-20">Sign up</span> -->
            <p
              class="txt1 p-b-10 text-center w-100"
            >Register using Google, Facebook or your email address</p>
            <a href="#" class="btn-face">
              <i class="fa fa-facebook-official"></i>
              Facebook
            </a>

            <a href="#" class="btn-google">
              <img src="assests/images/icons/icon-google.png" alt="GOOGLE" />
              Google
            </a>

            <div class="p-t-15 p-b-9">
              <span class="txt1">Username</span>
            </div>
            <div class="wrap-input100 validate-input" data-validate="Username is required">
              <input class="input100" type="text" name="username" />
              <span class="focus-input100"></span>
            </div>

            <div class="p-t-13 p-b-9">
              <span class="txt1">Password</span>
            </div>
            <div class="wrap-input100 validate-input" data-validate="Password is required">
              <input class="input100" type="password" name="pass" />
              <span class="focus-input100"></span>
            </div>

            <div class="container-login100-form-btn m-t-17">
              <button class="login100-form-btn">Login</button>
            </div>

            <div class="w-full text-center p-t-20">
              <a href="#" class="m-l-5">Forgot your Password</a> |
              <router-link to="/register" tag="a">Sign up now</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div id="dropDownSelect1"></div>
  </div>
</template>