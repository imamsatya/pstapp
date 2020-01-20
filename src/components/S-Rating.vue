<template>
<div>
  <div class="q-pa-md" >

    <div class="q-gutter-y-md column items-center">
      Puas dengan kualitas data statistik ?
      <q-rating
        v-model="rating_kualitas_data_x"
        size="3.5em"
        color="blue-5"
        icon="star_border"
        icon-selected="star"
      />
      <br>
      Puas terhadap akses data BPS ?
      <q-rating
        v-model="rating_akses_data_x"
        size="3.5em"
        color="blue-5"
        icon="star_border"
        icon-selected="star"
      />
      <br>
      Puas terhadap pemenuhan sarana dan prasarana BPS ?
      <q-rating
        v-model="rating_sarana_x"
        size="3.5em"
        color="blue-5"
        icon="star_border"
        icon-selected="star"
      />

    </div>
<br>

  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ratingModel: 0,
      icons: [
        'sentiment_very_dissatisfied',
        // 'sentiment_dissatisfied',
        // 'sentiment_neutral',
        // 'sentiment_satisfied',
        'sentiment_very_satisfied'
      ]
    }
  },
  computed: {
    rating_kualitas_data_x: {
      set (val) {
        this.$store.state.dataresponden.rating_kualitas_data = val
      },
      get () {
        return this.$store.state.dataresponden.rating_kualitas_data
      }
    },
    rating_akses_data_x: {
      set (val) {
        this.$store.state.dataresponden.rating_akses_data = val
      },
      get () {
        return this.$store.state.dataresponden.rating_akses_data
      }
    },
    rating_sarana_x: {
      set (val) {
        this.$store.state.dataresponden.rating_sarana = val
      },
      get () {
        return this.$store.state.dataresponden.rating_sarana
      }
    }
  }
}
</script>
