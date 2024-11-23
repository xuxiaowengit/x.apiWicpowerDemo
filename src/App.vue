<template>
  <el-container class="layout-container">
    <el-header>
      <nav>
        <router-link to="/">Chat</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </el-header>
    
    <el-main>
      <router-view />
    </el-main>
    
    <el-footer>
      2023 X.AI Chat Demo
    </el-footer>
  </el-container>
</template>

<style lang="scss">
.layout-container {
  min-height: 100vh;
  
  .el-header {
    background-color: #f8f9fa;
    line-height: 60px;
    text-align: center;
    
    nav {
      a {
        font-weight: bold;
        color: #2c3e50;
        text-decoration: none;
        margin: 0 10px;
        
        &.router-link-exact-active {
          color: #42b983;
        }
      }
    }
  }
  
  .el-main {
    padding: 20px;
  }
  
  .el-footer {
    background-color: #f8f9fa;
    text-align: center;
    line-height: 60px;
    color: #666;
  }
}
</style>
