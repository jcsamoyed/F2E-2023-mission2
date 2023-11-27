<template>
  <ul>
    <li v-for="(item, index) in partyList" :key="index">
      <div class="num" :style="{ backgroundColor: item.color }">
        <span>{{ item.num }}</span>
      </div>
      <div class="party-box" :style="{ borderColor: item.color }">
        <div class="party-name">
          {{ item.partyName }}
        </div>
        <div class="candidate">
          {{ item.candidate }}
        </div>
      </div>
      <div class="vote-box">
        <div class="vote-percent">
          {{ item.votePercent }} %
        </div>
        <div class="vote-amount">
          {{ item.voteAmount.toLocaleString() }} 票
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts" setup>
interface IPartyList {
  num: string,
  partyName: string;
  candidate: string;
  votePercent: string;
  voteAmount: number,
  color: string,
}

defineProps<{
  partyList: Array<IPartyList>
}>();

</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-direction: column;
  grid-gap: 8px;
}

li {
  display: flex;
}

.num {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: #84CB98;
  color: #fff;
  font-size: 12px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 12px;
}

.party-box {
  width: 37%;
  padding-right: 18px;
  margin-right: 20px;
  border-right: solid 2px;
}

.party-name {
  font-weight: 600;
  margin-bottom: 4px;
  white-space: nowrap;
}

.candidate {
  font-size: 12px;
  white-space: nowrap;
}

.vote-box {
  flex-shrink: 0;
}

.vote-percent {
  font-weight: 600;
  margin-bottom: 4px;
}

.vote-amount {
  font-size: 12px;
}
</style>
