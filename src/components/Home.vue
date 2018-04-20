<template>
    <section class="ph3 ph5-ns pv5 bg-white mt4 cf" v-if="showWelcome">
        <article class="mw8 center br2 ba b--light-blue bg-lightest-gray">
            <div class="dt-ns dt--fixed-ns w-100">
            <div class="pa3 pa4-ns dtc-ns v-mid">
                <div>
                <h2 class="fw4 black mt0 mb3">GeoCode App</h2>
                <p class="black-70 measure lh-copy mv0">
                    Web application for querying geocode data.
                </p>
                </div>
            </div>
            <div class="pa3 pa4-ns dtc-ns v-mid">
                <p v-on:click="getStarted" class="nav-item no-underline f6 tc db w-100 pv3 bg-animate bg-dark-green hover-bg-green white br2">Get Started</p>
            </div>
            </div>
        </article>
    </section>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      showWelcome: true
    }
  },
  methods: {
    getStarted () {
      this.$router.push('geocode')
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.path !== '/') {
        this.showWelcome = false
      } else {
        this.showWelcome = true
      }
    }
  }
}
</script>
