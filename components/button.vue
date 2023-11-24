<template>
  <button>
    <span>{{ text }}</span>
    <img v-if="imageName" :src="getImagePath(`/assets/images/${imageName}`)" :alt="text">
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  text?: string,
  imageName?: string
}>();
</script>

<style lang="scss" scoped>
button {
  font-family: 'Noto Sans TC', sans-serif;
  display: flex;
  grid-gap: 8px;
  background: #262E49;
  color: #fff;
  font-size: 16px;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition-duration: .2s;

  &:hover {
    background-color: #525982;
  }

  &:active {
    background-color: #171C2C;
  }
}

@media (max-width:480px) {
  button {
    span {
      display: none;
    }
  }
}
</style>
