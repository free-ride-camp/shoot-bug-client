<template>
  <div class="content container">
    <div class="filter-part">
      <div class="search-bar">
        <search-bar
          width="300px"
          height="35px"
          half-radius
          placeholder="用户名"
        />
      </div>
      <div class="selector-group">
        <selector-group :group="group" />
      </div>
    </div>
    <el-divider></el-divider>
    <div class="users-part">
      <user-card
        v-for="a in 40"
        :key="a"
        :avatar="avatar"
        user-name="alan shao"
        location="上海,中国"
        :reputation="3200"
        :gold-badges="6"
        :tags="tags"
      />
    </div>
    <el-pagination
          :current-page="1"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          style="margin: 20px 0 20px 16px"
          background
        >
        </el-pagination>
  </div>
</template>

<script>
import UserCard from "../../components/UserCard.vue";
import SearchBar from "../../components/SearchBar.vue";
import SelectorGroup from "../../components/SelectorGroup.vue";

export default {
  name: "UsersPage",
  components: {
    UserCard,
    SearchBar,
    SelectorGroup,
  },
  data() {
    return {
      avatar: require("../../assets/avatars/0.jpg"),
      tags: ["javascript", "dom", "jquery"],
      group:['按声望','最新的','按国家']
    };
  },
};
</script>

<style scoped>
.container{
    display: inline;
    padding-left: 16px;
}

.filter-part {
  height: 100px;
}

.search-bar {
  float: left;
  margin-top: 60px;
}

.selector-group {
  float: right;
  margin-top: 60px;
}

.users-part {
  width: 100%;
  min-height: 900px;
  height: fit-content;
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
  grid-template-rows: repeat(8, 1fr);
  grid-row-gap: 16px;
  grid-column-gap: 16px;
}
</style>
