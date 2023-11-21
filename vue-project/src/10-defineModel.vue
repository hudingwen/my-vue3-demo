
<script setup>
import { ref } from 'vue';
import myInput from '@/components/my-input.vue'

const count = ref(100)

const changeFn = () => {
  count.value += 1
}
</script>
<template>
  <div>
    <myInput v-model="count"></myInput>
    <div>{{ count }} - <button @click="changeFn">父组件更新</button></div>
  </div>
</template>