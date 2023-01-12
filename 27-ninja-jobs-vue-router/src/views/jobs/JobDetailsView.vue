<template>
 <h1>Job Details Page</h1>
 <!-- <p>Job id is {{ $route.params.id}}</p> -->
 <p>Job id is {{ this.id}}</p>
</template>

<script>
export default {
 props: ["id"],
 // data() {
 //     return {
 //         id: this.$route.params.id,
 //     }
 // }  // No need no more to get the id. Props are best.
};
</script>

<style>
</style>