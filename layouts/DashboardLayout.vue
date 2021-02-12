<template>
  <div class="wrapper">
    <notifications />
    <side-bar>
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Dashboard',
            path: '/dashboard',
            icon: 'ni ni-tv-2 text-primary',
          }"
        />

        <sidebar-item
          :link="{
            name: 'Icons',
            path: '/icons',
            icon: 'ni ni-planet text-blue'
          }"
        />

        <sidebar-item
          :link="{
            name: 'Maps',
            path: '/maps',
            icon: 'ni ni-pin-3 text-orange'
          }"
        />

        <sidebar-item
          :link="{
            name: 'User Profile',
            path: '/profile',
            icon: 'ni ni-single-02 text-yellow'
          }"
        />

        <sidebar-item
          :link="{
            name: 'Tables',
            path: '/tables',
            icon: 'ni ni-bullet-list-67 text-red'
          }"
        />

        <sidebar-item
          :link="{
            name: 'Login',
            path: '/login',
            icon: 'ni ni-key-25 text-info'
          }"
        />
        <sidebar-item
          :link="{
            name: 'Register',
            path: '/register',
            icon: 'ni ni-circle-08 text-pink'
          }"
        />
      </template>

      <template slot="links-after">
        <hr class="my-3">
        <h6 class="navbar-heading p-0 text-muted">
          Documentation
        </h6>

        <b-nav class="navbar-nav mb-md-3">
          <b-nav-item
            href="https://www.creative-tim.com/learning-lab/bootstrap-vue/quick-start/argon-dashboard"
          >
            <i class="ni ni-spaceship" />
            <b-nav-text class="p-0">
              Getting started
            </b-nav-text>
          </b-nav-item>
          <b-nav-item href="https://www.creative-tim.com/learning-lab/bootstrap-vue/colors/argon-dashboard">
            <i class="ni ni-palette" />
            <b-nav-text class="p-0">
              Foundation
            </b-nav-text>
          </b-nav-item>
          <b-nav-item href="https://www.creative-tim.com/learning-lab/bootstrap-vue/avatar/argon-dashboard">
            <i class="ni ni-ui-04" />
            <b-nav-text class="p-0">
              Components
            </b-nav-text>
          </b-nav-item>
        </b-nav>
      </template>
    </side-bar>
    <div class="main-content">
      <dashboard-navbar :type="$route.meta.navbarType" />

      <div @click="$sidebar.displaySidebar(false)">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view />
        </fade-transition>
      </div>
      <content-footer v-if="!$route.meta.hideFooter" />
    </div>
  </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from 'perfect-scrollbar';
// import 'perfect-scrollbar/css/perfect-scrollbar.css';

import { FadeTransition } from 'vue2-transitions';
// import DashboardContent from '@/components/Dashboard/DashboardContent';
import DashboardNavbar from '@/components/Dashboard/DashboardNavbar';
import ContentFooter from '@/components/Dashboard/ContentFooter';

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    // DashboardContent,
    FadeTransition
  },
  mounted() {
    this.initScrollbar();
  },
  methods: {
    initScrollbar() {
      const isWindows = navigator.platform.startsWith('Win');
      if (isWindows) {
        initScrollbar('sidenav');
      }
    }
  }
};
</script>
<style lang="scss">
</style>
