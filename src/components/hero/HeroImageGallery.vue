<script setup lang="ts">
import { ref } from 'vue';
import featuredImage from '../../assets/images/hero/1.webp';
import alternative1 from '../../assets/images/hero/2.webp';
import alternative2 from '../../assets/images/hero/3.webp';
import alternative3 from '../../assets/images/hero/4.webp';

const images = ref([alternative1, alternative2, alternative3, featuredImage]);

const handleChangeActiveImage = (index: number) => {
  const selectedElement = images.value[index];

  images.value = [
    ...images.value.slice(0, index),
    ...images.value.slice(index + 1),
    selectedElement,
  ];
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="overflow-hidden">
      <!-- PERF: It's possible to optimize it using Image component from Astro, but it requires extracting it to a different component -->
      <img
        class="hover:scale-105 transition-transform"
        :src="images[3].src"
        alt=""
        :width="images[0].width"
        :height="images[0].height"
        loading="eager"
      />
    </div>
    <div
      class="max-w-[30.375rem] grid grid-cols-3 gap-4 md:gap-10 md:justify-between"
    >
      <div
        v-for="(image, index) in images.slice(0, 3)"
        :key="image.src"
        class="aspect-square overflow-hidden outline outline-1 rounded-[0.9375rem] outline-[#006340]"
      >
        <!-- PERF: It's possible to optimize it using Image component from Astro, but it requires extracting it to a different component -->
        <img
          class="scale-105 hover:scale-[1.15] transition-transform rounded-lg border"
          :src="image.src"
          alt=""
          :width="image.width"
          :height="image.height"
          loading="eager"
          @click="() => handleChangeActiveImage(index)"
        />
      </div>
    </div>
  </div>
</template>
