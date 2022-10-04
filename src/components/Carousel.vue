<script lang="ts" setup>
import { CircleCheckFilled } from "@element-plus/icons-vue";
</script>
<template>
  <div
    class="absolute w-full h-full text-white z-10 flex justify-center pt-10 gap-28 main-div--Carousel"
  >
    <el-image src="/src/assets/iphone.png" class="image--Carousel" />
    <div class="flex flex-col justify-center gap-4 second-div--Carousel">
      <h1 class="text-5xl">Lorem Ipsum is simply</h1>
      <div class="text-3xl">dummy text of the</div>
      <div class="text-3xl">printing & typesetting</div>
      <div class="pt-4 pl-4 btn--Homepage">
        <el-button type="primary" size="large"
          ><el-icon :size="24" class="el-icon--left"
            ><CircleCheckFilled /></el-icon
          >Sing up now</el-button
        >
      </div>
    </div>
  </div>
  <el-image
    class="w-full h-full second-image--Carousel"
    src="/src/assets/HdiiziiG5Zk.jpg"
  ></el-image>
</template>
