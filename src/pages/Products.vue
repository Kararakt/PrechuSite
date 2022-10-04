<script lang="ts" setup>
import Tabs from "../components/Tabs.vue";
import Footer from "../components/Footer.vue";
const items = [
  { src: "/src/assets/acer.png", id: 1, href: "#ACER" },
  { src: "/src/assets/asus.jpg", id: 2, href: "#ASUS" },
  { src: "/src/assets/samsung.png", id: 3, href: "#SAMSUNG" },
  { src: "/src/assets/sony.jpg", id: 4, href: "#SONY" },
  { src: "/src/assets/xiaomi.jpg", id: 5, href: "#XIAOMI" },
];

function scrollUpFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.getElementById("imageUp")!.style.display = "block";
  } else {
    document.getElementById("imageUp")!.style.display = "none";
  }
}
</script>
<template>
  <div class="container mx-auto">
    <div class="flex gap-20 mt-8 mb-8 first-div--Products">
      <div class="second-div--Products">
        <h1 class="text-4xl h1--Products mb-2">Popular Brands</h1>
        <h3
          class="text-xl h3--Products flex gap-4 items-center mt-2 cursor-pointer"
        >
          All Brands<el-icon><Right /></el-icon>
        </h3>
      </div>
      <div class="flex flex-wrap gap-6 cursor-pointer third-div--Products">
        <div v-for="item in items" :key="item.id">
          <a :href="item.href"
            ><el-image class="image--Products" :src="item.src"
          /></a>
        </div>
      </div>
    </div>

    <div class="mt-10 flex flex-col gap-10">
      <h1
        class="text-4xl flex justify-center gap-4 text-black/75 product-name--Products"
        id="ACER"
      >
        <i class="i--Products font-bold">Acer</i> Products
      </h1>
      <div class="main--Products">
        <Tabs />
      </div>
    </div>
    <div class="border--Product"></div>
    <div class="flex flex-col gap-10">
      <h1
        class="text-4xl flex justify-center gap-4 text-black/75 product-name--Products"
        id="ASUS"
      >
        <i class="font-bold">Asus</i>Products
      </h1>
      <div class="main--Products">
        <Tabs />
      </div>
    </div>
    <div class="border--Product"></div>
    <div class="flex flex-col gap-10">
      <h1
        class="text-4xl flex justify-center gap-4 text-black/75 product-name--Products"
        id="SAMSUNG"
      >
        <i class="font-bold second-i--Products">Samsung</i>Products
      </h1>
      <div class="main--Products">
        <Tabs />
      </div>
    </div>
    <div class="border--Product"></div>
    <div class="flex flex-col gap-10">
      <h1
        class="text-4xl flex justify-center gap-4 text-black/75 product-name--Products"
        id="SONY"
      >
        <i class="font-bold">Sony</i>Products
      </h1>
      <div class="main--Products">
        <Tabs />
      </div>
    </div>
    <div class="border--Product"></div>
    <div class="flex flex-col gap-10">
      <h1
        class="text-4xl flex justify-center gap-4 text-black/75 product-name--Products"
        id="XIAOMI"
      >
        <i class="third-i--Products font-bold">Xiaomi</i>Products
      </h1>
      <div class="main--Products">
        <Tabs />
      </div>
    </div>
    <div class="scroll-image--Products" id="imageUp">
      <el-image
        src="/src/assets/scroll-top-img.png"
        @click="scrollUpFunction()"
      />
    </div>
  </div>
  <Footer class="mt-24" />
</template>
