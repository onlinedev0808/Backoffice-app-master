<template>
  <div class="thank_you">
    <div class="thank_you__content">
      <div class="thank_you__title">
        <ui-title text="Thank you for submitting your email address"/>
        <p class="thank_you_paragraph">Please check your inbox for an invitation email from <a href="invitation@247paintings.com">invite@sypo.online</a> and fill the required information to create your account.
          After submitting all the required information,
          you can go to the login page to start selling
        </p>
      </div>
      <ui-button
          class="thank_you_button"
          text="Go to login page"
          height="60px"
          font-size="16px"
          @clicked="backToLogin"
      />
    </div>
  </div>
</template>

<script>
import UiTitle from '@/components/common/library/UiTitle.vue'
import UiButton from '@/components/common/library/UiButton.vue'

export default {
  name: 'ThankYouPage',
  components: { UiButton, UiTitle },
  methods: {
    backToLogin () {
      this.$router.push('/login')
    }
  }
}

</script>

<style scoped lang="scss">
@import "../assets/styles/mixins";

.thank_you {
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
}

.thank_you_button {
  width: 40%;
  margin: 0 auto;
}

.title {
  font-size: 50px;
}

.thank_you_paragraph {
  line-height: 20px;
}
.thank_you_paragraph a {
  color: #185dcc;
  font-weight: bold;
}

.thank_you_paragraph a:hover {
  color: #5a5e63;
}

</style>