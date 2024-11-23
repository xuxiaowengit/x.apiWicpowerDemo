<template>
  <div class="about">
    <el-row justify="center">
      <el-col :span="16">
        <h1>About Page</h1>
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>About This Project</span>
            </div>
          </template>
          <div class="text item">
            <p>This is a Vue 3 project created with modern tooling and best practices.</p>
            <el-descriptions title="Project Features" :column="1" border>
              <el-descriptions-item label="Vue Version">Vue 3 with Composition API</el-descriptions-item>
              <el-descriptions-item label="Build Tool">Vite</el-descriptions-item>
              <el-descriptions-item label="UI Framework">Element Plus</el-descriptions-item>
              <el-descriptions-item label="State Management">Pinia</el-descriptions-item>
              <el-descriptions-item label="Routing">Vue Router</el-descriptions-item>
            </el-descriptions>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.about {
  padding: 20px;
}

.box-card {
  margin-top: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
</style>
