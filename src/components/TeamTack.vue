<template>
  <div>
    <SideBar />
    <Main />
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import Main from "@/components/Main";

export default {
  name: "TeamTack",
  components: {
    SideBar,
    Main,
  },
};
</script>

<style>
</style>
