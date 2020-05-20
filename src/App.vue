<template>
  <div id="app">
    <a-layout>
      <a-layout-content>
        <h1>📗课表</h1>
        <my-github-button />
        <course-table />
      </a-layout-content>
      <a-layout-footer>
        <div>
          ©2020 by
          <a href="https://msun.work/">Marshall Sun</a>
        </div>
        <div>
          Proudly powered by
          <a href="https://cn.vuejs.org/">
            <img
              width="55px"
              src="https://raw.githubusercontent.com/Marshall-Sun/CDN/master/coursetable/vue.svg"
              alt="Vue.js"
            />
          </a>
        </div>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import CourseTable from "./components/course-table.vue";
import MyGithubButton from "./components/button.vue";

export default {
  name: "App",
  components: {
    CourseTable,
    MyGithubButton,
  },
};
</script>

<style>
#app {
  text-align: center;
}

.ant-layout-content {
  background-color: #41b883;
  background-image: url("https://raw.githubusercontent.com/Marshall-Sun/CDN/master/coursetable/arches.png");
  padding-bottom: 64px;
}

#app h1 {
  font-family: Ubuntu;
  font-weight: bold;
  margin-top: 32px;
  margin-bottom: 10px;
  font-size: 2em;
}

span.ant-cascader-picker {
  width: 215px;
  text-align: left;
  margin-top: 8px;
  margin-bottom: 16px;
}

.ant-layout .ant-layout-footer {
  background:
    url("https://raw.githubusercontent.com/Marshall-Sun/CDN/master/coursetable/arches.png")
    rgba(0, 0, 0, 0.55);
  background-blend-mode: multiply;
  color: black;
}

.ant-layout .ant-layout-footer a {
  color: black;
}

.ant-layout .ant-layout-footer div {
  font-size: 14px;
  line-height: 2;
}
</style>
