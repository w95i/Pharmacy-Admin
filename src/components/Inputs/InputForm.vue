<template>
  <div class="input_group">
    <slot name="label">
      <label v-if="label" class="control-label">
        {{ label }}
      </label>
    </slot>
    <input
      :value="modelValue"
      :type="type"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
      class="form-control"
      aria-describedby="addon-right addon-left"
    />
  </div>
</template>

<script>
export default {
  name: "fg-input",
  props: {
    label: String,
    modelValue: [String, Number], // Use `modelValue` for v-model
    type: {
      type: String,
      default: "text",
    },
  },
};
</script>

<style scoped>
.input_group {
  display: flex;
  grid-area: field;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  gap: 7px;
  padding: 5px 10px;
}

.input_group input {
  width: 90%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #e7e7e7;
  transition: 0.15s opacity cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.875rem;
  display: flex;
  flex-wrap: wrap;
  letter-spacing: 0.009375em;
}

.input_group input:focus {
  outline: 2px solid rgb(93, 135, 255);
}
</style>
