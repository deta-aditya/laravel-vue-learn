<template>
  <aside class="sidebar border-right">
    <div class="list-group list-group-flush">
      <SideBarLink
        v-for="link in links"
        :key="link.href"
        :link="link"
        />
    </div>
  </aside>
</template>

<script>
import SideBarLink from './SideBarLink'

export default {
  data() {
    return {
      links: [
        { href: '/', text: 'Home' },
        { href: '/foo', text: 'About' },
        { href: '/bar', text: 'Vendor Management' },
      ]
    }
  },
  components: {
    SideBarLink,
  },
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: calc(100vh - 56px);
}
</style>