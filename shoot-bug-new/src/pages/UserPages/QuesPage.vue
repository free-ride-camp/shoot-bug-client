<template>
  <div class="content">
    <div class="center-container">
      <div class="ques-desc">
        {{ published + tags + bountied + answered + updated }}问题
      </div>
      <div class="filter-container">
        <selector-group :group="group" :active="1" />
      </div>
      <div id="custom-filter">自定义...</div>

      <div class="posts-container">
        <div class="post-item">
          <div class="post-summary-status">
            <div class="post-summary-status-item">
              <span class="post-summary-status-item-number">0</span>&nbsp;
              <span class="post-summary-status-item-unit">投票</span>
            </div>
            <div class="post-summary-status-item">
              <span class="post-summary-status-item-number">0</span>&nbsp;
              <span class="post-summary-status-item-unit">回答</span>
            </div>
            <div class="post-summary-status-item">
              <span class="post-summary-status-item-number">0</span>&nbsp;
              <span class="post-summary-status-item-unit">浏览</span>
            </div>
          </div>
          <div class="post-summary-content">
            <h3 class="content-title">
              <a href="#"
                >积分尼克斯南方肯德基不服输的积分可能是减肥年开始放假脑
                手机放哪控释胶囊福克斯你快解放少女客服女生夹克您付款时间南方科技是鸟瞰世界能否
                栓康复你什么大姐夫你设计费你</a
              >
            </h3>
            <div class="content-excerpt">
              今年福克斯南方科技是南方少年开发了十多年疯狂世界能否看上你罚款近三年罚款近三年罚
              款近三年发开济南市科技你罚款近三年副科级迪士尼付款济南市空间是你罚款近三年副科级迪
              士尼开发建设南方科技刷卡机反射亢进付款思考就能放款时间你开始哪款是你
            </div>
            <div class="post-cummary-meta">
              <div class="meta-tags">
                <el-tag>标签一</el-tag>
                <el-tag>标签二标签二</el-tag>
                <el-tag>标签</el-tag>
              </div>
              <div class="meta-user-card">
                <div class="meta-who">
                  <img
                    src="../../assets/avatars/0.jpg"
                    alt=""
                    width="12px"
                    height="12px"
                  />
                  <span>Join Smith</span>
                </div>
                <div class="meta-action">编辑过</div>
                <div class="meta-time">三分钟前</div>
              </div>
            </div>
          </div>
        </div>
        <div class="post-item">
          <div class="post-summary-status">
            <div class="post-summary-status-item">
              <span class="post-summary-status-item-number">0</span>&nbsp;
              <span class="post-summary-status-item-unit">投票</span>
            </div>
            <div class="post-summary-status-item">
              <span class="post-summary-status-item-number">0</span>&nbsp;
              <span class="post-summary-status-item-unit">回答</span>
            </div>
            <div class="post-summary-status-item">
              <span class="post-summary-status-item-number">0</span>&nbsp;
              <span class="post-summary-status-item-unit">浏览</span>
            </div>
          </div>
          <div class="post-summary-content">
            <h3 class="content-title">
              <a href="#"
                >积分尼克斯南方肯德基不服输的积分可能是减肥年开始放假脑
                手机放哪控释胶囊福克斯你快解放少女客服女生夹克您付款时间南方科技是鸟瞰世界能否
                栓康复你什么大姐夫你设计费你</a
              >
            </h3>
            <div class="content-excerpt">
              今年福克斯南方科技是南方少年开发了十多年疯狂世界能否看上你罚款近三年罚款近三年罚
              款近三年发开济南市科技你罚款近三年副科级迪士尼付款济南市空间是你罚款近三年副科级迪
              士尼开发建设南方科技刷卡机反射亢进付款思考就能放款时间你开始哪款是你
            </div>
            <div class="post-cummary-meta">
              <div class="meta-tags">
                <el-tag>标签一</el-tag>
                <el-tag>标签二标签二</el-tag>
                <el-tag>标签</el-tag>
              </div>
              <div class="meta-user-card">
                <div class="meta-who">
                  <img
                    src="../../assets/avatars/0.jpg"
                    alt=""
                    width="12px"
                    height="12px"
                  />
                  <span>Join Smith</span>
                </div>
                <div class="meta-action">编辑过</div>
                <div class="meta-time">三分钟前</div>
              </div>
            </div>
          </div>
        </div>
        <div class="post-item">
          <div class="post-summary-status">
            <div class="post-summary-status-item">
              <span class="post-summary-status-item-number">0</span>&nbsp;
              <span class="post-summary-status-item-unit">投票</span>
            </div>
            <div class="post-summary-status-item">
              <span class="post-summary-status-item-number">0</span>&nbsp;
              <span class="post-summary-status-item-unit">回答</span>
            </div>
            <div class="post-summary-status-item">
              <span class="post-summary-status-item-number">0</span>&nbsp;
              <span class="post-summary-status-item-unit">浏览</span>
            </div>
          </div>
          <div class="post-summary-content">
            <h3 class="content-title">
              <a href="#"
                >积分尼克斯南方肯德基不服输的积分可能是减肥年开始放假脑
                手机放哪控释胶囊福克斯你快解放少女客服女生夹克您付款时间南方科技是鸟瞰世界能否
                栓康复你什么大姐夫你设计费你</a
              >
            </h3>
            <div class="content-excerpt">
              今年福克斯南方科技是南方少年开发了十多年疯狂世界能否看上你罚款近三年罚款近三年罚
              款近三年发开济南市科技你罚款近三年副科级迪士尼付款济南市空间是你罚款近三年副科级迪
              士尼开发建设南方科技刷卡机反射亢进付款思考就能放款时间你开始哪款是你
            </div>
            <div class="post-cummary-meta">
              <div class="meta-tags">
                <el-tag>标签一</el-tag>
                <el-tag>标签二标签二</el-tag>
                <el-tag>标签</el-tag>
              </div>
              <div class="meta-user-card">
                <div class="meta-who">
                  <img
                    src="../../assets/avatars/0.jpg"
                    alt=""
                    width="12px"
                    height="12px"
                  />
                  <span>Join Smith</span>
                </div>
                <div class="meta-action">编辑过</div>
                <div class="meta-time">三分钟前</div>
              </div>
            </div>
          </div>
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
    </div>
    <div class="edge-container">
      <el-card class="box-card">
        <div slot="header" class="card-header">公告</div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </el-card>

      <el-card class="box-card">
        <div slot="header" class="card-header">热门问题</div>
      </el-card>

      <el-card class="box-card">
        <div slot="header" class="card-header">监听的标签</div>
      </el-card>

      <el-card class="box-card">
        <div slot="header" class="card-header">忽略的标签</div>
      </el-card>
    </div>
  </div>
