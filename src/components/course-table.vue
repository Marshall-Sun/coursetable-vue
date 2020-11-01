<template>
  <div>
    <a-cascader
      :options="options"
      :default-value="values"
      @change="onChange"
      :allowClear="false"
    />
    <a-table
      :data-source="data"
      size="middle"
      :pagination="false"
      :scroll="{ x: '800px' }"
      bordered
    >
      <a-table-column class="leftbody" title="节次" data-index="key">
        <template slot-scope="text, item">
          <div>
            <span class="leftfirst">第{{ item.key * 2 - 1 }}节</span>
            <span class="leftsecond">第{{ item.key * 2 }}节</span>
          </div>
        </template>
      </a-table-column>
      <a-table-column title="星期日" data-index="Sun">
        <template slot-scope="text, info">
          <div class="name">{{ info.Sun.name }}</div>
          <div class="teacher">{{ info.Sun.teacher }}</div>
          <div class="location">{{ info.Sun.location }}</div>
        </template>
      </a-table-column>
      <a-table-column title="星期一" data-index="Mon">
        <template slot-scope="text, info">
          <div class="name">{{ info.Mon.name }}</div>
          <div class="teacher">{{ info.Mon.teacher }}</div>
          <div class="location">{{ info.Mon.location }}</div>
        </template>
      </a-table-column>
      <a-table-column title="星期二" data-index="Tue">
        <template slot-scope="text, info">
          <div class="name">{{ info.Tue.name }}</div>
          <div class="teacher">{{ info.Tue.teacher }}</div>
          <div class="location">{{ info.Tue.location }}</div>
        </template>
      </a-table-column>
      <a-table-column title="星期三" data-index="Wed">
        <template slot-scope="text, info">
          <div class="name">{{ info.Wed.name }}</div>
          <div class="teacher">{{ info.Wed.teacher }}</div>
          <div class="location">{{ info.Wed.location }}</div>
        </template>
      </a-table-column>
      <a-table-column title="星期四" data-index="Tur">
        <template slot-scope="text, info">
          <div class="name">{{ info.Tur.name }}</div>
          <div class="teacher">{{ info.Tur.teacher }}</div>
          <div class="location">{{ info.Tur.location }}</div>
        </template>
      </a-table-column>
      <a-table-column title="星期五" data-index="Fri">
        <template slot-scope="text, info">
          <div class="name">{{ info.Fri.name }}</div>
          <div class="teacher">{{ info.Fri.teacher }}</div>
          <div class="location">{{ info.Fri.location }}</div>
        </template>
      </a-table-column>
      <a-table-column title="星期六" data-index="Sat">
        <template slot-scope="text, info">
          <div class="name">{{ info.Sat.name }}</div>
          <div class="teacher">{{ info.Sat.teacher }}</div>
          <div class="location">{{ info.Sat.location }}</div>
        </template>
      </a-table-column>
    </a-table>
    <div class="outcontent"></div>
  </div>
</template>

