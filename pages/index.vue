<template>
  <div class="page">
    <div class="container">
      <Selector />
      <main>
        <Overview />
        <Map />
        <Hint />
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  grid-gap: 152px;
  margin: 40px 0;
}
</style>
