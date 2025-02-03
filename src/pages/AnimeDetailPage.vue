<template>
  <div>
    <div
      class="flex text-white flex-col text-left ml-3 absolute top-3 z-50 left-4"
    >
      <div class="lg:text-[16px] text-[14px]">Major Update</div>
      <div class="text-[20px] lg:text-[24px] font-extrabold">
        Only I Can Call My Dream Stupid
      </div>
    </div>
    <div
      class="absolute top-2 right-2 z-50 text-[18px] bg-slate-50 px-2 font-bold lg:hidden flex rounded-full cursor-pointer"
      @click="handleClick"
    >
      x
    </div>
    <div class="absolute top-[-8px] left-0">
      <common-component type="detail" />
    </div>
    <div class="flex justify-center">
      <div
        class="absolute top-[62vh] md:top-[58vh] lg:top-[78vh] text-justify lg:w-[1200px] w-[94vw]"
        v-html="animeData.text"
      ></div>
      
    </div>
      

  </div>
</template>

<script>
import CommonComponent from "@/components/CommonComponent.vue";
import { mapState } from "vuex";
export default {
  name: "AnimeDetailPage",
  components: {
    CommonComponent,
  },
  computed: {
    ...mapState(["animeData"]),
  },
  methods:{
    handleClick() {
      this.$router.push("/")
    }
  }
};
</script>

<style></style>
