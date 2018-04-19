<template>
    <div id="geocode">
        <h1 class="hello">{{ msg }}</h1>
        <section class="w-80-ns w-100 ph-2">
            <form id="form-geocode" class="center ph3-ns">
                <label for="street">Street Address</label>
                <input type="text" name="street" id="street" placeholder="1600 Amphitheatre Parkway" class="input-reset mv2" />

                <label for="city" class="">City, State</label>
                <input type="text" name="city" id="city" placeholder="Mountain View, CA" class="input-reset mv2" />
            </form>
        </section>
    </div>
</template>

<script>
export default {
  name: 'Geocode',
  data () {
    return {
      msg: 'GeoCode Page',
      title: 'GeoCode'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
