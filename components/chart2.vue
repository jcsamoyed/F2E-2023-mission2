<template>
  <div class="chart">
    <client-only>
      <v-chart class="pie" :option="option" :auto-resize="true" />
    </client-only>
    <PartyList :party-list="partyList" />
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

// 政黨得票數資料
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

const PFPAmount = computed(() => convertStringToNumber(cityObj.value.Column2));
const KMTAmount = computed(() => convertStringToNumber(cityObj.value.Column3));
const DPPAmount = computed(() => convertStringToNumber(cityObj.value.Column4));
const validAmount = computed(() => convertStringToNumber(cityObj.value.Column5));

const data = computed(() => {
  return [
    { value: DPPAmount.value, name: '民主進步黨', itemStyle: { color: '#84CB98' } },
    { value: KMTAmount.value, name: '中國國民黨', itemStyle: { color: '#8894D8' } },
    { value: PFPAmount.value, name: '親民黨', itemStyle: { color: '#DFA175' } },
  ];
});

// partyList
const partyList = computed(() => {
  return [
    {
      num: '3',
      partyName: '民主進步黨',
      candidate: '蔡英文｜賴清德',
      votePercent: Math.round(DPPAmount.value / validAmount.value * 100 * 100) / 100,
      voteAmount: DPPAmount.value,
      color: '#84CB98',
    },
    {
      num: '2',
      partyName: '中國國民黨',
      candidate: '韓國瑜｜張善政',
      votePercent: Math.round(KMTAmount.value / validAmount.value * 100 * 100) / 100,
      voteAmount: KMTAmount.value,
      color: '#8894D8',
    },
    {
      num: '1',
      partyName: '親民黨',
      candidate: '宋楚瑜｜余湘',
      votePercent: Math.round(PFPAmount.value / validAmount.value * 100 * 100) / 100,
      voteAmount: PFPAmount.value,
      color: '#DFA175',
    },
  ];
});

// Vue-Echarts
const option = ref({
  tooltip: {
    trigger: 'item',
  },
  series: [
    {
      name: '政黨得票數',
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
.pie {
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  margin-top: 20px;
}

@media (max-width:1024px) {
  .chart {
    display: flex;
    align-items: center;
  }

  .pie {
    width: 100px;
    height: 100px;
    margin-left: -10px;
  }
}
</style>
