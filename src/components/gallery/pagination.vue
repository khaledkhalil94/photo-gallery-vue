<template lang="html">
  <div class="pagination">
    <button class="ui icon button blue disabled">
      <i class="angle double left icon"></i>
    </button>
    <div class="ui buttons">
      <button class="ui icon button blue disabled">
        <i class="angle left icon"></i>
      </button>
      <div class="or" data-text="1"></div>
      <button class="ui icon button blue disabled">
        <i class="angle right icon"></i>
      </button>
    </div>
    <button class="ui icon button blue disabled">
      <i class="angle double right icon"></i>
    </button>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped lang="sass">
  button.icon
    margin: 0 1px
  
  .pagination
    text-align: center
    margin-top: 50px

</style>