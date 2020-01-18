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
        { href: '/admin', text: 'Home' },
        { href: '/admin/foo', text: 'About' },
        { href: '/admin/bar', text: 'Vendor Management' },
        { href: '/admin/user', text: 'User Management', children: [
          { href: '/', text: 'User Index'},
          { href: '/roles', text: 'Role Index'},
        ] },
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