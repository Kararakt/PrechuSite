<script lang="ts" setup>
import Footer from "../components/Footer.vue";
</script>
<template>
  <div class="container mx-auto">
    <div class="flex flex-col text-center mt-14 gap-10">
      <h1 class="h1--Services text-5xl">Our Services</h1>
      <h4 class="text-2xl h4--Services">
        Consectetur adipiscing elit nullam nunc justo sagittis suscipit
        ultrices.
      </h4>
    </div>
    <div class="flex flex-wrap justify-center gap-20 mt-20 card--Services">
      <el-card class="box-card w-3/12" shadow="never">
        <div class="flex flex-col gap-8">
          <div class="flex justify-center">
            <el-image
              class="image--Services"
              src="/src/assets/a.png"
            ></el-image>
          </div>
          <div class="text-center">
            <h1 class="text-4xl card-h1--Services">Strategy</h1>
            <p class="p--Homepage pt-6 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam
              nunc justo sagittis suscipit ultrices.
            </p>
          </div>
        </div>
      </el-card>
      <el-card class="box-card w-3/12" shadow="never">
        <div class="flex flex-col gap-8">
          <div class="flex justify-center">
            <el-image
              class="image--Services"
              src="/src/assets/b.jpg"
            ></el-image>
          </div>
          <div class="text-center">
            <h1 class="text-4xl card-h1--Services">Branding</h1>
            <p class="p--Homepage pt-6 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam
              nunc justo sagittis suscipit ultrices.
            </p>
          </div>
        </div>
      </el-card>
      <el-card class="box-card w-3/12" shadow="never">
        <div class="flex flex-col gap-8">
          <div class="flex justify-center">
            <el-image
              class="image--Services"
              src="/src/assets/c.jpg"
            ></el-image>
          </div>
          <div class="text-center">
            <h1 class="text-4xl card-h1--Services">Development</h1>
            <p class="p--Homepage pt-6 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam
              nunc justo sagittis suscipit ultrices.
            </p>
          </div>
        </div>
      </el-card>
      <el-card class="box-card w-3/12" shadow="never">
        <div class="flex flex-col gap-8">
          <div class="flex justify-center">
            <el-image
              class="image--Services"
              src="/src/assets/e.png"
            ></el-image>
          </div>
          <div class="text-center">
            <h1 class="text-4xl card-h1--Services">Social Media</h1>
            <p class="p--Homepage pt-6 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam
              nunc justo sagittis suscipit ultrices.
            </p>
          </div>
        </div>
      </el-card>
      <el-card class="box-card w-3/12" shadow="never">
        <div class="flex flex-col gap-8">
          <div class="flex justify-center">
            <el-image
              class="image--Homepage"
              src="/src/assets/g.png"
            ></el-image>
          </div>
          <div class="text-center">
            <h1 class="text-4xl card-h1--Services">Ecommerce</h1>
            <p class="p--Homepage pt-6 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam
              nunc justo sagittis suscipit ultrices.
            </p>
          </div>
        </div>
      </el-card>
    </div>

    <div class="flex justify-center butn--Services mb-20">
      <el-button class="mt-14 mb-14" type="primary" size="large"
        >LEARN MORE</el-button
      >
    </div>
  </div>
  <Footer />
</template>
