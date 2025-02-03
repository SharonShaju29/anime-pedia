<template>
  <div class="rounded-lg flex flex-col justify-center mt-2 cursor-pointer">
    <img
      :src="animeData.thumbNailImage"
      class="lg:ml-0 lg:h-[60vh] h-[50vh] object-cover"
      :class="
        type === 'detail'
          ? 'w-[100vw] ml-0'
          : 'ml-[5vw] w-[90vw] rounded-t-2xl'
      "
    />
    <div
      class="flex  h-20 justify-between lg:w-auto lg:ml-0 "
      :class="
        type === 'detail' ? 'w-[100vw] border-b-[1px] border-black' : 'shadow-2xl rounded-b-2xl w-[90vw] ml-[5vw]'
      "
    >
      <div class="flex items-center">
        <img
          :src="animeData.logo"
          class="h-[48px] w-[48px] object-cover rounded-lg lg:mx-4 ml-3 mr-2"
        />
        <div class="flex flex-col text-left">
          <b class="text-black lg:text-[16px] text-[12px]">{{
            animeData.title
          }}</b
          ><span class="text-gray lg:text-[12px] text-[10px]">{{
            animeData.subTitle
          }}</span>
        </div>
      </div>
      <div class="flex items-center lg:mr-4 mr-3">
        <div class="flex-col">
          <b
            class="rounded-2xl bg-gray-300 py-1 text-[12px] lg:text-[16px] lg:px-4 px-2 text-blue-800 cursor-pointer"
            @click="handleRefresh"
          >
            REFRESH
          </b>
          <div class="flex justify-center text-gray-700 text-[8px] pt-1">
            In-App Purchase
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "CommonComponent",
  props: {
    type: String,
  },
  computed: {
    ...mapState(["animeData"]),
  },
  methods: {
    ...mapActions(["getAnimeHome"]),
    handleRefresh() {
      this.getAnimeHome();
    },
  },
  mounted() {
    this.getAnimeHome();
  },
};
</script>

<style></style>
