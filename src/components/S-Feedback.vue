<template>
<div>
    <p>Ada kritik ataupun saran? Boleh sekali </p>
  <div class="q-pa-md" >
    <q-input
      v-model="feedback_x"
      filled
      type="textarea"
    />
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  computed: {
    feedback_x: {
      set (val) {
        this.$store.state.dataresponden.feedback = val
      },
      get () {
        return this.$store.state.dataresponden.feedback
      }
    }
  }
}
</script>
