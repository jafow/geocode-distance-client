<template>
    <div id="reverse">
        <h1>{{ title }}</h1>
        <section class="mw9 center w-50-ns w-100 pa3 ba b--light-blue cf">
            <p>{{ description }}</p>
            <form id="form-reverse" class="center ph3-ns">
                <div class="mt5">
                    <label class="fl db ph3 lh-copy"  for="lat">Latitude</label>
                    <input type="text" name="lat" id="lat" placeholder="37.4224764" class="input-reset mv2 h2 bg-transparent ba b--black w-90 measure" />

                </div>
                <div class="mt5">
                    <label class="fl db ph3 lh-copy" for="long">Longitude</label>
                    <input type="text" name="long" id="long" placeholder="-122.0842499" class="input-reset mv2 h2 bg-transparent ba b--black w-90 measure" />
                </div>
                <button class="btn br-15 bg-dark-green white fw6 pv2 ph3 fr bn shadow-3" v-on:click="submit">Submit</button>
            </form>
            <p class="response-msg">{{response}}</p>
        </section>
    </div>
</template>

<script>
export default {
  name: 'Reverse',
  data () {
    return {
      title: 'Reverse',
      description: 'Enter latitude and longitude to receive its street address:',
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
        this.response = `The address is: ${msg.full_address}`
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

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
