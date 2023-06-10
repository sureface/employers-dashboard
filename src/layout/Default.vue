<template>
  <div>
    <div class="common-layout">
      <el-container>

        <el-aside>
          <SideBar />
        </el-aside>

        <el-container>

          <el-header class="flex items-center justify-between">
            <NavBar />
          </el-header>

          <el-main>
            <main />
          </el-main>

        </el-container>

      </el-container>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>