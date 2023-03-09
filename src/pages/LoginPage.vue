<template>
  <div class="login">
    <div class="login__content">
      <div class="login__title">
        <ui-title text="Log in to your account!"/>
      </div>
      <ui-input
        v-model="model.email"
        class="login__input"
        label="Email"
        placeholder="Your email"
        @keydown-enter="login"
      />
      <ui-input
        v-model="model.password"
        class="login__input"
        label="Password"
        placeholder="Your password for this account"
        input-type="password"
        @keydown-enter="login"
      />
      <a
        tabindex="0"
        class="login__forgot"
        v-text="'Forgot password?'"
        @click="forgotPassword"
      />
      <ui-button
        class="login_button"
        text="Log in"
        height="60px"
        font-size="16px"
        @clicked="login"
      />
    </div>
  </div>
</template>

<script>
import UiButton from '@/components/common/library/UiButton'
import UiInput from '@/components/common/library/UiInput'
import UiTitle from '@/components/common/library/UiTitle'
import { notyText } from '@/globals/toastNotyText'

export default {
  name: 'LoginPage',
  components: { UiButton, UiInput, UiTitle },
  inject: {
    $toast: {
      from: '$toast'
    }
  },
  data () {
    return {
      model: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      if (!this.model.email || !this.model.password) return

      this.$store.dispatch('authLoginUser', this.model)
        .then(() => {
          this.$toast.success(notyText.LOGIN_RESOLVE)
          this.$router.push('/')
        })
        .catch(e => {
          if (e.response.status === 401) {
            this.$toast.error(notyText.LOGIN_REJECT)
          }
        })
    },
    forgotPassword () {
      console.log('forgot password')
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/styles/mixins";

  .login {
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
      margin-bottom: 32px;
    }

    &__forgot {
      cursor: pointer;
      display: block;
      color: var(--red-color);
      margin-bottom: 32px;

      @include hoverActiveFocus {
        text-decoration: underline;
      }
    }
  }
</style>