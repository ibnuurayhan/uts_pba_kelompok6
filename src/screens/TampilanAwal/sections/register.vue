<template>
    <div class="register">
      <div class="div">
        <div class="text-wrapper">HI, Welcome</div>
        <div class="group">
          <div class="group-wrapper">
            <div class="group-2">
              <div class="overlap">
                <div class="rectangle" />
                <div class="text-wrapper-2">Sign up with google</div>
                <div class="group-3">
                  <div class="overlap-group">
                    <div class="text-wrapper-3">Sign up with Facebook</div>
                    <img class="icon-facebook" alt="Icon facebook" src="/img/icon-facebook.png" />
                  </div>
                  <img class="icon-google" alt="Icon google" src="/img/icon-google.png" />
                </div>
              </div>
              <div class="text-wrapper-4">Create an account</div>
              <div class="text-wrapper-5">OR</div>
              <div class="group-4">
                <img class="line" alt="Line" src="/img/line-3-2.svg" />
                <div class="text-wrapper-6">Full Name</div>
              </div>
              <div class="group-5">
                <img class="img" alt="Line" src="/img/line-3-1.svg" />
                <div class="text-wrapper-6">Email Adress</div>
              </div>
              <div class="group-6">
                <img class="line" alt="Line" src="/img/line-3.svg" />
                <div class="text-wrapper-6">Password</div>
              </div>
              <div class="overlap-wrapper">
                <div class="div-wrapper">
                  <div class="text-wrapper-7">Create Account</div>
                </div>
              </div>
              <div class="text-wrapper-8">Alrady have an account?</div>
              <div class="text-wrapper-9">Login</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Register",
  };
  </script>
  
  <style>
  .register {
    background-color: #07b3be;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  
  .register .div {
    background-color: #07b3be;
    height: 1024px;
    position: relative;
    width: 1440px;
  }
  
  .register .text-wrapper {
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
  
  .register .group {
    height: 1024px;
    left: 515px;
    position: absolute;
    top: 0;
    width: 925px;
  }
  
  .register .group-wrapper {
    background-color: #ffffff;
    height: 1024px;
  }
  
  .register .group-2 {
    height: 776px;
    left: 89px;
    position: relative;
    top: 124px;
    width: 757px;
  }
  
  .register .overlap {
    height: 56px;
    left: 0;
    position: absolute;
    top: 87px;
    width: 749px;
  }
  
  .register .rectangle {
    border: 1.21px solid;
    border-color: #000000;
    border-radius: 4.83px;
    height: 56px;
    left: 0;
    position: absolute;
    top: 0;
    width: 357px;
  }
  
  .register .text-wrapper-2 {
    color: #d9d9d9;
    font-family: "Inter", Helvetica;
    font-size: 20.5px;
    font-weight: 600;
    left: 77px;
    letter-spacing: 0.41px;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 14px;
  }
  
  .register .group-3 {
    height: 56px;
    left: 20px;
    position: absolute;
    top: 0;
    width: 729px;
  }
  
  .register .overlap-group {
    border: 1.21px solid;
    border-color: #000000;
    border-radius: 4.83px;
    height: 56px;
    left: 370px;
    position: absolute;
    top: 0;
    width: 357px;
  }
  
  .register .text-wrapper-3 {
    color: #d9d9d9;
    font-family: "Inter", Helvetica;
    font-size: 20.5px;
    font-weight: 600;
    left: 60px;
    letter-spacing: 0.41px;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 13px;
  }
  
  .register .icon-facebook {
    height: 33px;
    left: 12px;
    position: absolute;
    top: 10px;
    width: 33px;
  }
  
  .register .icon-google {
    height: 31px;
    left: 0;
    position: absolute;
    top: 13px;
    width: 31px;
  }
  
  .register .text-wrapper-4 {
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
  }
  
  .register .text-wrapper-5 {
    color: #d9d9d9;
    font-family: "Inter", Helvetica;
    font-size: 36.2px;
    font-weight: 600;
    left: 337px;
    letter-spacing: 0.72px;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 192px;
  }
  
  .register .group-4 {
    height: 42px;
    left: 0;
    position: absolute;
    top: 332px;
    width: 749px;
  }
  
  .register .line {
    height: 2px;
    left: 0;
    position: absolute;
    top: 40px;
    width: 747px;
  }
  
  .register .text-wrapper-6 {
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
  }
  
  .register .group-5 {
    height: 43px;
    left: 0;
    position: absolute;
    top: 422px;
    width: 749px;
  }
  
  .register .img {
    height: 2px;
    left: 0;
    position: absolute;
    top: 41px;
    width: 747px;
  }
  
  .register .group-6 {
    height: 42px;
    left: 0;
    position: absolute;
    top: 515px;
    width: 749px;
  }
  
  .register .overlap-wrapper {
    height: 59px;
    left: 0;
    position: absolute;
    top: 642px;
    width: 749px;
  }
  
  .register .div-wrapper {
    background-color: #07b3be;
    border-radius: 6.03px;
    height: 59px;
    position: relative;
    width: 747px;
  }
  
  .register .text-wrapper-7 {
    color: #ffffff;
    font-family: "Inter", Helvetica;
    font-size: 20.5px;
    font-weight: 600;
    left: 293px;
    letter-spacing: 0.41px;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 17px;
  }
  
  .register .text-wrapper-8 {
    color: #000000;
    font-family: "Inter", Helvetica;
    font-size: 20.5px;
    font-weight: 600;
    left: 0;
    letter-spacing: 0.41px;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 751px;
  }
  
  .register .text-wrapper-9 {
    color: #1877f2;
    font-family: "Inter", Helvetica;
    font-size: 20.5px;
    font-weight: 600;
    left: 266px;
    letter-spacing: 0.41px;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 751px;
  }
  </style>
  