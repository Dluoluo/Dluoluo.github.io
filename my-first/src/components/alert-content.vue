<template>
    <div class="alert-contet">
       <slot :name="showName"></slot>
    </div>
</template>

<script>
export default {
  data() {
    return {
      showName: ""
    };
  },
  methods: {
    isShow(payload) {
      this.showName = payload.name;
    }
  },
  created() {
    this.$root.Bus.$on("show", this.isShow);
  }
};
</script>

<style scoped>

</style>