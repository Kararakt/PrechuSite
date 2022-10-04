<script lang="ts" setup>
import Carousel from "../components/Carousel.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <el-carousel
    :interval="4000"
    indicator-position="none"
    height="40rem"
    class="Carousel--Homepage"
    ><el-carousel-item><Carousel /> </el-carousel-item>
    <el-carousel-item><Carousel /> </el-carousel-item
    ><el-carousel-item><Carousel /> </el-carousel-item>
  </el-carousel>

  <div class="flex flex-wrap gap-40 justify-center mt-10 card--HomePage">
    <el-card class="box-card w-2/12" shadow="never">
      <div class="flex flex-col gap-8">
        <div class="flex justify-center">
          <el-image class="image--Homepage" src="/src/assets/11.png"></el-image>
        </div>
        <div>
          <h1 class="flex justify-center text-4xl h1--Homepage">
            Contrary to popular
          </h1>
          <p class="flex justify-center p--Homepage pt-6 text-xl">
            Lorem Ipsum is not simply random text
          </p>
          <p class="flex justify-center p--Homepage text-xl">
            It has roots in a piece
          </p>
        </div>
      </div>
    </el-card>
    <el-card class="box-card w-2/12" shadow="never">
      <div class="flex flex-col gap-8">
        <div class="flex justify-center">
          <el-image class="image--Homepage" src="/src/assets/22.png"></el-image>
        </div>
        <div>
          <h1 class="flex justify-center text-4xl h1--Homepage">
            Contrary to popular
          </h1>
          <p class="flex justify-center p--Homepage pt-6 text-xl">
            Lorem Ipsum is not simply random text
          </p>
          <p class="flex justify-center p--Homepage text-xl">
            It has roots in a piece
          </p>
        </div>
      </div>
    </el-card>
    <el-card class="box-card w-2/12" shadow="never">
      <div class="flex flex-col gap-8">
        <div class="flex justify-center">
          <el-image class="image--Homepage" src="/src/assets/33.png"></el-image>
        </div>
        <div>
          <h1 class="flex justify-center text-4xl h1--Homepage">
            Contrary to popular
          </h1>
          <p class="flex justify-center p--Homepage pt-6 text-xl">
            Lorem Ipsum is not simply random text
          </p>
          <p class="flex justify-center p--Homepage text-xl">
            It has roots in a piece
          </p>
        </div>
      </div>
    </el-card>
  </div>
  <div class="container mx-auto mt-40 mb-20 main-cart--HomePage">
    <h1 class="text-6xl text-gray-700/70 second-h1--Homepage">
      The Shopping cart
    </h1>
    <div class="flex gap-40 mt-10 Shopping-cart--Homepage">
      <el-image
        src="/src/assets/4.png"
        class="w-2/6 second-image--Homepage"
      ></el-image>
      <div class="flex flex-col gap-10">
        <h2 class="text-4xl text-gray-700/70 h2--Homepage">
          Some Bullet text here
        </h2>
        <div class="flex flex-col gap-5 text-xl p--Homepage">
          <p>Lorem Ipsum is simply dummy text of the printing & typesetting</p>
          <p>Lorem Ipsum has been the industry's standard dummy text ever</p>
          <p>when an unknown printer took a galley of type and scrambled</p>
          <p>
            It to make a type specimen book. It has survived not only five
            centuries
          </p>
          <p>But also the leap into electronic typesetting</p>
          <p>Remaining essentially unchanged. It was popularised</p>
          <p>The release of Letraset sheets containing Lorem Ipsum passages</p>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
