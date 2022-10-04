<script lang="ts" setup>
function Active() {
  document.getElementById("header")!.classList.toggle("active");
  document.getElementById("menu")!.classList.toggle("active");
}

document.onclick = function (e: any) {
  if (e.target.id !== "header" && e.target.id !== "menu") {
    document.getElementById("header")!.classList.remove("active");
    document.getElementById("menu")!.classList.remove("active");
  }
};
</script>

<template>
  <div>
    <div class="container mx-auto flex items-center gap-4 p-4 h-24">
      <el-image src="/src/assets/unnamed.png"></el-image>
      <h2 class="text-5xl text-black/75">Prechu</h2>
      <div id="header" @click="Active()"></div>
      <div class="menu-class--Header ml-auto pt-14">
        <div id="menu" @click="Active()">
          <ul class="cursor-pointer z-20 flex gap-4 text-xl h-10">
            <li @click="$router.push('/')">Home</li>
            <li @click="$router.push('/Products')">Products</li>
            <li @click="$router.push('/Services')">Services</li>
            <li @click="$router.push('/Contact')">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
