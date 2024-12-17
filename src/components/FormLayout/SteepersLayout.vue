<template>
  <div class="stepper-container">
    <div class="step-header">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="step"
        :class="{
          active: currentStep === index + 1,
          completed: currentStep > index + 1,
        }"
      >
        <span class="step-number">{{ index + 1 }}</span>
        <span class="step-title">{{ step.title }}</span>
      </div>
    </div>

    <div class="step-content">
      <h3>{{ steps[currentStep - 1].contentTitle }}</h3>
      <p>{{ steps[currentStep - 1].content }}</p>
    </div>

    <div class="step-footer">
      <button :disabled="currentStep === 1" @click="prevStep" class="btn">
        Previous
      </button>
      <button v-if="currentStep < steps.length" @click="nextStep" class="btn">
        Next
      </button>
      <button v-else class="btn" @click="finish">Finish</button>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "StepperComponent",
  props: {
    steps: {
      type: Array,
      required: true,
      // Expected format: [{ title: 'Step 1', contentTitle: 'Title', content: 'Lorem ipsum...' }, ...]
    },
  },
  data() {
    return {
      currentStep: 1,
    };
  },
  methods: {
    nextStep() {
      if (this.currentStep < this.steps.length) {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    finish() {
      this.$emit("finished");
      alert("Steps Completed!");
    },
  },
};
</script>
  
  <style scoped>
.stepper-container {
  width: 100%;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  font-family: Arial, sans-serif;
}

.step-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  text-align: center;
  color: #ccc;
  position: relative;
}

.step-number {
  width: 30px;
  height: 30px;
  background: #e6e6e6;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  font-weight: bold;
}

.step.active .step-number {
  background: #007bff;
  color: #fff;
}

.step.completed .step-number {
  background: #28a745;
  color: #fff;
}

.step-title {
  font-size: 14px;
}

.step-content {
  margin: 20px 0;
  font-size: 16px;
}

.step-footer {
  display: flex;
  justify-content: space-between;
}

.btn {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

.btn[disabled] {
  background-color: #ddd;
  cursor: not-allowed;
}
</style>
  