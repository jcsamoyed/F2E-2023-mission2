<template>
  <section>
    <div class="select-wrapper">
      <!-- 縣市 -->
      <select v-model="citySelected" @change="resetArea">
        <option value="" disabled>
          請選擇
        </option>
        <option v-for="city in cityList" :key="city.CityEngName" :value="city.CityName">
          {{ city.CityName }}
        </option>
      </select>

      <!-- 鄉鎮市區 -->
      <select v-model="areaSelected">
        <option value="" disabled>
          請選擇
        </option>
        <option v-for="area in areaList" :key="area.AreaEngName" :value="area.AreaName">
          {{ area.AreaName }}
        </option>
      </select>
    </div>

    <!-- 清除按鈕 -->
    <Button text="清除" image-name="reset.svg" @click="resetAll" />
  </section>
</template>

<script lang="ts" setup>
import cityCountyData from '@/content/cityCountyData.json';

// 縣市資料
const cityList = reactive(cityCountyData);
const citySelected = useCitySelected();

// 鄉鎮市區資料
const areaList = computed(() => {
  if (citySelected.value) {
    return cityList.filter((item) => {
      return item.CityName === citySelected.value;
    })[0].AreaList;
  }
  return [];
});
const areaSelected = useAreaSelected();

// 清除選項
const resetArea = (): void => {
  areaSelected.value = '';
};
const resetAll = (): void => {
  citySelected.value = '';
  areaSelected.value = '';
};

</script>

<style lang="scss" scoped>
section {
  display: flex;
  grid-gap: 20px;
}

.select-wrapper {
  display: flex;
  grid-gap: 20px;
}

select {
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 20px;
  padding: 4px 12px;
  width: 156px;
  border-radius: 8px;
  border: solid 1px #E6E6E6;
  appearance: none;
  background-image: url('@/assets/images/arrow-down.svg');
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
