<template>
  <card>
    <b-row slot="header" align-v="center">
      <b-col cols="8">
        <h3 class="mb-0">
          Edit profile
        </h3>
      </b-col>
      <b-col cols="4" class="text-right">
        <a href="#!" class="btn btn-sm btn-primary">Settings</a>
      </b-col>
    </b-row>

    <b-form @submit.prevent="updateProfile">
      <h6 class="heading-small text-muted mb-4">
        User information
      </h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col lg="6">
            <base-input
              v-model="user.username"
              type="text"
              label="Username"
              placeholder="Username"
            />
          </b-col>
          <b-col lg="6">
            <base-input
              v-model="user.email"
              type="email"
              label="Email address"
              placeholder="mike@email.com"
            />
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <base-input
              v-model="user.firstName"
              type="text"
              label="First Name"
              placeholder="First Name"
            />
          </b-col>
          <b-col lg="6">
            <base-input
              v-model="user.lastName"
              type="text"
              label="Last Name"
              placeholder="Last Name"
            />
          </b-col>
        </b-row>
      </div>
      <hr class="my-4">

      <!-- Address -->
      <h6 class="heading-small text-muted mb-4">
        Contact information
      </h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col md="12">
            <base-input
              v-model="user.address"
              type="text"
              label="Address"
              placeholder="Home Address"
            />
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="4">
            <base-input
              v-model="user.city"
              type="text"
              label="City"
              placeholder="City"
            />
          </b-col>
          <b-col lg="4">
            <base-input
              v-model="user.country"
              type="text"
              label="Country"
              placeholder="Country"
            />
          </b-col>
          <b-col lg="4">
            <base-input
              v-model="user.postalCode"
              label="Postal Code"
              placeholder="ZIP Code"
            />
          </b-col>
        </b-row>
      </div>

      <hr class="my-4">
      <!-- Description -->
      <h6 class="heading-small text-muted mb-4">
        About me
      </h6>
      <div class="pl-lg-4">
        <b-form-group label="About Me" label-class="form-control-label" class="mb-0" label-for="about-form-textaria">
          <!--  <label class="form-control-label">About Me</label> -->
          <b-form-textarea id="about-form-textaria" rows="4" value="A beautiful premium dashboard for BootstrapVue." placeholder="A few words about you ..." />
        </b-form-group>
      </div>
    </b-form>
  </card>
</template>
<script>
export default {
  data() {
    return {
      user: {
        company: 'Creative Code Inc.',
        username: 'michael23',
        email: '',
        firstName: 'Mike',
        lastName: 'Andrew',
        address: 'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09',
        city: 'New York',
        country: 'USA',
        postalCode: '',
        aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci metus.'
      }
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    }
  }
};
</script>
<style></style>
