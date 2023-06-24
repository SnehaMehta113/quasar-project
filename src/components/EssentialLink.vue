<template>
  <q-expansion-item v-if="submenu" :label="title">
    <essential-link v-bind="menu" v-for="menu of submenu"></essential-link>
  </q-expansion-item>
  <q-item clickable tag="a" :to="link" v-else >
    <q-item-section v-if="icon" avatar >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    submenu: {
      type: Array
    },
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: '',
    },

    link: {
      type: String,
      default: '#',
    },

    icon: {
      type: String,
      default: ''
    }
  }
})
</script>
