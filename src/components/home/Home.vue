<template>
  <div>
    <h1>User data</h1>
    <div class="container">
    <div class="view" v-for="(Userele, index) in userData" :key="index">
      <div class="card" @click="getFunction(Userele)">
        <img :src="Userele.avatar" />
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      userData: [],
    };
  },
  methods: {
    getFunction(Userele) {
      this.$router.push({
        name: "getUserById",
        params: { id: Userele.id, details: JSON.stringify(Userele) },
      });
    },
  },
  async created() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const data = await fetch(
      "https://reqres.in/api/users?page=2",
      requestOptions
    );
    const result = await data.json();
    this.userData = result.data;
    console.log("data||", this.userData);
  },
};
</script>

<style scoped>
.container{
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  padding-left: 30px;

}
img{
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: contain;
}
.card {
  border: 2px solid black;
  border-radius: 20px;
  width: 200px;
  height: 200px;
  margin: 20px;
   
  box-shadow: 0 4px 8px 0 rgba(114, 86, 86, 0.623), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.view{
  padding-left: 20%;
}


* {
  box-sizing: border-box;
}
</style>