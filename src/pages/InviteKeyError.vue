<template>
  <div class="error">
    Invite key is invalid
  </div>
</template>

<script>
export default {
  name: 'InviteKeyError'
}
</script>

<style scoped>
  .error {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    color: var(--red-color);
    white-space: nowrap;
  }
</style>