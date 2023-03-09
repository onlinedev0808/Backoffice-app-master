<template>
  <div class="registration">
    <div class="registration__content">
      <div class="registration__title">
        <ui-title text="You have been invited!"/>
      </div>
      <div class="registration__row">
        <ui-input
          v-model="model.first_name"
          :height="45"
          class="registration__input"
          label="Name"
          placeholder="Recipient’s name"
          required
          @keydown-enter="registration"
        />
        <ui-input
          v-model="model.last_name"
          :height="45"
          class="registration__input"
          label="Last name"
          placeholder="Recipient’s last name"
          required
          @keydown-enter="registration"
        />
      </div>
      <ui-select
        v-model="model.countries"
        class="registration__input"
        label="Country (Optional)"
        :height="45"
        id="country"
        placeholder="Choose country"
        @keydown-enter="registration"
        @option-selected="optionSelected"
      />
      <ui-input
        v-model="model.password"
        :height="45"
        class="registration__input"
        label="Password"
        input-type="password"
        placeholder="Create a password"
        required
        @keydown-enter="registration"
      />
      <ui-input
        v-model="model.phone"
        :height="45"
        class="registration__input"
        label="Number (Optional)"
        input-type="text"
        placeholder="+ 1 234 44422"
        @keydown-enter="registration"
      />
<!--     TODO his plugin have some bugs -->
<!--      <tel-number-input -->
<!--        v-model="model.number" -->
<!--        :height="45" -->
<!--        label="Number (Optional)" -->
<!--        class="registration__input" -->
<!--      /> -->
      <ui-select
        v-model="model.answers"
        class="registration__input"
        label="How did you find us?"
        :height="45"
        id="answer"
        placeholder="Choose your answer"
        @keydown-enter="registration"
        @option-selected="selectAnswer"
      />
      <ui-button
        class="registration_button"
        text="Accept the invitation"
        height="45px"
        font-size="16px"
        @clicked="registration"
      />
    </div>
  </div>
</template>

<script>
import UiButton from '@/components/common/library/UiButton'
import UiInput from '@/components/common/library/UiInput'
import UiTitle from '@/components/common/library/UiTitle'
import UiSelect from '@/components/common/library/UiSelect'
import { getLSItem } from '@/utils/helpers/helpers'
import allCountries from '@/utils/countries_answers/allCountries'
import answers from '@/utils/countries_answers/answers'
// import TelNumberInput from '@/components/common/TelNumberInput'

export default {
  name: 'RegistrationPage',
  components: { UiSelect, UiButton, UiInput, UiTitle },
  data () {
    return {
      error: '',
      model: {
        first_name: '',
        last_name: '',
        // TODO will be deleted
        countries: [
          ...allCountries
        ],
        password: '',
        phone: '',
        answers: [
          ...answers
        ]
      }
    }
  },
  watch: {
    model: {
      handler () {
        this.error = ''
      },
      deep: true
    }
  },
  methods: {
    registration () {
      const requestPayload = this.reorganizedModel()
      const valid = this.validation(requestPayload)

      if (!valid) {
        this.error = 'Fill in required fields'
        return
      }

      this.$store.dispatch('registerUser', requestPayload)
        .then(() => {
          this.$router.replace('/login')
        })
        .catch(console.error)
    },
    optionSelected (key) {
      /// we can make this logic here, without additional prop for selected country, because is top component
      // and if we need make request for some countries_answers, we can make him from this component
      this.model.countries = this.model.countries.map(country => {
        country.selected = country.key === key
        return country
      })
    },
    selectAnswer (key) {
      /// we can make this logic here, without additional prop for selected country, because is top component
      // and if we need make request for some countries_answers, we can make him from this component
      this.model.answers = this.model.answers.map(answer => {
        answer.selected = answer.key === key
        return answer
      })
    },
    validation (model) {
      const { first_name, last_name, password, answers } = model

      return first_name && last_name && password && answers
    },
    reorganizedModel () {
      const { first_name, last_name, password, phone } = this.model
      const activeCountry = this.model.countries.find(country => country.selected)

      return {
        first_name,
        last_name,
        password,
        phone: phone || '',
        country: activeCountry?.key || '',
        // TODO
        answers: 'test_method',
        key: this.$store.getInvKey || getLSItem('key')
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/mixins";

.registration {
  display: flex;
  justify-content: center;

  &__content {
    max-width: 600px;
    width: 100%;
    padding: 30px 10px;
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

  &__row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    margin-bottom: 30px;

    .registration__input {
      margin-bottom: 0;
    }
  }

  &__input {
    margin-bottom: 30px;
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