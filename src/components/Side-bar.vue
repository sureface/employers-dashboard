<template>
  <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="collapse"
  >
    <el-menu-item index="1">
      <el-icon><icon-menu /></el-icon>
      <template #title class="text-gray-600 font-bold">Back & Front</template>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><User /></el-icon>
        <span>Employee</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="2-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
  import {computed} from 'vue'
  import {
    Menu as IconMenu,
    User,
  } from '@element-plus/icons-vue'
  import { useAppStore } from "../store/modules/app";

  const appStore = useAppStore()

  const collapse = computed(() => appStore.getCollapse)

</script>

<style scoped>

</style>

<!--@open="handleOpen"-->
<!--@close="handleClose"-->