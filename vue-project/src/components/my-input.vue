<script setup>
import { defineModel } from 'vue';
const modelValue = defineModel()
const changeFn = () => {
    modelValue.value += 1
}
</script>
<template>
    <div>
        <input type="text" :value="modelValue" @input="e => modelValue = e.target.value" />
        {{ modelValue }}
        <button @click="changeFn">子组件更新</button>
    </div>
</template>