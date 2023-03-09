<template>
  <div class="signup">
    <div class="signup__content">
      <div class="signup__title">
        <ui-title text="Enter email to get invitation"/>
      </div>
      <ui-input
          v-model="model.email"
          class="signup__input"
          label="Email"
          placeholder="Your email"
          @keydown-enter="signupInvite"
      />
      <div v-if="model.errors && model.errors.email" class="email_error">
        {{model.errors.email}}
      </div>
      <br>
      <ui-button
          class="signup_button"
          text="Send invitation"
          height="60px"
          font-size="16px"
          @clicked="signupInvite"
      />
    </div>
  </div>
</template>

<script>
import UiButton from '@/components/common/library/UiButton'
import UiTitle from '@/components/common/library/UiTitle'
import { axios, BASE_URL } from '@/api/main'
import UiInput from '@/components/common/library/UiInput.vue'

export default {
  name: 'SignupInvitationPage',
  components: { UiInput, UiButton, UiTitle },
  inject: {
    $toast: {
      from: '$toast'
    }
  },
  data () {
    return {
      model: {
        email: '',
        errors: null
      }
    }
  },
  methods: {
    signupInvite () {
      const errors = {}

      if (!this.model.email) {
        errors.email = '*Email is required'
      } else if (!/^[^@]+@\w+(\.\w+)+\w$/.test(this.model.email)) {
        errors.email = '*Invalid email'
      }
      if (Object.keys(errors).length > 0) {
        this.model.errors = errors
        return
      } else {
        this.errors = null
      }
      axios.post(`${BASE_URL}/auth/signup`, { email: this.model.email, from: this.$route.query.from })
        .then(() => {
          this.$router.push('/success')
        })
    }, catch (e) {
      console.error(e)
      return e
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/mixins";

.signup {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  &__content {
    max-width: 600px;
    width: 100%;
    padding: 0 10px;
  }

  &__title {
    position: relative;
    text-align: center;
    margin-bottom: 25px;
    padding-bottom: 40px;

    .error {
      position: absolute;
      white-space: nowrap;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }

  &__input {
    margin-bottom: 15px;
  }
 }

.email_error {
  color: red;
  font-size: 15px;
}
</style>