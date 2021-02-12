<template>
  <div class="main-content bg-default">
    <base-nav
      v-model="showMenu"
      :transparent="true"
      menu-classes="justify-content-end"
      class="navbar-horizontal navbar-main navbar-top navbar-dark"
      expand="lg"
    >
      <div slot="brand" class="navbar-wrapper">
        <b-navbar-brand to="/">
          <img src="img/brand/white.png">
        </b-navbar-brand>
      </div>

      <template>
        <div class="navbar-collapse-header">
          <b-row>
            <b-col cols="6" class="collapse-brand">
              <router-link to="/">
                <img src="img/brand/green.png">
              </router-link>
            </b-col>
            <b-col cols="6" class="collapse-close">
              <button type="button" class="navbar-toggler" @click="showMenu = false">
                <span />
                <span />
              </button>
            </b-col>
          </b-row>
        </div>
        <b-navbar-nav class="align-items-lg-center ml-lg-auto">
          <b-nav-item to="/dashboard">
            <i class="ni ni-planet" />
            <span class="nav-link-inner--text">Dashboard</span>
          </b-nav-item>
          <b-nav-item to="/register">
            <i class="ni ni-circle-08" />
            <span class="nav-link-inner--text">Register</span>
          </b-nav-item>
          <b-nav-item to="/login">
            <i class="ni ni-key-25" />
            <span class="nav-link-inner--text">Login</span>
          </b-nav-item>
          <b-nav-item to="/profile">
            <i class="ni ni-single-02" />
            <span class="nav-link-inner--text">Profile</span>
          </b-nav-item>
        </b-navbar-nav>
      </template>
    </base-nav>

    <div class="main-content">
      <zoom-center-transition
        :duration="pageTransitionDuration"
        mode="out-in"
      >
        <router-view />
      </zoom-center-transition>
    </div>

    <footer id="footer-main" class="py-5">
      <b-container>
        <b-row align-v="center" class="justify-content-xl-between">
          <b-col xl="6">
            <div class="copyright text-center text-xl-left text-muted">
              © {{ year }} <a href="https://www.creative-tim.com" class="font-weight-bold ml-1" target="_blank">Creative Tim</a>
            </div>
          </b-col>
          <b-col xl="6" class="col-xl-6">
            <b-nav class="nav-footer justify-content-center justify-content-xl-end">
              <b-nav-item href="https://www.creative-tim.com" target="_blank">
                Creative Tim
              </b-nav-item>
              <b-nav-item href="https://www.creative-tim.com/presentation" target="_blank">
                About Us
              </b-nav-item>
              <b-nav-item href="http://blog.creative-tim.com" target="_blank">
                Blog
              </b-nav-item>
              <b-nav-item href="https://www.creative-tim.com/license" target="_blank">
                License
              </b-nav-item>
            </b-nav>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>
<script>
import { BaseNav } from '@/components/Navbar/BaseNav';
import { ZoomCenterTransition } from 'vue2-transitions';

export default {
  components: {
    BaseNav,
    ZoomCenterTransition
  },
  beforeRouteUpdate(to, from, next) {
    // Close the mobile menu first then transition to next page
    if (this.showMenu) {
      this.closeMenu();
      setTimeout(() => {
        next();
      }, this.menuTransitionDuration);
    } else {
      next();
    }
  },
  props: {
    backgroundColor: {
      type: String,
      default: 'black'
    }
  },
  data() {
    return {
      showMenu: false,
      menuTransitionDuration: 250,
      pageTransitionDuration: 200,
      year: new Date().getFullYear(),
      pageClass: 'login-page'
    };
  },
  computed: {
    title() {
      return `${this.$route.name} Page`;
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.updateBackground();
      }
    }
  },
  beforeDestroy() {
    this.removeBackgroundColor();
  },
  methods: {
    toggleNavbar() {
      document.body.classList.toggle('nav-open');
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      document.body.classList.remove('nav-open');
      this.showMenu = false;
    },
    setBackgroundColor() {
      document.body.classList.add('bg-default');
    },
    removeBackgroundColor() {
      document.body.classList.remove('bg-default');
    },
    updateBackground() {
      if (!this.$route.meta.noBodyBackground) {
        this.setBackgroundColor();
      } else {
        this.removeBackgroundColor();
      }
    }
  }
};
</script>
<style lang="scss">
  $scaleSize: 0.8;
  @keyframes zoomIn8 {
    from {
      opacity: 0;
      transform: scale3d($scaleSize, $scaleSize, $scaleSize);
    }
    100% {
      opacity: 1;
    }
  }

  .main-content .zoomIn {
    animation-name: zoomIn8;
  }

  @keyframes zoomOut8 {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: scale3d($scaleSize, $scaleSize, $scaleSize);
    }
  }

  .main-content .zoomOut {
    animation-name: zoomOut8;
  }
</style>
