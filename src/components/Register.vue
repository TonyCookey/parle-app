<template>
  <div>
    <div class="limiter">
      <div class="container-login100 register-background">
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
              <span class="txt1">Full Name</span>
            </div>
            <div class="wrap-input100 validate-input" data-validate="Username is required">
              <input class="input100" type="text" name="full_name" v-model.trim="$v.name.$model" />
              <span class="focus-input100"></span>
            </div>
            <div class="p-t-15 p-b-9">
              <span class="txt1">Email Address</span>
            </div>
            <div class="wrap-input100 validate-input" data-validate="Username is required">
              <input class="input100" type="email" name="email" v-model.trim="$v.email.$model" />
              <span class="focus-input100"></span>
            </div>

            <div class="p-t-13 p-b-9">
              <span class="txt1">Password</span>
            </div>
            <div class="wrap-input100 validate-input" data-validate="Password is required">
              <input class="input100" type="password" name="pass" v-model.trim="$v.password.$model" />
              <span class="focus-input100"></span>
            </div>

            <div class="container-login100-form-btn m-t-17">
              <button class="login100-form-btn">Sign Up</button>
            </div>

            <div class="w-full text-center p-t-20">
              <a href="#" class="m-l-5">Forgot your Password</a> |
              <router-link to="/" tag="a">Login</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div id="dropDownSelect1"></div>
  </div>
</template>
<script>
import { required, minLength, email, alphaNum } from "vuelidate/lib/validators";
export default {
  data() {
    return {};
  },
  validations: {
    name: {
      required,
      minLength: minLength(10)
    },
    email: {
      required,
      email
    },
    password: {
      minLength: minLength(6),
      alphaNum,
      required
    }
  },
  computed: {
    stateTest() {
      return this.$store.state.text;
    }
  },
  methods: {
    login() {}
  }
};
</script>