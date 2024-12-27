<template>
  <div>
    <form action="">
      <div>
        <f-input label="Group Name" />
      </div>
      <div>
        <h2>Owner Data</h2>
        <div v-if="!newUser">
          <f-autoComplete
            label="Full Name <span>if the user is existing</span>"
          />
          <img src="" alt="" />
        </div>
        <div v-else>
          <f-input label="Full Name" />
          <f-input label="Email Address" type="email" />
          <f-input label="Phone Number" type="tel" />
          <f-input label="Password" type="password" />
          <f-input label="Confirm Password" type="password" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>