</template>

<script>
import SelectorGroup from '../../components/SelectorGroup.vue';

export default {
  name: "QuesPage",
  components:{
    SelectorGroup
  },
  data() {
    return {
      tags: "标签:[JavaSCript,ECMAScript,CSS,HTML,DOM]的",
      bountied: "具有赏金的,",
      answered: "未回答的,",
      updated: "最近更新的,",
      published: "最近发布的,",
      group:['最近发布的','最近更新的','具有赏金的','未回答的','更多'],
      mode: "day",
    };
  },
};
</script>

<style scoped>
.center-container {
    flex-grow: 1;
    height: fit-content;
    padding-right: 16px;
}

.edge-container {
    flex-basis: 30rem;
}

.ques-desc {
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    padding: 0px 16px;
    margin: 20px 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    font-size: 24px;
    font-weight: bold;
    line-height: 30px;
    color: var(--mode-front-color);
    background-color:var(--mode-bg-color);
}

.filter-container {
    width: fit-content;
    display: inline-block;
    height: 32px;
    margin: 30px 16px;
}

#custom-filter {
    float: right;
    border: 1px solid var(--mode-front-color);
    color: var(--mode-front-color);
    border-radius: 4px;
    margin: 30px 16px;
    padding: 0 10px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
}

.posts-container {
    height: fit-content;
    width: 100%;
}

.post-item {
    width: 100%;
    min-height: 147px;
    height: fit-content;
    padding: 16px;
    display: flex;
    box-sizing: border-box;
    border-top: 1px solid #E6E6E6;
}

.post-summary-status {
    flex: 1;
}

.post-summary-content {
    flex: 9;
}

.post-summary-status {
    padding-right: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
}

.post-summary-status-item {
    font-size: 12px;
    color: #808080;
}

.content-title {
    margin: 5px 0;
    font-size: 17px;
    font-weight: 400;
    line-height: 22px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
}

.content-title>a {
    color: #0074CC;
    text-decoration: none;
}

.content-title>a:hover {
    color: #015ca1;
}

.content-excerpt {
    height: 34px;
    margin-bottom: 12px;
    color: var(--mode-front-color);
    font-size: 12px;
    line-height: 16px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
}

.post-cummary-meta {
    width: 100%;
    box-sizing: border-box;
    height: fit-content;
    min-height: 25px;
    overflow: hidden;
}

.meta-tags {
    float: left;
    width: fit-content;
    margin-left: 10px;
}

.el-tag{
    margin: 0 4px;
}

.meta-user-card {
    float: right;
    width: fit-content;
    height: 25px;
    margin-top: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: var(--mode-front-color);
}

.meta-action {
    margin: 0 8px;
}

.meta-time {
    margin: 0 8px;
}

.el-tag:hover {
    cursor: pointer;
}

.box-card {
    width: 96%;
    box-sizing: border-box;
    margin: 20px auto;
}

.card-header {
    font-size: 24px;
    font-weight: 800;
}
</style>
