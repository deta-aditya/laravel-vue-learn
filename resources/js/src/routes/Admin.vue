<template>
  <div class="admin">
    <AppTopBar />
    <div class="d-flex">
      <AppSideBar class="flex-shrink-0" />
      <div class="view-container overflow-auto w-100">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import protectedPage from "../mixins/protectedPage"
import AppTopBar from '../components/AppTopBar'
import AppSideBar from '../components/AppSideBar'

export default {  
  mixins: [
    protectedPage,
  ],
  components: {
    AppTopBar,
    AppSideBar
  },
}
</script>

<style scoped>
  .admin {
    margin-top: 56px;
  }
</style>