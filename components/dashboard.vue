<template>
  <section>
    <div class="card" :style="{ backgroundColor: cityBgColor, borderColor: cityColor }">
      <h3>{{ citySelected }}</h3>
      <PartyList :party-list="partyList" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import votePercentData from '@/content/votePercentData.json';

// 政黨得票數資料
const votePercentList = reactive(votePercentData);

// 所選縣市
const citySelected = useCitySelected();

// 所選縣市物件
const cityObj = computed(() => {
  return votePercentList.filter((item) => {
    return item.city === citySelected.value;
  })[0];
});

// 親民黨
const PFPAmount = computed(() => {
  return {
    amount: convertStringToNumber(cityObj.value.Column2),
    percent: Math.round(convertStringToNumber(cityObj.value.Column2) / convertStringToNumber(cityObj.value.Column5) * 100 * 10) / 10,
  };
});

// 國民黨
const KMTAmount = computed(() => {
  return {
    amount: convertStringToNumber(cityObj.value.Column3),
    percent: Math.round(convertStringToNumber(cityObj.value.Column3) / convertStringToNumber(cityObj.value.Column5) * 100 * 10) / 10,
  };
});

// 民進黨
const DPPAmount = computed(() => {
  return {
    amount: convertStringToNumber(cityObj.value.Column4),
    percent: Math.round(convertStringToNumber(cityObj.value.Column4) / convertStringToNumber(cityObj.value.Column5) * 100 * 10) / 10,
  };
});

// partyList
const partyList = computed(() => {
  const originPartyList = [
    {
      num: '3',
      partyName: '民主進步黨',
      candidate: '蔡英文｜賴清德',
      votePercent: DPPAmount.value.percent,
      voteAmount: DPPAmount.value.amount,
      color: '#84CB98',
      bgColor: '#EDF7F0',
    },
    {
      num: '2',
      partyName: '中國國民黨',
      candidate: '韓國瑜｜張善政',
      votePercent: KMTAmount.value.percent,
      voteAmount: KMTAmount.value.amount,
      color: '#8894D8',
      bgColor: '#EDEFF9',
    },
    {
      num: '1',
      partyName: '親民黨',
      candidate: '宋楚瑜｜余湘',
      votePercent: PFPAmount.value.percent,
      voteAmount: PFPAmount.value.amount,
      color: '#DFA175',
      bgColor: '#FAF1EA',
    },
  ];

  // 將政黨得票數由高到低排序
  const sortPartyList = originPartyList.sort((a, b) => {
    return b.voteAmount - a.voteAmount;
  });

  return sortPartyList;
});

// 卡片顏色
const cityColor = computed(() => partyList.value[0].color);
const cityBgColor = computed(() => partyList.value[0].bgColor);
</script>

<style lang="scss" scoped>
section {
  width: 260px;
  box-sizing: border-box;
  flex-shrink: 0;
}

.card {
  padding: 12px 20px;
  background-color: #EDF7F0;
  border: solid 2px #84CB98;
  border-radius: 8px;
}

h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
}
</style>
