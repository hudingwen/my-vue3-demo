<script setup>

import { inject } from 'vue';

const themeColor = inject('theme-color')

const count = inject('count')
const changeCount = inject('changeCount')
const changeFn = () => {
    changeCount(1000)
}
</script>
<template>
    <h3>我是底层组件 - {{ themeColor }} - {{ count }}</h3>
    <button @click="changeFn">更新count</button>
</template>