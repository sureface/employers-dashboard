<template>
  <div>
    <h1 class="text-center text-4xl text-blue-500 font-semibold mb-5">All Users</h1>
    <el-table :data="usersData" border  style="width: 100%" table-layout="auto">
      <el-table-column prop="userName" sortable label="Name" style="width: 100%" />
      <el-table-column prop="email" label="Email" style="width: 100%" />
    </el-table>
  </div>
</template>

<script setup>

import {useSignUpStoreEveryWhere} from "../store/modules/signUp";
import {computed, onMounted} from "vue";

onMounted(() => {
  signUpStore.getUserList()
})

const signUpStore = useSignUpStoreEveryWhere()

const usersData = computed(() => signUpStore.allUser)


</script>

<style scoped>

</style>