<script>
export default {
  name: "CourseTable",
  methods: {
    initCourse(json) {
      this.myCourse = json.data;
      this.onChange(this.values);
    },
    initSemester(json) {
      this.options = json.data;
      let now = new Date();
      let period;
      const SPRING_2020 = new Date("2020-02-23 00:00:00.000");
      const SUMMER_2020 = new Date("2020-06-28 00:00:00.000");
      const FALL_2020 = new Date("2020-09-06 00:00:00.000");

      if (SPRING_2020 <= now && now < SUMMER_2020) {
        period = now.getTime() - SPRING_2020.getTime();
        this.values[1] = 1;
      } else if (now < FALL_2020) {
        period = now.getTime() - SUMMER_2020.getTime();
        this.values[1] = 2;
      } else {
        period = now.getTime() - FALL_2020.getTime();
        this.values[1] = 3;
      }

      this.values[2] = Math.ceil(period / 1000 / 86400 / 7);
    },
    onChange(value) {
      this.values = value;
      for (const item of this.data) {
        item.Sun = {};
        item.Mon = {};
        item.Tue = {};
        item.Wed = {};
        item.Tur = {};
        item.Fri = {};
        item.Sat = {};
      }

      for (const course of this.myCourse) {
        if (
          course.year == this.values[0] &&
          course.semester == this.values[1] &&
          course.week.indexOf(this.values[2]) != -1
        ) {
          let courseTime = Math.floor(course.time.split("-")[0] / 2);
          switch (course.day) {
            case 0:
              this.data[courseTime].Sun = course;
              break;
            case 1:
              this.data[courseTime].Mon = course;
              break;
            case 2:
              this.data[courseTime].Tue = course;
              break;
            case 3:
              this.data[courseTime].Wed = course;
              break;
            case 4:
              this.data[courseTime].Tur = course;
              break;
            case 5:
              this.data[courseTime].Fri = course;
              break;
            case 6:
              this.data[courseTime].Sat = course;
              break;
            default:
              break;
          }
        }
      }
    },
  },
  created() {
    this.$http
      .get(
        "https://cdn.jsdelivr.net/gh/marshall-sun/CDN@latest/coursetable/semesterList.json"
      )
      .then((json) => {
        this.initSemester(json);
      });
    this.$http
      .get(
        "https://cdn.jsdelivr.net/gh/marshall-sun/CDN@latest/coursetable/myCourse.json"
      )
      .then((json) => {
        this.initCourse(json);
      });
  },
  data() {
    return {
      data: [
        {
          key: 1,
          Sun: {},
          Mon: {},
          Tue: {},
          Wed: {},
          Tur: {},
          Fri: {},
          Sat: {},
        },
        {
          key: 2,
          Sun: {},
          Mon: {},
          Tue: {},
          Wed: {},
          Tur: {},
          Fri: {},
          Sat: {},
        },
        {
          key: 3,
          Sun: {},
          Mon: {},
          Tue: {},
          Wed: {},
          Tur: {},
          Fri: {},
          Sat: {},
        },
        {
          key: 4,
          Sun: {},
          Mon: {},
          Tue: {},
          Wed: {},
          Tur: {},
          Fri: {},
          Sat: {},
        },
        {
          key: 5,
          Sun: {},
          Mon: {},
          Tue: {},
          Wed: {},
          Tur: {},
          Fri: {},
          Sat: {},
        },
        {
          key: 6,
          Sun: {},
          Mon: {},
          Tue: {},
          Wed: {},
          Tur: {},
          Fri: {},
          Sat: {},
        },
      ],
      options: [],
      values: [2020, 1, 1],
      myCourse: [],
    };
  },
};
</script>

<style>
.outcontent {
  background-color: #41b883;
  background-image: url("https://cdn.jsdelivr.net/gh/marshall-sun/CDN@1.6/coursetable/arches.png");
  position: relative;
  bottom: 17px;
  height: 19px;
}

td div {
  text-align: center;
}

.ant-table-middle
  > .ant-table-content
  > .ant-table-scroll
  > .ant-table-body
  > table
  > .ant-table-thead
  > tr
  > th {
  text-align: center;
  background-color: #41b883;
  background-image: url("https://cdn.jsdelivr.net/gh/marshall-sun/CDN@1.6/coursetable/arches.png");
}

.ant-table-middle
  > .ant-table-content
  > .ant-table-scroll
  > .ant-table-body
  > table
  > .ant-table-tbody
  > tr
  > .leftbody {
  display: table-cell;
  padding-left: unset;
  padding-right: unset;
}

.ant-table-middle {
  background-color: #41b883;
  background-image: url("https://cdn.jsdelivr.net/gh/marshall-sun/CDN@1.6/coursetable/batthern.png");
}

.ant-table-bordered div.ant-table-body > table {
  border: 1px solid gray;
}

tbody.ant-table-tbody > tr > td,
thead.ant-table-thead > tr > th {
  border-bottom: 1px solid gray;
}

.ant-table-bordered thead.ant-table-thead > tr > th,
.ant-table-bordered tbody.ant-table-tbody > tr > td {
  border-right: 1px solid gray;
}

.leftbody div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.leftfirst {
  border-bottom: 1px solid gray;
  padding-bottom: 14px;
}

.leftsecond {
  padding-top: 14px;
}

.name {
  font-weight: bold;
}

.location,
.teacher {
  font-size: smaller;
}

tbody > .ant-table-row > td:not(.leftbody):hover {
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  z-index: 100;
  position: relative;
}
</style>
