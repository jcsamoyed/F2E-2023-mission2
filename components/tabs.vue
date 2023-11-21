<template>
  <section class=" container">
    <ul class="tabs">
      <li v-for="item in tabList" :key="item.id" :class="{ disabled: !item.enable }">
        <NuxtLink :to="item.link">
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
const tabList = reactive([
  {
    id: 'president',
    title: '第15任 總統副總統大選',
    link: '/',
    enable: true,
  },
  {
    id: 'legislator',
    title: '第10任 立法委員選舉',
    link: '/legislator',
    enable: false,
  },
]);
</script>

<style lang="scss" scoped>
section {
  margin-top: 40px;
  margin-bottom: 20px;
}

.tabs {
  display: flex;
  grid-gap: 20px;

  li {

    &.disabled {
      cursor: not-allowed;

      a {
        font-weight: 400;
        color: #BFBFBF;
        pointer-events: none;
      }
    }
  }

  a {
    display: block;
    font-size: 20px;
    font-weight: 600;
    color: #000;
    text-decoration: none;
    padding-bottom: 12px;
    border-bottom: solid 4px transparent;
    transition-duration: .2s;

    &.router-link-active {
      border-color: #262E49;
    }

    &:hover {
      border-color: #BFBFBF;
      color: #262E49;
    }

  }
}

@media (max-width: 480px) {
  section {
    margin-top: 32px;
  }

  .tabs {
    a {
      font-size: 16px;
    }
  }
}
</style>
