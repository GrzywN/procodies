<script setup lang="ts">
import { ref } from 'vue';
import featuredImage from '/public/images/hero/1.png';
import alternative1 from '/public/images/hero/2.png';
import alternative2 from '/public/images/hero/3.png';
import alternative3 from '/public/images/hero/4.png';

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
      <img
        class="hover:scale-105 transition-transform"
        :src="images[3].src"
        alt=""
        :width="images[0].width"
        :height="images[0].height"
        loading="eager"
      />
    </div>
    <div class="max-w-[30.375rem] h-auto flex flex-wrap gap-10 justify-between">
      <div
        v-for="(image, index) in images.slice(0, 3)"
        :key="image.src"
        class="overflow-hidden outline outline-1 rounded-[0.9375rem] outline-[#006340]"
      >
        <img
          class="scale-105 hover:scale-[1.15] transition-transform rounded-lg border w-[8.1875rem] h-[8.1875rem]"
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
