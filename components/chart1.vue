<template>
  <div class="chart">
    <div class="pie-row">
      <client-only>
        <v-chart :option="option" style="width: 120px;height:120px;" :auto-resize="true" />
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

// 所選縣市
const citySelected = useCitySelected();

const cityObj = computed(() => {
  if (citySelected.value) {
    return votePercentList.filter((item) => {
      return item.city === citySelected.value;
    })[0];
  }
  return votePercentList.filter((item) => {
    return item.city === '總計';
  })[0];
});

const invalidAmount = computed(() => convertStringToNumber(cityObj.value.Column6));
const validAmount = computed(() => convertStringToNumber(cityObj.value.Column5));
const voteAmount = computed(() => convertStringToNumber(cityObj.value.Column7));
const votePeople = computed(() => convertStringToNumber(cityObj.value.Column11));
const votePercent = computed(() => Math.round(cityObj.value.Column12 * 10) / 10);

const data = computed(() => {
  return [
    { value: voteAmount.value, name: '投票數', itemStyle: { color: '#262E49' } },
    { value: votePeople.value - voteAmount.value, name: '未投票數', itemStyle: { color: '#D9D9D9' } },
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

@media (max-width:1024px) {
  .chart {
    display: flex;
    align-items: center;
    grid-gap: 12px;
    margin-bottom: 20px;
  }
}
</style>
