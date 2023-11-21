<script setup>
const count = 999
const sayHi = () => {
    console.log("你好")
}
defineExpose({
    count,
    sayHi
})
</script>
<template>
    <div>
        我是子组件 - {{ 999 }}
    </div>
</template>