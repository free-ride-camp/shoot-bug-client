<template>
    <div class="content container">
        <div class="filter-part">
            <div class="search-bar">
                <search-bar width="300px" height="35px" half-radius placeholder="标签名" />
            </div>
            <div class="selector-group">
                <selector-group :group="group" />
            </div>
        </div>
        <el-divider></el-divider>
        <div class="tags-part">
            <tag-card v-for="a in 25" :key="a" width="250px" height="180px"
                tagName="Java"
                :tagDesc="tagDesc"
                quesCount="20000"
                todayAsked="100"
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
import SearchBar from '../components/SearchBar.vue';
import SelectorGroup from '../components/SelectorGroup.vue';
import TagCard from '../components/TagCard.vue';
//sof上的一些细节
//当整体页面宽度变化时，grid布局会响应变化来自适应，目前还没实现
export default {
    name:'TagsPage',
    components:{
        SearchBar,
        SelectorGroup,
        TagCard
    },
    data() {
        return {
            group:['热门的','最新的','按字母排序'],
            tagDesc:`Java是一门面向对象的编程语言，不仅吸收了C++语言的各种优点，
            还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。
            Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，
            允许程序员以优雅的思维方式进行复杂的编程`
        }
    },
}
</script>

<style scoped>
.container{
    display: inline;
    padding-left: 16px;
}

.filter-part{
    height: 100px;
}

.tags-part{
    width: 100%;
    min-height: 960px;
    height: fit-content;
    margin: 20px 0;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    grid-template-rows: repeat(5,1fr);
    grid-row-gap: 16px;
    grid-column-gap: 16px;

}

.search-bar{
    float: left;
    margin-top: 60px;
}

.selector-group{
    float: right;
    margin-top: 60px;
}
</style>