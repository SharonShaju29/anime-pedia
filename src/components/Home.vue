<template>
  <div class="flex flex-col justify-center">
    <div class="flex pl-[5vw] lg:pl-0 font-semibold text-gray-500">
      {{date}}
    </div>
    <div class="lg:w-[1200px] w-[90vw] ml-[5vw] lg:ml-0">
      <div class="flex justify-between items-center">
        <b class="text-[24px] font-extrabold">Today</b>
        <div class="rounded-full bg-gray-300 px-2 py-1 text-[20px] font-bold">
          {{username}}
        </div>
      </div>
    </div>
    <div @click="handleClick">
      <common-component type="home" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CommonComponent from "./CommonComponent.vue";

export default {
  name: "HelloWorld",
  data() {
    return {
      date: "",
    };
  },
  props: {
    msg: String,
  },
  components: {
    CommonComponent,
  },
  mounted() {
    this.setDate();
  },
  methods: {
    handleClick() {
      this.$router.push("/detail");
    },

    setDate() {
      const currentDate = new Date();

      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const monthsOfYear = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const dayOfWeek = daysOfWeek[currentDate.getDay()];
      const dayOfMonth = currentDate.getDate();
      const monthOfYear = monthsOfYear[currentDate.getMonth()];

      this.date = `${dayOfWeek} ${dayOfMonth} ${monthOfYear}`;
    },
  },
  computed: {
    ...mapState(["animeData","username"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
