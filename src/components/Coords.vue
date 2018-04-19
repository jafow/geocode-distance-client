<template>
    <div id="coords">
        <h1>{{ title }}</h1>
        <section class="mw9 center w-50-ns w-100 pa3 ba b--light-blue cf">
            <div class="description">{{ description }}</div>
            <form id="form-coords" class="center mt2 ph3-ns w-80">
                <div class="mt5">
                    <label for="lat1" class="fl db ph3 lh-copy">Latitude 1</label>
                    <input type="text" name="lat1" id="lat1" placeholder="37.4224764" class="input-reset mv2 h2 bg-transparent ba b--black w-90 measure" />
                </div>
                <div class="mt3">
                    <label for="long1" class="fl db ph3 lh-copy">Longitude 1</label>
                    <input type="text" name="lat1" id="lat1" placeholder="37.4224764" class="input-reset mv2 h2 bg-transparent ba b--black w-90 measure" />
                </div>
                <div class="mt3">
                    <label for="lat2" class="fl db ph3 lh-copy">Latitude 2</label>
                    <input type="text" name="lat2" id="lat2" placeholder="37.4224764" class="input-reset mv2 h2 bg-transparent ba b--black w-90 measure" />
                </div>
                <div class="mt3">
                    <label for="long2" class="fl db ph3 lh-copy">Longitude 2</label>
                    <input type="text" name="long2" id="long2" placeholder="37.4224764" class="input-reset mv2 h2 bg-transparent ba b--black w-90 measure" />
                </div>
                <button class="btn br-15 bg-dark-green white fw6 pv2 ph3 fr bn shadow-3" v-on:click="submit">Submit</button>
            </form>
            <p class="response-msg">{{response}}</p>
        </section>
    </div>
</template>

<script>
export default {
  name: 'Coords',
  data () {
    return {
      description: 'Enter two coordinates (lat/long) to receive the distance in miles between:',
      title: 'Distance',
      response: null
    }
  },
  methods: {
    displayMessage: function displayMessage (msg) {
      if (!msg) {
        this.response = `Error: Invalid input`
        return this.response
      }
      if (msg.SUCCESS) {
        this.response = `The distance between is: ${msg.distance} miles`
      } else {
        this.response = `There was an error in this request: ${msg}`
      }
      return this.response
    },
    submit: function submit () {
      let self = this
      let formInput = new FormData(document.getElementById('form-reverse'))
      fetch('//localhost:4000/address', {
        method: 'POST',
        body: formInput,
        mode: 'cors'
      })
        .then(function onFetchSuccess (res) {
          if (res.ok) {
            let json = res.json()
            return json
          }
          return res.error
        })
        .then(function handleSuccess (json) {
          if (json.error) {
            return self.displayMessage(json.error)
          }
          return self.displayMessage(json)
        })
        .catch(function onFetchErr (err) {
          return self.displayMessage(err.error)
        })
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
