<template>
  <div></div>
</template>

<script>

export default {
    name: 'getUserById',
    data(){
      return{
        userDetails : " "
      }
    },
    created(){
      this.userDetails = this.$route.params.details ? JSON.parse(this.$route.params.details):null;
    console.log("entered into getuser")
    }

}
</script>

<style>
</style>