<template>
  <div>
    <div class="mt-6" v-if="user">{{ user.displayName }}</div>
  </div>
</template>

<script>
import { useUser } from '@/composables/useUser'
export default {
  name: 'Home',
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();

    return { user };
  }
}
</script>
