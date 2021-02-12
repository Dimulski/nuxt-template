<template>
  <nav id="sidenav-main" class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white">
    <div class="container-fluid">
      <!--Toggler-->
      <navbar-toggle-button @click.native="showSidebar" />
      <router-link class="navbar-brand" to="/">
        <img :src="logo" class="navbar-brand-img" alt="...">
      </router-link>

      <slot name="mobile-right">
        <ul class="nav align-items-center d-md-none">
          <base-dropdown class="nav-item" menu-on-right tag="li" title-tag="a">
            <a
              slot="title-container"
              class="nav-link nav-link-icon"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="ni ni-bell-55" />
            </a>

            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider" />
            <a class="dropdown-item" href="#">Something else here</a>
          </base-dropdown>
          <base-dropdown class="nav-item" menu-on-right tag="li" title-tag="a">
            <a slot="title-container" class="nav-link" href="#" role="button">
              <div class="media align-items-center">
                <span class="avatar avatar-sm rounded-circle">
                  <img alt="Image placeholder" src="img/theme/team-1.jpg">
                </span>
              </div>
            </a>

            <div class=" dropdown-header noti-title">
              <h6 class="text-overflow m-0">
                Welcome!
              </h6>
            </div>
            <router-link to="/profile" class="dropdown-item">
              <i class="ni ni-single-02" />
              <span>My profile</span>
            </router-link>
            <router-link to="/profile" class="dropdown-item">
              <i class="ni ni-settings-gear-65" />
              <span>Settings</span>
            </router-link>
            <router-link to="/profile" class="dropdown-item">
              <i class="ni ni-calendar-grid-58" />
              <span>Activity</span>
            </router-link>
            <router-link to="/profile" class="dropdown-item">
              <i class="ni ni-support-16" />
              <span>Support</span>
            </router-link>
            <div class="dropdown-divider" />
            <a href="#!" class="dropdown-item">
              <i class="ni ni-user-run" />
              <span>Logout</span>
            </a>
          </base-dropdown>
        </ul>
      </slot>
      <slot />
      <div v-show="$sidebar.showSidebar" id="sidenav-collapse-main" class="navbar-collapse collapse show">
        <div class="navbar-collapse-header d-md-none">
          <div class="row">
            <div class="col-6 collapse-brand">
              <router-link to="/">
                <img :src="logo">
              </router-link>
            </div>
            <div class="col-6 collapse-close">
              <navbar-toggle-button @click.native="closeSidebar" />
            </div>
          </div>
        </div>

        <ul class="navbar-nav">
          <slot name="links" />
        </ul>
        <!--Divider-->
        <hr class="my-3">
        <!--Heading-->
        <h6 class="navbar-heading text-muted">
          Documentation
        </h6>
        <!--Navigation-->
        <ul class="navbar-nav mb-md-3">
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www.creative-tim.com/learning-lab/bootstrap-vue/alerts/argon-dashboard"
            >
              <i class="ni ni-spaceship" /> Getting started
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www.creative-tim.com/learning-lab/bootstrap-vue/colors/argon-dashboard"
            >
              <i class="ni ni-palette" /> Foundation
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www.creative-tim.com/learning-lab/bootstrap-vue/alerts/argon-dashboard"
            >
              <i class="ni ni-ui-04" /> Components
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import NavbarToggleButton from '@/components/NavbarToggleButton';

export default {
  name: 'Sidebar',
  components: {
    NavbarToggleButton
  },
  provide() {
    return {
      autoClose: this.autoClose
    };
  },
  props: {
    logo: {
      type: String,
      default: 'img/brand/green.png',
      description: 'Sidebar app logo'
    },
    autoClose: {
      type: Boolean,
      default: true,
      description: 'Whether sidebar should autoclose on mobile when clicking an item'
    }
  },
  beforeDestroy() {
    if (this.$sidebar.showSidebar) {
      this.$sidebar.showSidebar = false;
    }
  },
  methods: {
    closeSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    showSidebar() {
      this.$sidebar.displaySidebar(true);
    }
  }
};
</script>
