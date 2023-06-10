<template>
  <el-dialog
      v-model="getIsOpen"
      title="Sign Up"
      :before-close="closeModal"
  >

<!--    form    -->
    <el-form
        :label-position="'top'"
        label-width="100px"
    >
      <el-form-item label="First Name">
        <el-input  />
      </el-form-item>
      <el-form-item label="Middle Name">
        <el-input v  />
      </el-form-item>
      <el-form-item label="Last Name">
        <el-input  />
      </el-form-item>

      <div class="flex items-center justify-between flex-wrap">
        <div class="flex items-center">
          <el-form-item label="Passport Seria" class="mr-2">
            <el-input max="2" style="width: 100px" />
          </el-form-item>
          <el-form-item label="Passport Seria Number">
            <el-input  />
          </el-form-item>
        </div>
        <div>
          <el-radio-group v-model="radio1" size="large">
            <el-radio-button label="Male" />
            <el-radio-button label="Female" />
          </el-radio-group>
        </div>
      </div>

      <div class="flex items-center justify-between flex-wrap mb-4">
        <el-select v-model="countyVal" placeholder="Select your country">
          <el-option
              v-for="item in country"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>

        <el-select v-model="regionVal" placeholder="Select your region">
          <el-option
              v-for="item in region"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>

        <el-select v-model="districtVal" placeholder="Select your district">
          <el-option
              v-for="item in district"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>



      </div>

      <el-form-item label="User Name">
        <el-input  />
      </el-form-item>

      <el-form-item label="Password">
        <el-input  />
      </el-form-item>

      <el-form-item
          prop="email"
          label="Email (Optional)"
          :rules="[
          {
            type: 'email',
            message: 'Please input correct email address',
            trigger: ['blur', 'change'],
          },
      ]"
      >
        <el-input />
      </el-form-item>
    </el-form>

    <template #footer>
    <span class="dialog-footer">
      <el-button @click="closeModal">Cancel</el-button>
      <el-button type="primary" @click="closeModal">
        Sign Up
      </el-button>
    </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
  import { useAppStore } from "../../store/modules/app";
  import { useSignUpStoreEveryWhere } from "../../store/modules/signUp";
  import {computed, defineProps, ref} from "vue";

  const props =  defineProps({
    defineModalIsOpen: Boolean,
  })


  console.log(props.defineModalIsOpen)

  const appStore = useAppStore()
  const signUpStoreInVue = useSignUpStoreEveryWhere()

  const getIsOpen = computed(() => appStore.getSignUpModal)
  const getSignUpModal = appStore.getSignUpModal;

  if (getSignUpModal) {
   const countries =  computed(() => signUpStoreInVue.getCountries)
    console.log(countries)
  }

  const closeModal = () => {
    appStore.setSignUpModal(false)
  }

  const radio1 = ref('Male')

  const countyVal = ref('')
  const country = [
    {
      value: 'Option1',
      label: 'Option1',
    },
    {
      value: 'Option2',
      label: 'Option2',
    },
    {
      value: 'Option3',
      label: 'Option3',
    },
    {
      value: 'Option4',
      label: 'Option4',
    },
    {
      value: 'Option5',
      label: 'Option5',
    },
  ]

  const regionVal = ref('')
  const region = [
    {
      value: 'Option1',
      label: 'Option1',
    },
    {
      value: 'Option2',
      label: 'Option2',
    },
    {
      value: 'Option3',
      label: 'Option3',
    },
    {
      value: 'Option4',
      label: 'Option4',
    },
    {
      value: 'Option5',
      label: 'Option5',
    },
  ]

  const districtVal = ref('')
  const district = [
    {
      value: 'Option1',
      label: 'Option1',
    },
    {
      value: 'Option2',
      label: 'Option2',
    },
    {
      value: 'Option3',
      label: 'Option3',
    },
    {
      value: 'Option4',
      label: 'Option4',
    },
    {
      value: 'Option5',
      label: 'Option5',
    },
  ]

</script>

<style scoped>

</style>