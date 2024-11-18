<template>
  <div>
    <h3>这是一个寂寞的天</h3>
    <el-button type="success" @click="login">登录</el-button>

    <el-icon :size="size" :color="color">
      <Edit />
    </el-icon>
    <!-- 或者独立使用它，不从父级获取属性 -->
    <Edit />
    <!-- <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="User" name="first">User</el-tab-pane>
      <el-tab-pane label="Config" name="second">Config</el-tab-pane>
      <el-tab-pane label="Role" name="third">Role</el-tab-pane>
      <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { userLogin } from '@api/home.js'
import { useStore } from '@store/index.js'
// let store = useStore()
// console.log('111----->', store.num)

console.log('import----->', import.meta.env)

const login = () => {
  userLogin({
    data: {
      username: 'admin',
      password: 'admin',
      key: '123',
      captcha: '132'
    }
  }).then((res) => {
    console.log('111----->', res)
  })
}

// const activeName = ref('first')

// const handleClick = (tab, event) => {
//   console.log(tab, event)
// }
</script>
