<template>
    <div class="Home">
        <PostList :posts="posts" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import PostList from '@/components/Modules/PostList';

export default defineComponent({
  name: 'Home',
  components: {
    PostList,
  },
  setup() {
    const posts = ['aaa', 'aasdasda'];
    console.log('aaa');
    return { posts };
  },

});
</script>
