<template>
  <div class="about">
    <el-row justify="center">
      <el-col :span="16">
        <h1>About WIC Power</h1>
        <el-card class="company-intro">
          <template #header>
            <div class="card-header">
              <span>Company Introduction</span>
            </div>
          </template>
          <div class="content">
            <p>WIC Power Technology Co., Ltd is a professional manufacturer of power supplies and power solutions. With years of experience in R&D and manufacturing, we specialize in switching power supply, adapter, LED driver and customized power solutions.</p>
            <p>Our products are widely used in LED lighting, security monitoring, communication equipment, industrial control, medical equipment and other fields.</p>
          </div>
        </el-card>

        <el-card class="products-card">
          <template #header>
            <div class="card-header">
              <span>Our Products</span>
            </div>
          </template>
          <el-descriptions :column="1" border>
            <el-descriptions-item label="LED Driver">Indoor & Outdoor LED Drivers, Dimmable LED Drivers</el-descriptions-item>
            <el-descriptions-item label="Power Adapter">Desktop Adapters, Wall Mount Adapters</el-descriptions-item>
            <el-descriptions-item label="Industrial Power">DIN Rail Power Supply, Enclosed Power Supply</el-descriptions-item>
            <el-descriptions-item label="Custom Solutions">Customized Power Solutions Based on Customer Requirements</el-descriptions-item>
          </el-descriptions>
        </el-card>

        <el-card class="contact-card">
          <template #header>
            <div class="card-header">
              <span>Contact Information</span>
            </div>
          </template>
          <el-descriptions :column="1" border>
            <el-descriptions-item label="Address">Building A2, Hongfa Hi-tech Park, Tangtou, Shiyan, Bao'an District, Shenzhen, China</el-descriptions-item>
            <el-descriptions-item label="Tel">+86-755-29994189</el-descriptions-item>
            <el-descriptions-item label="Email">sales@wic-power.com</el-descriptions-item>
            <el-descriptions-item label="Website">www.wic-power.com</el-descriptions-item>
          </el-descriptions>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.about {
  padding: 20px;
}

h1 {
  color: #003366;
  text-align: center;
  margin-bottom: 30px;
}

.el-card {
  margin-bottom: 30px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  span {
    font-size: 18px;
    font-weight: bold;
    color: #003366;
  }
}

.content {
  p {
    margin-bottom: 15px;
    line-height: 1.6;
    color: #333;
  }
}

.el-descriptions {
  margin: 20px 0;
}

:deep(.el-descriptions__label) {
  background-color: #f5f7fa;
  color: #003366;
  font-weight: bold;
}

:deep(.el-descriptions__content) {
  line-height: 1.6;
}
</style>
