<template>
    <div>
        Cart{{count*4}}<br/>
        Cart{{count}}
    </div>

</template>
<script>
export default {
    computed:{
    // store 中state 内的数据作为组件的计算属性使用
    count(){
      console.log(this.$store)
      return this.$store.state.count;
    //   return this.$store.state;
    }
  }
}
</script>
<style>
  
</style>