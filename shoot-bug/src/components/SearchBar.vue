<template>
  <div id="search-container">
    <input
      type="text"
      class="search-bar"
      placeholder="问题描述/关键词/标签"
    />
    <div class="search-icon">
      <i class="el-icon-search"></i>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style scoped>
#search-container {
  width: 100%;
  height: 100%;
  border: 1px solid green;
  padding: 4px 8px;
  box-sizing: border-box;
  display: flex;
}

.search-bar {
  flex: 9.5;
  border: 1px solid orangered;
  border-top-left-radius: 18px;
  border-bottom-left-radius: 18px;
  padding-left: 16px;
  outline: none;
}

.search-icon {
  flex: 0.5;
  border: 1px solid purple;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.search-icon{
  font-size: 20px;
}

</style>