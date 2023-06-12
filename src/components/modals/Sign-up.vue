<template>
  <div>

    <div class="Login_Page h-screen w-screen grid grid-cols-2 gap-10 p-10">
      <div class="flex item-center justify-center">
        <img src="../../assets/img/signup-img.png" alt="err" class="object-contain">
      </div>
      <div class="flex items-center justify-center">
        <div>

          <h1 class="text-center mb-4 font-semibold text-4xl text-gray-600">Sign Up Page</h1>

          <div class="py-4 px-10 glass_bg">

            <el-form
                :label-position="'top'"
                label-width="100px"
            >
              <el-form-item label="First Name">
                <el-input v-model="firstName" />
              </el-form-item>
              <el-form-item label="Middle Name">
                <el-input v-model="middleName"  />
              </el-form-item>
              <el-form-item label="Last Name">
                <el-input v-model="lastName" />
              </el-form-item>

              <div class="flex items-center justify-between flex-wrap">
                <div class="flex items-center">
                  <el-form-item label="Passport Seria" class="mr-2">
                    <el-input max="2" style="width: 100px" v-model="passportSeria" />
                  </el-form-item>
                  <el-form-item label="Passport Seria Number">
                    <el-input  v-model="passportSeriaNumber" min="7" />
                  </el-form-item>
                </div>
                <div>
                  <el-radio-group v-model="genders" size="large">
                    <el-radio :label="item.id" v-for="(item, i) in getGenders" :key="i">{{ item.displayName }}</el-radio>
                  </el-radio-group>
                </div>
              </div>

              <div class="flex items-center justify-between flex-wrap mb-4">
                <el-select v-model="countyVal" placeholder="Select your country">
                  <el-option
                      v-for="item in country"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id"
                  />
                </el-select>

                <el-select v-model="regionVal" placeholder="Select your region">
                  <el-option
                      v-for="item in region"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id"
                  />
                </el-select>

                <el-select v-model="districtVal" placeholder="Select your district">
                  <el-option
                      v-for="item in district"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id"
                  />
                </el-select>



              </div>

              <el-form-item label="User Name">
                <el-input  v-model="userName" />
              </el-form-item>

              <el-form-item label="Password">
                <el-input v-model="password"  />
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
                <el-input v-model="email" />
              </el-form-item>
            </el-form>

            <div class="flex items-center justify-between">
              <el-button><router-link to="/">Cancel</router-link></el-button>
              <el-button type="primary" @click="submitHandler">
                Sign Up Now
              </el-button>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
  import { useSignUpStoreEveryWhere } from "../../store/modules/signUp"
  import {computed, onMounted, ref, watch} from "vue";
  import {useRouter} from "vue-router";

  const router = useRouter()

  const signUp = useSignUpStoreEveryWhere()

  onMounted(() => {
    signUp.getCountries()
    signUp.getGenders()
  })

  const firstName = ref('')
  const middleName = ref('')
  const lastName = ref('')
  const passportSeria = ref('')
  const passportSeriaNumber = ref('')
  const userName = ref('')
  const password = ref('')
  const email = ref('')

  const genders = ref('')
  const getGenders = ref(computed(() => signUp.gender))

  watch(genders, (selectedGender) => {
    if (selectedGender) {
      console.log(selectedGender)
    }
  });

  const countyVal = ref('')
  const country = ref(computed(() => signUp.getCountry));

  watch(countyVal, (newCountry) => {
    if (newCountry) {
      signUp.getRegions(newCountry)
    }
  });


  if (countyVal.value) {
    signUp.getRegions(countyVal.value)
  }

  const regionVal = ref('')
  const region = ref(computed(() => signUp.getRegion))

  watch(regionVal, (newRegion) => {
    if (newRegion) {
      signUp.getDistricts(newRegion)
    }
  });

  const districtVal = ref('')
  const district = ref(computed(() => signUp.getDistrict))

  watch(districtVal, (newDistrict) => {
    if (newDistrict) {
      console.log(newDistrict)
    }
  });

  const submitHandler = async () => {
    const personData = {
      firstName: firstName.value,
      middleName: middleName.value,
      lastName: lastName.value,
      passportSeria: passportSeria.value,
      passportSeriaNumber: passportSeriaNumber.value,
      genders: genders.value,
      countyVal: countyVal.value,
      regionVal: regionVal.value,
      districtVal: districtVal.value
    }
    await signUp.createPerson(personData)
  }

  const createUser = ref(computed(() => signUp.GiveTheUserId))

  watch(createUser, (userId) => {
    const userData = {
      userName: userName.value,
      password: password.value,
      email: email.value,
    }
    if (userId) {
      signUp.createUser(userData)
    }
  });

  const detectSignUpAction = computed(() => signUp.signUpDetect)

  watch(detectSignUpAction, (detection) => {
    console.log(detection, "got it")
    if (detection) {
      router.push('/')
    }
  });

</script>

<style scoped>

</style>