<script setup>
// 由于写setup,所以无法直接配置props选项
// 所以需要借助"编译器宏"函数接收父组件传递的数据
const props = defineProps({
    car: String,
    money: Number,
    addMoney: Function
})
console.log(props.car)


//子传父
const emit = defineEmits(['change-Money'])
const buy = () => {
    emit('change-Money', 5)
}
</script>
<template>
    <div class="son">
        <!-- 子组件可以直接使用传递过来的数据 -->
        我是子组件 - {{ car }} - {{ money }} - <button @click="addMoney">+1</button>
        <div>  <button @click="buy">-Money</button></div>
    </div>
  
</template>
<style>
.son {
    border: 1px solid #000;
    padding: 30px;
}
</style>