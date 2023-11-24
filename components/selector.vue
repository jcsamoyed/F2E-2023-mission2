<template>
  <section>
    <!-- 縣市 -->
    <select v-model="cityChoose">
      <option value="" disabled>
        請選擇
      </option>
      <option v-for="city in cityList" :key="city.CityEngName" :value="city.CityName">
        {{ city.CityName }}
      </option>
    </select>
  </section>
</template>

<script lang="ts" setup>
import cityCountyData from '@/content/cityCountyData.json';

// 縣市資料
const cityList = reactive(cityCountyData);
const cityChoose = ref('');

</script>

<style lang="scss" scoped>
select {
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 20px;
  padding: 4px 12px;
  width: 156px;
  border-radius: 8px;
  border: solid 1px #E6E6E6;
  appearance: none;
  background-image: url('@/assets/images/selector/arrow-down.svg');
  background-repeat: no-repeat;
  background-position: center right 12px;
  cursor: pointer;
  transition-duration: .2s;

  &:hover {
    border-color: #BFBFBF;
  }

  &:focus {
    border-color: #262E49;
  }

  &:focus-visible {
    border-color: #262E49;
    outline: none;
  }
}
</style>
