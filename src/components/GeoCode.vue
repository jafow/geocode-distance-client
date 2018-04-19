<template>
    <div id="geocode">
        <h1>{{ title }}</h1>
        <section class="mw9 center w-50-ns w-100 pa3 ba b--light-blue cf mb4">
            <p> {{description }} </p>
            <form id="form-geocode" class="center mt2 ph3-ns w-80">
                <div class="mt5">
                    <label class="fl db ph3 lh-copy" for="street">Street Address</label>
                    <input type="text" name="street" id="street" placeholder="1600 Amphitheatre Parkway" class="input-reset mv2 h2 bg-transparent ba b--black w-90 measure" />
                </div>
                <div class="mt3">
                    <label class="fl db ph3 lh-copy" for="city">City, State</label>
                    <input type="text" name="city" id="city" placeholder="Mountain View, CA" class="input-reset mv2 h2 bg-transparent ba b--black w-90 measure" />
                </div>
                <div class="mt3">
                    <button class="btn br-15 bg-dark-green white fw6 pv2 ph3 fr bn shadow-3" v-on:click="submit">Submit</button>
                </div>
            </form>
            <p class="response-msg">{{response}}</p>
        </section>
    </div>
</template>

<script>
export default {
  name: 'Geocode',
  data () {
    return {
      description: 'Enter an address to get its latitude and longitude:',
      title: 'GeoCode',
      response: null
    }
  },
  methods: {
    displayMessage: function displayMessage (msg) {
      if (!msg) {
        this.response = `Error: Invalid input`
        return this.response
      }
      if (msg.lat || msg.lon) {
        this.response = `The latitude is ${msg.lat} and longitude is ${msg.lng}`
      } else {
        this.response = `There was an error in this request: ${msg}`
      }
      return this.response
    },
    submit: function submit () {
      let self = this
      let formInput = new FormData(document.getElementById('form-geocode'))
      fetch('//localhost:4000/geocode', {
        method: 'POST',
        body: formInput,
        mode: 'cors'
      })
        .then(function onFetchSuccess (res) {
          return res.json()
        })
        .then(function handleSuccess (json) {
          if (json.error) {
            return self.displayMessage(json.error)
          }
          return self.displayMessage(json.location)
        })
        .catch(function onFetchErr (err) {
          return self.displayMessage(err.error)
        })
    }
  }
}

</script>

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
