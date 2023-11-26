<template>
  <div>
    <div class="pie-row">
      <client-only>
        <v-chart class="chart" :option="option" style="width: 120px;height:120px;" :auto-resize="true" />
      </client-only>
      <p class="pie-title">
        <span>{{ votePercent }}%</span>
        投票率
      </p>
    </div>
    <ul>
      <li>
        <label>投票數</label>
        <span>{{ voteAmount.toLocaleString() }} 票</span>
      </li>
      <li>
        <label>無效票數</label>
        <span>{{ invalidAmount.toLocaleString() }} 票</span>
      </li>
      <li>
        <label>有效票數</label>
        <span>{{ validAmount.toLocaleString() }} 票</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LabelLayout } from 'echarts/features';
import { PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import VChart from 'vue-echarts';
import votePercentData from '@/content/votePercentData.json';

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  LabelLayout,
]);

// 投票率資料
const votePercentList = reactive(votePercentData);
const citySelected = useCitySelected();
const invalidAmount = ref(0); // 無效票數
const validAmount = ref(0); // 有效票數
const voteAmount = ref(0); // 投票數
const votePeople = ref(0); // 選舉人數
const votePercent = ref(0); // 投票率

const data = computed(() => {
  let cityObj = {};
  if (citySelected.value) {
    cityObj = votePercentList.filter((item) => {
      return item.city === citySelected.value;
    })[0];
  } else {
    cityObj = votePercentList.filter((item) => {
      return item.city === '總計';
    })[0];
  }

  invalidAmount.value = convertStringToNumber(cityObj.Column6);
  validAmount.value = convertStringToNumber(cityObj.Column5);
  voteAmount.value = convertStringToNumber(cityObj.Column7);
  votePeople.value = convertStringToNumber(cityObj.Column11);
  votePercent.value = Math.round(cityObj.Column12 * 10) / 10;

  return [
    { value: votePeople.value - voteAmount.value, name: '未投票數', itemStyle: { color: '#D9D9D9' } },
    { value: voteAmount.value, name: '投票數', itemStyle: { color: '#262E49' } },
  ];
});

// Vue-Echarts
const option = ref({
  tooltip: {
    trigger: 'item',
  },
  series: [
    {
      name: '投票率',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center',
      },
      labelLine: {
        show: false,
      },
      data,
    },
  ],
});

</script>

<style lang="scss" scoped>
.pie-row {
  display: flex;
  align-items: center;
}

.pie-title {
  flex-shrink: 0;
  text-align: center;

  span {
    display: block;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 4px;
  }
}

li {
  display: flex;
  grid-gap: 8px;
  align-items: center;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: unset;
  }

  span {
    font-size: 12px;
    font-weight: 600;
  }
}
</style>
