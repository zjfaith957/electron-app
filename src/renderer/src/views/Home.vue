<template>
  <div>
    <h3>这是一个寂寞的天</h3>
  </div>
</template>

<script setup>
import { useStore } from '@store/index.js'
let store = useStore()
console.log('111----->', store.num)
</script>
