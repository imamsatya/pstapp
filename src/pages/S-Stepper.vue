<template>
  <div>
    <div class="q-pa-md">
      <transition appear enter-active-class="animated fadeInRight" leave-active-class="animated fadeOut">
        <q-stepper v-model="step_x" header-nav ref="stepper" color="primary" animated>
          <q-step :name="1" title="Data Responden" icon="ion-contact" :done="step_x > 1" :header-nav="step_x > 1">
            <!-- form Responden -->
            <s-form></s-form>
            <q-stepper-navigation>
              <!-- <q-btn @click="() => { done1 = true; step = 2 }" color="primary" label="Continue" /> -->
              <!-- <q-btn @click="next1" color="primary" label="Continue" /> -->
            </q-stepper-navigation>
          </q-step>

          <q-step :name="2" title="Rating Pelayanan Statistik Terpadu" icon="star" :done="step_x > 2"
            :header-nav="step_x > 2">

            <!-- rating -->
            <s-rating></s-rating>

            <q-stepper-navigation>
              <q-btn @click="() => { done2 = true; step_x = 3 }" color="primary" label="Continue" />
              <q-btn flat @click="step_x = 1" color="primary" label="Back" class="q-ml-sm" />
            </q-stepper-navigation>
          </q-step>

          <q-step :name="3" title="Feedback" icon="add_comment" :header-nav="step_x > 3">
            <!-- feedback -->
            <s-feedback></s-feedback>
            <q-stepper-navigation>
              <!-- <q-btn color="primary" @click="done3 = true" label="Finish" /> -->
              <!-- <q-btn color="primary" @click="submit2" label="Finish" /> -->
              <q-btn color="primary" @click="submit3" label="Finish" />
              <!-- <q-btn color="primary" @click="submit" label="Finish2" /> -->
              <q-btn flat @click="step_x = 2" color="primary" label="Back" class="q-ml-sm" />

              <q-dialog v-model="darkDialog" persistent transition-show="flip-down" transition-hide="flip-up">
                <q-card class="bg-primary text-white">
                  <q-bar>
                    <!-- <q-icon name="sentiment_very_satisfied" /> -->
                    <div>Halo {{nama_x}}</div>

                    <q-space />

                    <q-btn dense flat icon="close" v-close-popup>
                      <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                    </q-btn>
                  </q-bar>

                  <q-card-section>
                    Yeay berhasil, terima kasih banyak telah berpartisipasi :)
                  </q-card-section>
                  <q-card-section>
                    <div class="column items-center">
                      <q-icon name="sentiment_very_satisfied" class="column items-center" size='xl' />
                    </div>
                  </q-card-section>

                  <q-card-actions align="right">
                    <!-- <q-btn flat label="Cancel" color="white" v-close-popup /> -->
                    <q-btn flat label="Ok, santai aja" color="white" @click="submit2" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </q-stepper-navigation>
          </q-step>

        </q-stepper>

      </transition>
    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      step: 1,
      darkDialog: false
    }
  },
  methods: {
    next1 () {
      // var done1 = true

      if (this.nama_x != null &&
          this.umur_x != null &&
          this.jenis_kelamin_x != null &&
          this.pendidikan_x != null &&

          (this.pekerjaan_x !== 'Lainnya' ||
            this.pekerjaan_lainnya_x != null) &&

          this.nama_instansi_x != null &&

          (this.kategori_instansi_x !== 'Lainnya' ||
            this.kategori_instansi_lainnya_x != null) &&

          this.pemanfaatan_hasil_kunjungan_x != null &&
          this.jenis_layanan_x != null &&

          (this.fasilitas_utama_x !== 'Lainnya' ||
            this.fasilitas_utama_lainnya_x != null) &&

          this.rujukan_x != null) {
        this.step = 2
        // console.log(this.nama_x)
      } else {

      }
    },
    submit3 () {
      this.darkDialog = true
    },
    submit2 () {
      var user = this.$firebase.auth().currentUser
      const formData = {
        data_id: user.uid,
        nama: this.nama_x,
        umur: this.umur_x,
        jenis_kelamin: this.jenis_kelamin_x,
        pendidikan: this.pendidikan_x,
        pekerjaan: this.pekerjaan_x,
        pekerjaan_lainnya: this.pekerjaan_lainnya_x,
        nama_instansi: this.nama_instansi_x,
        kategori_instansi: this.kategori_instansi_x,
        kategori_instansi_lainnya: this.kategori_instansi_lainnya_x,
        pemanfaatan_hasil_kunjungan: this.pemanfaatan_hasil_kunjungan_x,
        jenis_layanan: this.jenis_layanan_x,
        fasilitas_utama: this.fasilitas_utama_x,
        fasilitas_utama_lainnya: this.fasilitas_utama_lainnya_x,
        no_hp: this.no_hp_x,
        data_yang_dicari: this.data_yang_dicari_x,
        rujukan: this.rujukan_x,
        rating: this.rating_x,
        feedback: this.feedback_x,
        time: new Date()
      }
      if (formData.pekerjaan !== 'Lainnya') {
        formData.pekerjaan_lainnya = '-'
      }
      if (formData.kategori_instansi !== 'Lainnya') {
        formData.kategori_instansi_lainnya = '-'
      }
      if (formData.fasilitas_utama !== 'Lainnya') {
        formData.fasilitas_utama_lainnya = '-'
      }

      this.$firebase.firestore().collection('responden_datas').doc().set({
        user_id: user.uid,
        nama: this.nama_x,
        umur: this.umur_x,
        jenis_kelamin: this.jenis_kelamin_x,
        pendidikan: this.pendidikan_x,
        pekerjaan: this.pekerjaan_x,
        pekerjaan_lainnya: formData.pekerjaan_lainnya,
        nama_instansi: this.nama_instansi_x,
        kategori_instansi: this.kategori_instansi_x,
        kategori_instansi_lainnya: formData.kategori_instansi_lainnya,
        pemanfaatan_hasil_kunjungan: this.pemanfaatan_hasil_kunjungan_x,
        jenis_layanan: this.jenis_layanan_x,
        fasilitas_utama: this.fasilitas_utama_x,
        fasilitas_utama_lainnya: formData.fasilitas_utama_lainnya,
        no_hp: this.no_hp_x,
        data_yang_dicari: this.data_yang_dicari_x,
        rujukan: this.rujukan_x,
        rating_kualitas_data: this.rating_kualitas_data_x,
        rating_akses_data: this.rating_akses_data_x,
        rating_sarana: this.rating_sarana_x,
        feedback: this.feedback_x,
        time: new Date().toISOString()

      })
      // .then(function (docRef) {
      //   console.log('Document written with ID: ', docRef.id)
      // })
      // .catch(function (error) {
      //   console.error('Error adding document: ', error)
      // })
        .then(
          this.$q.notify({
            color: 'green-6',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Yeay Berhasil :)',
            position: 'center',
            timeout: 3000
          })
        ).then(
          this.step_x = 1,
          this.onReset()
        )
    },
    onReset () {
      this.accept = false
      this.nama_x = null
      this.umur_x = null
      this.jenis_kelamin_x = null
      this.pendidikan_x = null
      this.pekerjaan_x = null
      this.nama_instansi_x = null
      this.kategori_instansi_x = null
      this.pemanfaatan_hasil_kunjungan_x = null
      this.jenis_layanan_x = null
      this.fasilitas_utama_x = null
      this.rujukan_x = null
      this.no_hp_x = null
      this.data_yang_dicari_x = null
    },
    submit () {
      const formData = {
        nama: this.nama_x,
        umur: this.umur_x,
        jenis_kelamin: this.jenis_kelamin_x,
        pendidikan: this.pendidikan_x,
        pekerjaan: this.pekerjaan_x,
        pekerjaan_lainnya: this.pekerjaan_lainnya_x,
        nama_instansi: this.nama_instansi_x,
        kategori_instansi: this.kategori_instansi_x,
        kategori_instansi_lainnya: this.kategori_instansi_lainnya_x,
        pemanfaatan_hasil_kunjungan: this.pemanfaatan_hasil_kunjungan_x,
        jenis_layanan: this.jenis_layanan_x,
        fasilitas_utama: this.fasilitas_utama_x,
        fasilitas_utama_lainnya: this.fasilitas_utama_lainnya_x,
        rujukan: this.rujukan_x,
        rating_kualitas_data: this.rating_kualitas_data_x,
        rating_akses_data: this.rating_akses_data_x,
        rating_sarana: this.rating_sarana_x,
        feedback: this.feedback_x,
        time: new Date()
      }
      if (formData.pekerjaan !== 'Lainnya') {
        formData.pekerjaan_lainnya = '-'
      }
      if (formData.kategori_instansi !== 'Lainnya') {
        formData.kategori_instansi_lainnya = '-'
      }
      if (formData.fasilitas_utama !== 'Lainnya') {
        formData.fasilitas_utama_lainnya = '-'
      }

      this.$axios.post('https://tolis-pst.firebaseio.com/users.json', formData)
        .then(
          this.$q.notify({
            color: 'green-6',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Yeay Berhasil :)',
            position: 'center',
            timeout: 1000
          })
        )
        // .then(res => console.log(res))
        // .catch(error => console.log(error))
    }
  },
  computed: {
    nama_x: {
      set (val) {
        this.$store.state.dataresponden.nama = val
      },
      get () {
        return this.$store.state.dataresponden.nama
      }
    },
    umur_x: {
      set (val) {
        this.$store.state.dataresponden.umur = val
      },
      get () {
        return this.$store.state.dataresponden.umur
      }
    },
    jenis_kelamin_x: {
      set (val) {
        this.$store.state.dataresponden.jenis_kelamin = val
      },
      get () {
        return this.$store.state.dataresponden.jenis_kelamin
      }
    },
    pendidikan_x: {
      set (val) {
        this.$store.state.dataresponden.pendidikan = val
      },
      get () {
        return this.$store.state.dataresponden.pendidikan
      }
    },
    pekerjaan_x: {
      set (val) {
        this.$store.state.dataresponden.pekerjaan = val
      },
      get () {
        return this.$store.state.dataresponden.pekerjaan
      }
    },
    pekerjaan_lainnya_x: {
      set (val) {
        this.$store.state.dataresponden.pekerjaan_lainnya_x = val
      },
      get () {
        return this.$store.state.dataresponden.pekerjaan_lainnya
      }
    },
    nama_instansi_x: {
      set (val) {
        this.$store.state.dataresponden.nama_instansi = val
      },
      get () {
        return this.$store.state.dataresponden.nama_instansi
      }
    },
    kategori_instansi_x: {
      set (val) {
        this.$store.state.dataresponden.kategori_instansi = val
      },
      get () {
        return this.$store.state.dataresponden.kategori_instansi
      }
    },
    kategori_instansi_lainnya_x: {
      set (val) {
        this.$store.state.dataresponden.kategori_instansi_lainnya = val
      },
      get () {
        return this.$store.state.dataresponden.kategori_instansi_lainnya
      }
    },
    pemanfaatan_hasil_kunjungan_x: {
      set (val) {
        this.$store.state.dataresponden.pemanfaatan_hasil_kunjungan = val
      },
      get () {
        return this.$store.state.dataresponden.pemanfaatan_hasil_kunjungan
      }
    },
    jenis_layanan_x: {
      set (val) {
        this.$store.state.dataresponden.jenis_layanan = val
      },
      get () {
        return this.$store.state.dataresponden.jenis_layanan
      }
    },
    fasilitas_utama_x: {
      set (val) {
        this.$store.state.dataresponden.fasilitas_utama = val
      },
      get () {
        return this.$store.state.dataresponden.fasilitas_utama
      }
    },
    fasilitas_utama_lainnya_x: {
      set (val) {
        this.$store.state.dataresponden.fasilitas_utama_lainnya = val
      },
      get () {
        return this.$store.state.dataresponden.fasilitas_utama_lainnya
      }
    },
    no_hp_x: {
      set (val) {
        this.$store.state.dataresponden.no_hp = val
      },
      get () {
        return this.$store.state.dataresponden.no_hp
      }
    },
    data_yang_dicari_x: {
      set (val) {
        this.$store.state.dataresponden.data_yang_dicari = val
      },
      get () {
        return this.$store.state.dataresponden.data_yang_dicari
      }
    },
    rujukan_x: {
      set (val) {
        this.$store.state.dataresponden.rujukan = val
      },
      get () {
        return this.$store.state.dataresponden.rujukan
      }
    },
    step_x: {
      set (val) {
        this.$store.state.things.step = val
      },
      get () {
        return this.$store.state.things.step
      }
    },
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
    },
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
