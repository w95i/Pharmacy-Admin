<template>
  <div>
    <form @submit.prevent="">
      <div>
        <f-input label="Group Name" />
      </div>
      <div>
        <h2>Owner Data</h2>
        <div v-if="!newUser">
          <f-autoComplete
            label="Full Name"
            note="(if the user is existing)"
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
      <div>
        <h2>Pharmacy Data</h2>
        <div>
          <f-input label="Name"/>
          <fieldset>
            <legend>Location</legend>
            <f-input :label="$t('address')" />
            <f-input :label="$t('latitude')" type="number"/>
            <f-input :label="$t('longitude')" type="number"/>
          </fieldset>
          <f-input :label="$t('price')" type="number" />
          <f-input :label="$t('discount')" type="number" />
          <f-input :label="$t('expire-date')" />
        </div>
      </div>
      <div>
        <button type="submit">{{ $t('send') }}</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>