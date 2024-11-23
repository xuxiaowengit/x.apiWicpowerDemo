<template>
  <el-container class="layout-container">
    <el-header>
      <nav>
        <div class="logo">
          <img src="@/assets/logo.png" alt="WIC Power Logo" />
          <span>WIC Power</span>
        </div>
        <div class="nav-links">
          <router-link to="/">AI Assistant</router-link> |
          <router-link to="/about">About Us</router-link>
        </div>
      </nav>
    </el-header>
    
    <el-main>
      <router-view />
    </el-main>
    
    <el-footer>
      <div class="footer-content">
        <p> 2023 WIC Power - Professional Power Supply Manufacturer</p>
        <p>Address: Building A2, Hongfa Hi-tech Park, Tangtou, Shiyan, Bao'an District, Shenzhen, China</p>
        <p>Tel: +86-755-29994189 | Email: sales@wic-power.com</p>
      </div>
    </el-footer>
  </el-container>
</template>

<style lang="scss">
.layout-container {
  min-height: 100vh;
  
  .el-header {
    background-color: #003366;
    padding: 0 20px;
    
    nav {
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      .logo {
        display: flex;
        align-items: center;
        
        img {
          height: 40px;
          margin-right: 10px;
        }
        
        span {
          color: #ffffff;
          font-size: 1.5em;
          font-weight: bold;
        }
      }
      
      .nav-links {
        a {
          font-weight: bold;
          color: #ffffff;
          text-decoration: none;
          margin: 0 15px;
          
          &.router-link-exact-active {
            color: #42b983;
          }
          
          &:hover {
            color: #42b983;
          }
        }
      }
    }
  }
  
  .el-main {
    padding: 20px;
    background-color: #f5f7fa;
  }
  
  .el-footer {
    background-color: #003366;
    padding: 20px;
    color: #ffffff;
    
    .footer-content {
      text-align: center;
      
      p {
        margin: 5px 0;
        font-size: 0.9em;
        
        &:first-child {
          font-weight: bold;
          font-size: 1em;
        }
      }
    }
  }
}
</style>
