<template>
  <github-button
    href="https://github.com/Marshall-Sun/coursetable-vue"
    data-icon="octicon-star"
    data-size="large"
    aria-label="Star Marshall-Sun/coursetable-vue on GitHub"
    >Star</github-button
  >
</template>

<script>
import GithubButton from "vue-github-button";

export default {
  name: "my-github-button",
  components: {
    GithubButton,
  },
};
</script>
