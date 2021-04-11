<template>
    <div class="PostList">
        <div v-for="(post, key) in posts" :key="key">
            aaa
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'PostList',
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const posts = props.posts.concat();
    console.log(posts);
    console.log('aaaa');
    return posts;
  },
});
</script>
