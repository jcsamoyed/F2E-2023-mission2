<template>
  <section>
    <div class="title-wrapper" :class="{ open: isShowContent }" @click="isShowContent = !isShowContent">
      <h2>全國投票概況</h2>
      <img src="@/assets/images/arrow-down.svg" class="arrow" alt="箭頭">
    </div>
    <div class="chart-wrapper" :class="{ open: isShowContent }">
      <Chart1 />
      <Chart2 />
    </div>
  </section>
</template>

<script lang="ts" setup>
const isShowContent = ref(false);
</script>

<style lang="scss" scoped>
section {
  flex-shrink: 0;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 270px;
  box-sizing: border-box;
}

.title-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.arrow {
  display: none;
  transform: rotate(-90deg);
  transition-duration: .2s;
}

h2 {
  font-size: 20px;
  font-weight: 600;
}

@media (max-width:1024px) {
  section {
    width: 100%;
    padding: 12px 20px;
  }

  .title-wrapper {
    cursor: pointer;
    transition-duration: .2s;

    &:hover {
      opacity: .7;
    }
  }

  .arrow {
    display: block;
  }

  .open {
    .arrow {
      transform: rotate(0);
    }
  }

  .chart-wrapper {
    height: 0;
    overflow: hidden;

    &.open {
      height: unset;
    }
  }
}
</style>
