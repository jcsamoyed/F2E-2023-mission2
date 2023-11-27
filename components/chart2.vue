<template>
  <div>
    <client-only>
      <v-chart class="chart" :option="option" style="width: 120px;height:120px;" :auto-resize="true" />
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
const PFPAmount = ref(0); // 親民黨得票數
const KMTAmount = ref(0); // 國民黨得票數
const DPPAmount = ref(0); // 民進黨得票數

const cityObj = votePercentList.filter((item) => {
  return item.city === '總計';
})[0];

PFPAmount.value = convertStringToNumber(cityObj.Column2);
KMTAmount.value = convertStringToNumber(cityObj.Column3);
DPPAmount.value = convertStringToNumber(cityObj.Column4);

const data = computed(() => {
  return [
    { value: DPPAmount.value, name: '民主進步黨', itemStyle: { color: '#84CB98' } },
    { value: KMTAmount.value, name: '中國國民黨', itemStyle: { color: '#8894D8' } },
    { value: PFPAmount.value, name: '親民黨', itemStyle: { color: '#DFA175' } },
  ];
});

// partyList
const partyList = reactive([
  {
    num: '3',
    partyName: '民主進步黨',
    candidate: '蔡英文｜賴清德',
    votePercent: '57.13',
    voteAmount: DPPAmount.value,
    color: '#84CB98',
  },
  {
    num: '2',
    partyName: '中國國民黨',
    candidate: '韓國瑜｜張善政',
    votePercent: '38.61',
    voteAmount: KMTAmount.value,
    color: '#8894D8',
  },
  {
    num: '1',
    partyName: '親民黨',
    candidate: '宋楚瑜｜余湘',
    votePercent: '4.26',
    voteAmount: PFPAmount.value,
    color: '#DFA175',
  },
]);

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
.chart {
  margin-top: 20px;
}
</style>
