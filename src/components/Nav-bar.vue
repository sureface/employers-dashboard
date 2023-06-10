<template>
  <div class="py-2 flex items-center justify-between w-full">
    <el-icon
      @click="handleClickOutside"
      :size="22"
      color="text-gray-600"
    >
      <Fold class="cursor-pointer" />
    </el-icon>
    <div class="flex items-center">

      <el-button type="info" :icon="UserFilled" @click="openModal">Sign Up</el-button>

      <el-avatar
          :size="32"
          class="mr-3"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <span class="text-large font-600 mr-3"> SureFace </span>
    </div>
    <SignUp />
  </div>
</template>

<script setup lang="ts">
  import {Fold, UserFilled} from '@element-plus/icons-vue'
  import { useAppStore } from "../store/modules/app";

  const appStore = useAppStore()

  const handleClickOutside = () => {
    appStore.setCollapse()
  }
  const openModal = () => {
    appStore.setSignUpModal(true)
  }

</script>

<style scoped>

</style>