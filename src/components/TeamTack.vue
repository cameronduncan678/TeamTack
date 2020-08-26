<template>
  <div>
    <Header />
    <SideBar />
    <Main />
  </div>
</template>

<script>
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Main from "@/components/Main";

export default {
  name: "TeamTack",
  components: {
    Header,
    SideBar,
    Main,
  },
};
</script>

<style>
</style>
