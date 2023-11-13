<template>
    <div class="login">
      <div class="div">
        <div class="text-wrapper">HI, Welcome</div>
        <div class="group">
          <div class="group-wrapper">
            <div class="group-2">
              <div class="group-3">
                <div class="overlap">
                  <div class="overlap-group-wrapper">
                    <div class="overlap-group">
                      <div class="text-wrapper-2">Login With Facebook</div>
                    </div>
                  </div>
                  <img class="icon-facebook" alt="Icon facebook" src="/img/icon-facebook.png" />
                </div>
                <div class="overlap-group-wrapper">
                  <div class="overlap-group">
                    <div class="text-wrapper-3">Login With Google</div>
                    <img class="icon-google" alt="Icon google" src="/img/icon-google.png" />
                  </div>
                </div>
              </div>
              <div class="text-wrapper-4">Login</div>
              <div class="group-4">
                <img class="line" alt="Line" src="/img/line-3-1.svg" />
                <div class="text-wrapper-5">Email Adress</div>
              </div>
              <div class="group-5">
                <img class="img" alt="Line" src="/img/line-3.svg" />
                <div class="text-wrapper-6">Password</div>
              </div>
              <div class="overlap-wrapper">
                <div class="div-wrapper">
                  <div class="text-wrapper-7">Login</div>
                </div>
              </div>
              <div class="group-6">
                <div class="text-wrapper-8">Didn’t have an account?</div>
                <div class="text-wrapper-9">Sign Up</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Login",
  };
  </script>
  
  <style>
  .login {
    background-color: #07b3be;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  
  .login .div {
    background-color: #07b3be;
    height: 1024px;
    overflow: hidden;
    position: relative;
    width: 1440px;
  }
  
  .login .text-wrapper {
    color: #000000;
    font-family: "Poppins", Helvetica;
    font-size: 30px;
    font-weight: 600;
    left: 146px;
    letter-spacing: 0.6px;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 115px;
  }
  
  .login .group {
    height: 1024px;
    left: 515px;
    position: absolute;
    top: 0;
    width: 930px;
  }
  
  .login .group-wrapper {
    background-color: #ffffff;
    height: 1024px;
  }
  
  .login .group-2 {
    height: 589px;
    left: 84px;
    position: relative;
    top: 111px;
    width: 753px;
  }
  
  .login .group-3 {
    height: 56px;
    left: 0;
    position: absolute;
    top: 100px;
    width: 751px;
  }
  
  .login .overlap {
    height: 56px;
    left: 392px;
    position: absolute;
    top: 0;
    width: 361px;
  }
  
  .login .overlap-group-wrapper {
    height: 56px;
    left: 0;
    position: absolute;
    top: 0;
    width: 361px;
  }
  
  .login .overlap-group {
    border: 1.21px solid;
    border-color: #000000;
    border-radius: 4.83px;
    height: 56px;
    position: relative;
    width: 359px;
  }
  
  .login .text-wrapper-2 {
    color: #d9d9d9;
    font-family: "Inter", Helvetica;
    font-size: 20.5px;
    font-weight: 600;
    left: 69px;
    letter-spacing: 0.41px;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 14px;
    width: 218px;
  }
  
  .login .icon-facebook {
    height: 33px;
    left: 13px;
    position: absolute;
    top: 11px;
    width: 33px;
  }
  
  .login .text-wrapper-3 {
    color: #d9d9d9;
    font-family: "Inter", Helvetica;
    font-size: 20.5px;
    font-weight: 600;
    left: 83px;
    letter-spacing: 0.41px;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 14px;
    width: 190px;
  }
  
  .login .icon-google {
    height: 31px;
    left: 19px;
    position: absolute;
    top: 12px;
    width: 31px;
  }
  
  .login .text-wrapper-4 {
    color: #000000;
    font-family: "Poppins", Helvetica;
    font-size: 36.2px;
    font-weight: 600;
    left: 0;
    letter-spacing: 0.72px;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 0;
    width: 103px;
  }
  
  .login .group-4 {
    height: 43px;
    left: 0;
    position: absolute;
    top: 257px;
    width: 753px;
  }
  
  .login .line {
    height: 2px;
    left: 0;
    position: absolute;
    top: 41px;
    width: 751px;
  }
  
  .login .text-wrapper-5 {
    color: #d9d9d9;
    font-family: "Inter", Helvetica;
    font-size: 20.5px;
    font-weight: 600;
    left: 0;
    letter-spacing: 0.41px;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 0;
    width: 134px;
  }
  
  .login .group-5 {
    height: 42px;
    left: 0;
    position: absolute;
    top: 350px;
    width: 753px;
  }
  
  .login .img {
    height: 2px;
    left: 0;
    position: absolute;
    top: 40px;
    width: 751px;
  }
  
  .login .text-wrapper-6 {
    color: #d9d9d9;
    font-family: "Inter", Helvetica;
    font-size: 20.5px;
    font-weight: 600;
    left: 0;
    letter-spacing: 0.41px;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 0;
    width: 102px;
  }
  
  .login .overlap-wrapper {
    height: 59px;
    left: 0;
    position: absolute;
    top: 459px;
    width: 753px;
  }
  
  .login .div-wrapper {
    background-color: #07b3be;
    border-radius: 6.03px;
    height: 59px;
    position: relative;
    width: 751px;
  }
  
  .login .text-wrapper-7 {
    color: #ffffff;
    font-family: "Inter", Helvetica;
    font-size: 20.5px;
    font-weight: 600;
    left: 347px;
    letter-spacing: 0.41px;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 17px;
    width: 57px;
  }
  
  .login .group-6 {
    height: 25px;
    left: 3px;
    position: absolute;
    top: 564px;
    width: 342px;
  }
  
  .login .text-wrapper-8 {
    color: #000000;
    font-family: "Inter", Helvetica;
    font-size: 20.5px;
    font-weight: 600;
    left: 0;
    letter-spacing: 0.41px;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 0;
    width: 248px;
  }
  
  .login .text-wrapper-9 {
    color: #1877f2;
    font-family: "Inter", Helvetica;
    font-size: 20.5px;
    font-weight: 600;
    left: 258px;
    letter-spacing: 0.41px;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 0;
    width: 80px;
  }
  </style>
  