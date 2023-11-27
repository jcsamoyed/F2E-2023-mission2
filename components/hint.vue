<template>
  <section>
    <div v-for="(item, index) in hintList" :key="index" class="hint-wrapper">
      <div class="title">
        <img src="@/assets/images/info.svg" alt="info">
        <span>
          小提示
        </span>
      </div>
      <p>{{ item.content }}</p>
      <img :src="getImagePath(`/assets/images/${item.image}`)" class="hint" alt="hint">
    </div>
  </section>
</template>

<script lang="ts" setup>
const hintList = reactive([
  {
    content: '點擊選擇縣市、區、村里，可查看選舉結果',
    image: 'hint-1.svg',
  },
  {
    content: '點擊地圖查看縣市的選舉結果',
    image: 'hint-2.svg',
  },
]);
</script>

<style lang="scss" scoped>
section {
  display: grid;
  flex-direction: column;
  grid-gap: 20px;
  width: 260px;
  box-sizing: border-box;
}

.hint-wrapper {
  background-color: #DEE0E4;
  padding: 20px;
  border-radius: 8px;
}

.title {
  display: flex;
  grid-gap: 8px;
  align-items: center;
  margin-bottom: 8px;

  span {
    font-size: 20px;
    font-weight: 600;
  }
}

p {
  line-height: 1.5;
  margin-bottom: 50px;
}

.hint {
  display: block;
  margin: 0 auto;
}
</style>
