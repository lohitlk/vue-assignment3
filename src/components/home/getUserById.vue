<template>
  <div class="container">
    <div>
      <img :src="userDetails.avatar" alt="img" class="profile">
    </div>
    <p class="profile-name"><b>Name:</b> <span>{{userDetails.first_name }} {{userDetails.last_name}}</span></p>
    <!-- <p class="id"> Id: <span>{{userDetails.id }}</span></p> -->
    <p class="about"><b>Email:</b> <span>{{userDetails.email }}</span></p>
    <div class="butt1">
  <input type="submit" class="butt" value="Home page" @click="this.$router.back()"/>
  </div>
  </div>
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
      var id;
      this.userDetails = this.$route.params.details ? JSON.parse(this.$route.params.details):null;
    console.log("userdetails||", this.userDetails)
    id = this.userDetails.id;
    console.log(id)
    }

}
</script>

<style scoped>
.container{
  margin: 100px auto;
  background: #251c53;
  color: #f7f7f8e3;
  border-radius: 5px;
  padding-top: -60px;
  width: 480px;
  /* text-align: center; */
  box-shadow: 0 10px 20px -10px rgba(22, 16, 16, 0.75);
}

.profile{
  height: 120x;
  width: 120px;
  border-radius: 50%;
  margin: -55px 0 0 -175px;
  border: 1px solid #251c53;
  padding: 7px;
  background: #251c53;
  transform: translate(-150px, 40px);
}
.profile-name{
  font-size: 25px;
  font-weight: bold;
  margin: -35px 0 0 12px;
}
.about{
  padding: 35px;
  line-height: 21px;
}
.id{
  font-size: 15px;
}
.butt{
  background: #b3b8cd;
  border-radius: 20px;
  height: 30px;
  width: 120px;
  color: #251c53;
  font-weight: bold;
  
}
.butt1{
  padding-bottom: 20px;
}
</style>