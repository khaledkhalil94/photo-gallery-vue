<template lang="html">
  <span class="relative-date" :title="staticDate()">
    {{ relativeDate() }}
  </span>
</template>

<script>
import moment from 'moment'

export default {
  name: 'MakeDate',
  props: ['date'],
  data (){
    return {
      moment, now: null
    }
  },
  methods: {
    relativeDate() {
      return moment(parseInt(this.date)).fromNow()
    },
    staticDate(){
      return moment(parseInt(this.date)).format('MMMM Do YYYY, H:mm')
    }
  }
}
</script>

<style lang="sass" scoped>
  span
    font:
      weight: bold
    color: #b1b1b1
</style>