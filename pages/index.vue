<template>
  <div class="page">
    <div class="container">
      <Selector />
      <main>
        <Overview />
        <Map />
        <Hint v-if="!citySelected" />
        <Dashboard v-else />
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
const citySelected = useCitySelected();
</script>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  grid-gap: 152px;
  margin: 40px 0;
}
</style>
