<template>
  <div class="user-card-container">
    <div class="avatar-part">
      <img :src="avatar" alt="" class="avatar" />
    </div>
    <div class="info-part">
      <a href="script:;" class="user-name">{{ userName }}</a>
      <span class="location">{{ location }}</span>
      <div class="user-glory">
        <span class="reputation">{{ reputation }}</span>
        <span>
          <i class="iconfont icon-dian" style="color: #FFCC01;"></i>
          {{ goldBadges }}
        </span>
        <span>
            <i class="iconfont icon-dian" style="color: #B4B8BC;"></i>
            {{ silverBadges }}
            </span>
        <span>
            <i class="iconfont icon-dian" style="color: #D1A684;"></i>
            {{ bronzeBadges }}
            </span>
      </div>
      <div class="user-tags">
        <a href="#">{{tags[0]}}</a><span v-if="tags[1] && tags[1] != ''">，</span>
        <a href="#">{{tags[1]}}</a><span v-if="tags[2] && tags[2] != ''">，</span>
        <a href="#">{{tags[2]}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/iconfont/iconfont.css';

export default {
  name: "UserCard",
  props: {
    avatar: String,
    "user-name": String,
    location: String,
    reputation: Number,
    "gold-badges": {
        type:Number,
        default:0
    },
    "silver-badges": {
        type:Number,
        default:0
    },
    "bronze-badges": {
        type:Number,
        default:0
    },
    tags:{
        type:Array,
        default:['','','']
    }
  },
};
</script>

<style scoped>
.user-card-container {
  width: 250px;
  height: 90px;
  display: flex;
}

.avatar-part {
  flex: 3;
}

.info-part {
  flex: 7;
  padding-left: 8px;
}

.avatar {
  width: 60px;
  height: 60px;
  margin: 5px 7.5px;
}

.user-name {
  font-size: 16px;
  text-decoration: none;
  display: block;
  margin-top: 5px;
  color: rgb(0, 115, 200);
}

.user-name:hover {
  color: rgb(14, 133, 224);
}

.location {
  font-size: 12px;
  color: rgb(106, 115, 124);
}

.user-glory {
  margin: 2px 0;
  font-size: 12px;
}

.user-glory > span {
  margin-right: 4px;
}

.user-glory > span > i {
    position: relative;
    left: 4px;
    top: 1px;
}

.reputation{
    font-weight: 800;
    margin-right: 8px;
}

.user-tags{
    font-size: 12px;
}

.user-tags>a{
    text-decoration: none;
    color: rgb(0, 115, 200);
}

.user-tags>a:hover{
    color: rgb(14, 133, 224);
}
</style>
