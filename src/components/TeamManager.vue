<template>
  <div>
    <SideBarManager />
    <TMMain />
  </div>
</template>

<script>
import SideBarManager from "@/components/SideBar_Manager";
import TMMain from "@/components/TMMain";

export default {
  name: "TeamManager",
  components: {
    SideBarManager,
    TMMain,
  },
};
</script>