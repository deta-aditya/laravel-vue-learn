<template>
  <div v-if="link.children">
    <div 
      data-toggle="collapse"
      :data-target="`#${collapseIdentifier}`"
      class="list-group-item list-group-item-action">
      {{ link.text }}
    </div>
    <div :id="collapseIdentifier" class="collapse">
      <side-bar-link
        v-for="childLink in extendedChildren"
        :key="childLink.href"
        :link="childLink"
        />
    </div>
  </div>
  <router-link 
    v-else 
    active-class="active" 
    :to="link.href" 
    class="list-group-item list-group-item-action"
    exact>
    {{ link.text }}
  </router-link>
</template>

<script>
export default {
  name: 'side-bar-link',
  props: {
    link: {
      required: true,
      type: Object,
    }
  },

  computed: {
    collapseIdentifier() {
      return this.link.href.substring(1)
    },

    extendedChildren() {
      if (this.link.children) {
        return this.link.children.map((childLink) => {
          return {
            ...childLink,
            href: this.link.href + childLink.href,
          }
        })
      } else {
        return [];
      }
    }
  },

}
</script>