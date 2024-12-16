<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <f-input :label="'Your Name'" />
    <f-autoComplete />
    <f-multiSelect />
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>
