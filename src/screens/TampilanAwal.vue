<template>
  <div class="tampilan-awal">
    <div class="div-4">
      <Overlap />
      <div class="APP-EXCLUSIVE-OFF-wrapper">
        <p class="APP-EXCLUSIVE-OFF">
          APP EXCLUSIVE: 25% OFF EVERYTHING *<br />
          SINGLES DAY IS COMING !<br />
          Download now
        </p>
      </div>
      <OverlapGroup />
      <Group />
      <div class="details">DETAILS</div>
      <div class="lorem-ipsum-dot-3">Elegan. Modis. Trendi</div>
      <OverlapWrapper />
      <div class="lorem-ipsum-dot-4">Style in Every Stitch, Elegance in Every Thread</div>
      <div class="lorem-ipsum-dot-6">Your Fashion, Your Statement</div>
      <GroupWrapper />
      <DivWrapper />
      <Div />
      <img class="rectangle-10" alt="Rectangle" src="../../static/img/rectangle-71.png" />
      <div class="image-wrapper">
        <img class="image-5" alt="Image" src="../../static/img/image-19.png" />
      </div>
    </div>
  </div>
</template>

<script>
import Div from "./TampilanAwal/sections/Div.vue";
import DivWrapper from "./TampilanAwal/sections/DivWrapper.vue";
import Group from "./TampilanAwal/sections/Group.vue"
import GroupWrapper from "./TampilanAwal/sections/GroupWrapper.vue";
import Overlap from "./TampilanAwal/sections/Overlap.vue";
import OverlapGroup from "./TampilanAwal/sections/OverlapGroup.vue";
import OverlapWrapper from "./TampilanAwal/sections/OverlapWrapper.vue";
import Login from "./TampilanAwal/sections/login.vue";

export default {
  name: "TampilanAwal",
  components: {
    Div,
    DivWrapper,
    Group,
    GroupWrapper,
    Overlap,
    OverlapGroup,
    OverlapWrapper,
    Login,
  },
};
</script>

<style>
.tampilan-awal {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.tampilan-awal .div-4 {
  background-color: #ffffff;
  height: 3140px;
  overflow: hidden;
  position: relative;
  width: 1440px;
}

.tampilan-awal .APP-EXCLUSIVE-OFF-wrapper {
  background-color: #07b3be;
  height: 55px;
  left: 0;
  position: absolute;
  top: 88px;
  width: 1440px;
}

.tampilan-awal .APP-EXCLUSIVE-OFF {
  color: #ffffff;
  font-family: "Poppins", Helvetica;
  font-size: 14px;
  font-weight: 600;
  left: 585px;
  letter-spacing: 0.28px;
  line-height: 14px;
  position: absolute;
  text-align: center;
  top: 5px;
}

.tampilan-awal .details {
  color: #0500ff;
  font-family: "Poppins", Helvetica;
  font-size: 40px;
  font-weight: 600;
  left: 77px;
  letter-spacing: 11.2px;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 1277px;
}

.tampilan-awal .lorem-ipsum-dot-3 {
  color: #000000;
  font-family: "Poppins", Helvetica;
  font-size: 56px;
  font-weight: 700;
  left: 79px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 1363px;
}

.tampilan-awal .lorem-ipsum-dot-4 {
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 30px;
  font-weight: 700;
  left: 79px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 1447px;
  white-space: nowrap;
}

.tampilan-awal .lorem-ipsum-dot-5 {
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 30px;
  font-weight: 700;
  left: 343px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 1447px;
  white-space: nowrap;
}

.tampilan-awal .lorem-ipsum-dot-6 {
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 30px;
  font-weight: 700;
  left: 79px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 1488px;
  white-space: nowrap;
}

.tampilan-awal .lorem-ipsum-dot-7 {
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 30px;
  font-weight: 700;
  left: 343px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 1488px;
  white-space: nowrap;
}

.tampilan-awal .rectangle-10 {
  height: 173px;
  left: -3633px;
  position: absolute;
  top: 2677px;
  width: 1263px;
}

.tampilan-awal .image-wrapper {
  background-image: url(../../static/img/image-18.png);
  background-position: 50% 50%;
  background-size: cover;
  height: 173px;
  left: 87px;
  position: absolute;
  top: 2164px;
  width: 1263px;
}

.tampilan-awal .image-5 {
  height: 173px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 1263px;
}
</style>