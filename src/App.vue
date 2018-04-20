<template>
  <div id="app" v-on:click="closeToast">
    <header class="header w-100 h4 h3-ns bg-dark-green">
        <h2 class="header-title h4 h3-ns white mv0 pv3">{{ title }}</h2>
        <div class="menu absolute top-1 left-1" v-on:click.stop="toggleToast" v-bind:class="{pressed: toast === 'expand'}">
            <img class="menu-icon" src="./assets/menu-white.png" alt="menu icon" />
        </div>
    </header>
    <transition name="toast">
        <div class="toaster w-30-ns w-80" v-if="toast === 'expand'">
            <nav class="nav">
                <ul class="list pl0 mt0">
                    <router-link to="/" tag="li" class="nav-item h3">
                        Home
                    </router-link>
                    <router-link to="/geocode" tag="li" class="nav-item h3 hover-bg-green">
                        GeoCode
                    </router-link>
                    <router-link to="/reverse" tag="li" class="nav-item h3 hover-bg-green">
                        Reverse
                    </router-link>
                    <router-link to="/coords" tag="li" class="nav-item h3 hover-bg-green">
                        Coords
                    </router-link>
                </ul>
            </nav>
        </div>
    </transition>

    <router-view/>

    <footer class="pv4 ph3 ph5-m ph6-l mid-gray absolute bottom-0">
        <small class="f6 db tc">© 2018 <b class="ttu">Jared Fowler</b>., All Rights Reserved</small>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      title: 'GeoCode App',
      toast: 'collapse',
      showWelcome: true
    }
  },
  methods: {
    toggleToast () {
      let newToast = this.toast === 'expand' ? 'collapse' : 'expand'
      this.toast = newToast
      return this.toast
    },
    closeToast () {
      if (this.toast === 'expand') {
        this.toast = 'collapse'
      }
      return this.toast
    },
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
      this.toggleToast()
    }
  }

}
</script>

<style>
body {
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    background: #ededed;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
    position: relative;
    box-shadow: 0 4px 3px rgba(0, 0, 0, 0.2);
}
.menu {
    border-radius: 4px;
}
.menu.pressed {
    background: rgba(124, 255, 187, 0.4);
}
.toaster {
  height: 100%;
  background: #efefef;
  border: 1px solid gray;
  float: left;
  position: absolute;
  transform: translateX(0%);
  z-index: 1;
}
.toast-enter-active, .toast-leave-active {
    transition: transform 100ms 80ms ease-in;
}
.toast-enter, .toast-leave-to {
  transform: translateX(-100%);
}
.selected {
  background: lightgray;
}
.router-link-exact-active {
  background: lightgray;
}
.nav-item {
  cursor: pointer;
}
</style>
