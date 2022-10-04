<script lang="ts" setup>
const urls = [
  {
    src: "/src/assets/AcerMonitor1.png",
    title: "Lorem Ipsum",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    cost: 55000 + " " + "₽",
    id: 1,
  },
  {
    src: "/src/assets/AcerMonitor2.png",
    title: "Lorem Ipsum",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    cost: 75000 + " " + "₽",
    id: 2,
  },
  {
    src: "/src/assets/AcerMonitor3.png",
    title: "Lorem Ipsum",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    cost: 45000 + " " + "₽",
    id: 3,
  },
];

const photos = [
  {
    src: "/src/assets/AcerLaptop1.png",
    title: "Lorem Ipsum",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    cost: 35000 + " " + "₽",
    id: 1,
  },
  {
    src: "/src/assets/AcerLaptop2.png",
    title: "Lorem Ipsum",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    cost: 325000 + " " + "₽",
    id: 1,
  },
  {
    src: "/src/assets/AcerLaptop3.png",
    title: "Lorem Ipsum",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    cost: 70000 + " " + "₽",
    id: 1,
  },
];
</script>

<template>
  <div class="main-div--Tabs">
    <el-tabs type="border-card">
      <el-tab-pane
        ><template #label
          ><div class="text-4xl label-name--Tabs">Monitors</div></template
        >
        <div class="flex gap-10 justify-center mt-14 card--Tabs cursor-pointer">
          <el-card v-for="url in urls" class="w-3/12 flex" shadow="hover"
            ><div class="image--Tabs"><el-image :src="url.src" /></div>
            <div class="mt-8 flex flex-col gap-4">
              <h1 class="text-3xl flex justify-center h1-card--Products">
                {{ url.title }}
              </h1>
              <p class="p-card--Products text-xl">{{ url.text }}</p>
              <div class="flex justify-between mt-4">
                <p class="text-2xl">{{ url.cost }}</p>
                <el-popover placement="top-end" trigger="hover">
                  <template #reference>
                    <el-icon :size="50"
                      ><ShoppingCart class="icon--Tabs"
                    /></el-icon>
                  </template>
                  <template #default
                    ><div class="text-xl">Add to cart</div></template
                  >
                </el-popover>
              </div>
            </div></el-card
          >
        </div></el-tab-pane
      >
      <el-tab-pane :disabled="true" class="tabe-pane--Products"
        ><template #label
          ><div class="text-4xl cursor-text label-name--Tabs">/</div></template
        ></el-tab-pane
      >
      <el-tab-pane label="Role"
        ><template #label
          ><div class="text-4xl label-name--Tabs">Laptops</div>
        </template>
        <div class="flex gap-10 justify-center mt-14 card--Tabs">
          <el-card v-for="photo in photos" class="w-3/12" shadow="hover"
            ><div class="image--Tabs"><el-image :src="photo.src" /></div>
            <div class="mt-8 flex flex-col gap-4">
              <h1 class="text-3xl flex justify-center h1-card--Products">
                {{ photo.title }}
              </h1>
              <p class="p-card--Products text-xl">{{ photo.text }}</p>
              <div class="flex justify-between mt-4">
                <p class="text-2xl">{{ photo.cost }}</p>
                <el-popover placement="top-end" trigger="hover">
                  <template #reference>
                    <el-icon :size="50"
                      ><ShoppingCart class="icon--Tabs"
                    /></el-icon>
                  </template>
                  <template #default
                    ><div class="text-xl">Add to cart</div></template
                  >
                </el-popover>
              </div>
            </div></el-card
          >
        </div></el-tab-pane
      >
    </el-tabs>
  </div>
</template>
