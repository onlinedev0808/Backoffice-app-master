<template>
  <page-content>
    <div>
      <div class="inputs">
        <ui-input
          v-model="model.first_name"
          label="Name"
          placeholder="First name"
          required
        />
        <ui-input
          v-model="model.last_name"
          label="Last name"
          placeholder="Last name"
          required
        />
        <ui-select
          v-model="model.countries"
          label="Country (Optional)"
          @option-selected="countrySelected"
          placeholder="Choose country"
        />
        <div class="password">
          <ui-input
            v-model="model.password"
            :disabled="passwordDisabled"
            label="Password"
            placeholder="Password"
            input-type="password"
            required
          />
          <ui-button
            height="60px"
            text="Change"
            button-type="secondary"
            @clicked="toggleDisable"
          />
        </div>
        <ui-input
          v-model="model.phone"
          label="Number (Optional)"
          placeholder="+ 1 234 555"
        />
        <ui-select
          v-model="model.answers"
          label="How did you find us?"
          required
          @option-selected="answersSelected"
          placeholder="Choose your answer"
        />
      </div>
      <ui-button
        class="save"
        height="60px"
        text="Save changes"
        @clicked="save(this.getUserId)"
      />
      <div v-if="model.errors" class="manage_account_error">
        {{model.errors.message}}
      </div>
    </div>
  </page-content>
</template>

<script>
import UiInput from '@/components/common/library/UiInput'
import UiSelect from '@/components/common/library/UiSelect'
import UiButton from '@/components/common/library/UiButton'
import PageContent from '@/components/common/PageContent'
import allCountries from '@/utils/countries_answers/allCountries'
import answers from '@/utils/countries_answers/answers'
import { mapGetters } from 'vuex'
import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  name: 'AccountPage',
  components: { PageContent, UiButton, UiSelect, UiInput },
  data () {
    return {
      v$: useValidate(),
      model: {
        first_name: '',
        last_name: '',
        password: '',
        phone: '',
        country: '',
        countries: [
          ...allCountries
        ],
        answers: [
          ...answers
        ],
        errors: null
      },
      passwordDisabled: true,
      errors: null
    }
  },
  validations () {
    return {
      model: {
        first_name: { required },
        last_name: { required }
      }
    }
  },
  methods: {
    save (id) {
      const errors = {}
      const payload = this.reorganizedModel()

      this.v$.$validate()

      if (!this.v$.$error) {
        return this.$store.dispatch('updateAccount', { id, payload })
      } else {
        errors.message = '* Please fill in required fields'
      }
      if (Object.keys(errors).length > 0) {
        this.model.errors = errors
        return
      } else {
        this.errors = null
      }
    },
    toggleDisable () {
      this.passwordDisabled = !this.passwordDisabled
    },
    accountValidation (model) {
      const { first_name, last_name, password, countries, answers } = model

      return first_name && last_name && password && countries && answers
    },
    reorganizedModel () {
      const { first_name, last_name, password, phone } = this.model
      const country = this.model.countries.find(country => country.selected)
      const answer = this.model.answers.find(answer => answer.selected)

      return {
        first_name,
        last_name,
        password,
        phone,
        country: country?.key || '',
        found_from: answer?.key || ''
      }
    },
    answersSelected (key) {
      this.model.answers = this.model.answers.map(answer => {
        answer.selected = answer.key === key
        return answer
      })
    },
    countrySelected (key) {
      this.model.countries = this.model.countries.map(country => {
        country.selected = country.key === key
        return country
      })
    }
  },
  mounted () {
    this.model.first_name = this.getUserFirstName,
    this.model.last_name = this.getUserLastName,
    this.model.phone = this.getUserPhone
  },
  computed: {
    ...mapGetters(['getUserId', 'getUserFirstName', 'getUserLastName', 'getUserCountry', 'getUserPhone', 'getUserFoundFrom'])
  }
}
</script>

<style scoped lang="scss">
  .inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
    margin-bottom: 60px;
  }

  .password {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 30px;
  }

  .save {
    margin-left: auto;
    width: 170px;
  }
  .manage_account_error {
    color: red;
  }
</style>