<template>
  <div>
    <span>DIFF => {{ diff }}</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { diff } from "just-diff";

const obj1 = { a: 4, b: 5 };
const obj2 = { a: 3, b: 5 };

export default Vue.extend({
  data() {
    return {
      diff: diff(obj1, obj2),
    };
  },
});
</script>
