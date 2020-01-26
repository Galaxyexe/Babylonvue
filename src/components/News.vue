<template>
  <div>
    <div>
      <TrendingNews />
    </div>
    <h1>News</h1>
    <p>Here is some information. This is the news page</p>
  </div>
</template>

<script>
import TrendingNews from "@/components/TrendingNews";
export default {
  name: "News",
  components: {
    TrendingNews
  }
};
</script>
<style>
</style>