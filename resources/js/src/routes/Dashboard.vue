<template>
  <div class="dashboard">
    <AppTopBar />
    <AppSideBar />
  </div>
</template>

<script>
import AppTopBar from '../components/AppTopBar'
import AppSideBar from '../components/AppSideBar'

export default {
  components: {
    AppTopBar,
    AppSideBar,
  }
}
</script>

<style scoped>
  .dashboard {
    margin-top: 56px;
  }

  .sidebar {
    width: 250px;
    height: calc(100vh - 56px);
  }
</style>