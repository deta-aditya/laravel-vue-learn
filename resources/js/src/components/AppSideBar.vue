<template>
  <aside class="sidebar border-right">
    <div class="list-group list-group-flush">
      <a 
        v-for="link in links" 
        :key="link.href" 
        :href="href" 
        class="list-group-item list-group-item-action">
        {{ link.text }}
      </a>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { href: '#', text: 'Home' },
        { href: '#', text: 'About' },
        { href: '#', text: 'Vendor Management' },
      ]
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: calc(100vh - 56px);
}
</style>