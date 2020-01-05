<template>
  <router-link  
    active-class="active" 
    :to="link.href" 
    class="list-group-item list-group-item-action"
    exact>
    {{ link.text }}
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      required: true,
      type: Object,
    }
  }
}
</script>