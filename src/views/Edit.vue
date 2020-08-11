<template>
  <div class="Form-Page">
    <Form />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Form from "@/components/Form.vue";

export default Vue.extend({
  name: "Edit",
  components: {
    Form
  }
});
</script>
