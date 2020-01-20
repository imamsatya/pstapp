<template>
  <div>
    <!-- 10.172.6.67 -->
    <q-page padding>

      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <div class="row q-col-gutter-md">
          <!-- kolom 1 -->
          <div class="col-6 ">

            <q-input standout="bg-blue text-white" bottom-slots v-model="nama_x" label="Nama" counter :dense="dense"
              lazy-rules :rules="[ val => val && val.length > 0 || 'Jangan lupa diisi yaa']">
              <template v-slot:prepend>
                <q-icon name="ion-contact" />
              </template>
              <template v-slot:append>
                <q-icon name="close" @click="nama_x = ''" class="cursor-pointer" />
              </template>

              <template v-slot:hint>
                Masukkan nama lengkap anda :)
              </template>
            </q-input> <br>

            <q-input standout="bg-blue text-white" bottom-slots v-model.number="umur_x" type="number" label="Umur"
              :dense="dense" min="0" lazy-rules :rules="[
             val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
             ]
             ">
              <template v-slot:prepend>
                <q-icon name="filter_9_plus" />
              </template>
              <template v-slot:append>
                <q-icon name="close" @click="umur_x = ''" class="cursor-pointer" />
              </template>

              <template v-slot:hint>
                Masukkan umur anda :)
              </template>
            </q-input> <br>

            <q-select standout="bg-blue text-white" bottom-slots v-model="jenis_kelamin_x" :options="jenis_kelamin_s"
              label="Jenis Kelamin" :dense="dense" :options-dense="denseOpts" lazy-rules
              :rules="[ val => val && val.length > 0 || 'Jangan lupa diisi yaa']">
              <template v-slot:prepend>
                <q-icon name="wc" @click.stop />
              </template>
              <template v-slot:append>
                <q-icon name="close" @click.stop="jenis_kelamin_x = ''" class="cursor-pointer" />
              </template>

              <template v-slot:hint>
                anda laki - laki atau perempuan ? :)
              </template>
            </q-select> <br>

            <q-select standout="bg-blue text-white" bottom-slots v-model="pendidikan_x" :options="pendidikan_s"
              label="Pendidikan Terakhir yang Ditamatkan" :dense="dense" :options-dense="denseOpts" lazy-rules
              :rules="[ val => val && val.length > 0 || 'Jangan lupa diisi yaa']">
              <template v-slot:prepend>
                <q-icon name="school" @click.stop />
              </template>
              <template v-slot:append>
                <q-icon name="close" @click.stop="pendidikan_x = ''" class="cursor-pointer" />
              </template>

              <template v-slot:hint>
                Pendidikan terkahir anda apa? :)
              </template>
            </q-select> <br>

            <q-select standout="bg-blue text-white" bottom-slots v-model="pekerjaan_x" :options="pekerjaan_s"
              label="Pekerjaan Utama" :dense="dense" :options-dense="denseOpts" lazy-rules
              :rules="[ val => val && val.length > 0 || 'Jangan lupa diisi yaa']">
              <template v-slot:prepend>
                <q-icon name="work" @click.stop />
              </template>
              <template v-slot:append>
                <q-icon name="close" @click.stop="pekerjaan_x = ''" class="cursor-pointer" />
              </template>

              <template v-slot:hint>
                Pekerjaan utama anda apa ? :)
              </template>
            </q-select> <br>

            <q-input v-if="pekerjaan_x=='Lainnya'" standout="bg-blue text-white" bottom-slots
              v-model="pekerjaan_lainnya_x" label="Pekerjaan Utama" counter :dense="dense" lazy-rules
              :rules="[ val => val && val.length > 0 || 'Jangan lupa diisi yaa']">
              <template v-slot:prepend>
                <q-icon name="work" />
              </template>
              <template v-slot:append>
                <q-icon name="close" @click="pekerjaan_lainnya_x = ''" class="cursor-pointer" />
              </template>

              <template v-slot:hint>
                Masukkan pekerjaan utama anda :)
              </template>
            </q-input>

            <q-input standout="bg-blue text-white" bottom-slots v-model="nama_instansi_x"
              label="Nama Instansi/Institusi" counter :dense="dense" lazy-rules
              :rules="[ val => val && val.length > 0 || 'Jangan lupa diisi yaa']">
              <template v-slot:prepend>
                <q-icon name="business" />
              </template>
              <template v-slot:append>
                <q-icon name="close" @click="nama_instansi_x = ''" class="cursor-pointer" />
              </template>

              <template v-slot:hint>
                anda dari instansi/institusi mana ? :)
              </template>
            </q-input> <br>

            <q-select standout="bg-blue text-white" bottom-slots v-model="kategori_instansi_x"
              :options="kategori_instansi_s" label="Kategori Instansi/Institusi" :dense="dense"
              :options-dense="denseOpts" lazy-rules :rules="[ val => val && val.length > 0 || 'Jangan lupa diisi yaa']">
              <template v-slot:prepend>
                <q-icon name="business" @click.stop />
              </template>
              <template v-slot:append>
                <q-icon name="close" @click.stop="kategori_instansi_x = ''" class="cursor-pointer" />
              </template>

              <template v-slot:hint>
                Kategori instansi/institusi anda apa ? :)
              </template>
            </q-select> <br>

            <q-input v-if="kategori_instansi_x=='Lainnya'" standout="bg-blue text-white" bottom-slots
              v-model="kategori_instansi_lainnya_x" label="Kategori Instansi/Institusi" counter :dense="dense"
              lazy-rules :rules="[ val => val && val.length > 0 || 'Jangan lupa diisi yaa']">
              <template v-slot:prepend>
                <q-icon name="business" />
              </template>
              <template v-slot:append>
                <q-icon name="close" @click="kategori_instansi_lainnya_x = ''" class="cursor-pointer" />
              </template>

              <template v-slot:hint>
                Masukkan Kategori instansi anda :)
              </template><br>
            </q-input>

            <q-input standout="bg-blue text-white" bottom-slots filled v-model="no_hp_x" label="No Handphone"
              mask="#### - #### - ####" fill-mask hint="Format: #### - #### - ####" :dense="dense" lazy-rules
              :rules="[ val => val && val.length > 0 || 'Jangan lupa diisi yaa']">
              <template v-slot:prepend>
                <q-icon name="call" />
              </template>
              <template v-slot:append>
                <q-icon name="close" @click="no_hp_x = ''" class="cursor-pointer" />
              </template>

              <template v-slot:hint>
                Masukkan No Handphone anda :)
              </template><br>
            </q-input>

          </div>

          <!-- kolom 2 -->
          <div class="col-6 ">

             <q-input standout="bg-blue text-white" bottom-slots  v-model="data_yang_dicari_x" label="Data yang dicari"
             hint="anda cari data apa ?" :dense="dense" lazy-rules
              :rules="[ val => val && val.length > 0 || 'Jangan lupa diisi yaa']">
              <template v-slot:prepend>
                <q-icon name="ion-cube" />
              </template>
              <template v-slot:append>
                <q-icon name="close" @click="data_yang_dicari_x = ''" class="cursor-pointer" />
              </template>

              <template v-slot:hint>
                anda cari data apa :)
              </template><br>
            </q-input>

            <div class="q-pa-md">
              <p>Pemanfaatan Hasil Kunjungan : <span class="text-negative" v-if="cek_pemanfaatan==1">Jangan lupa diisi
                  yaa</span></p>
              <q-option-group :options="pemanfaatan_hasil_kunjungan_s" label="Pemanfaatan hasil kunjungan"
                type="checkbox" v-model="pemanfaatan_hasil_kunjungan_x" lazy-rules
                :rules="[ val => val && val.length > 0 || 'Jangan lupa diisi yaa']" />
            </div>

            <div class="q-pa-md">
              <p>Jenis Layanan yang Digunakan : <span class="text-negative" v-if="cek_jenis_layanan==1">Jangan lupa
                  diisi yaa</span></p>
              <q-option-group :options="jenis_layanan_s" label="Jenis Layanan yang Digunakan" type="checkbox"
                v-model="jenis_layanan_x" />
            </div>

            <q-select standout="bg-blue text-white" bottom-slots v-model="fasilitas_utama_x"
              :options="fasilitas_utama_s" label="Fasilitas Utama yang Digunakan untuk Memperoleh Layanan BPS"
              :dense="dense" :options-dense="denseOpts" lazy-rules
              :rules="[ val => val && val.length > 0 || 'Jangan lupa diisi yaa']">
              <template v-slot:prepend>
                <q-icon name="extension" @click.stop />
              </template>
              <template v-slot:append>
                <q-icon name="close" @click.stop="fasilitas_utama_x = ''" class="cursor-pointer" />
              </template>

              <template v-slot:hint>
                Fasilitas Utama yang anda gunakan ? :)
              </template>
            </q-select> <br>
            <q-input v-if="fasilitas_utama_x=='Lainnya'" standout="bg-blue text-white" bottom-slots
              v-model="fasilitas_utama_lainnya_x" label="Fasilitas Utama" counter :dense="dense" lazy-rules
              :rules="[ val => val && val.length > 0 || 'Jangan lupa diisi yaa']">
              <template v-slot:prepend>
                <q-icon name="extension" />
              </template>
              <template v-slot:append>
                <q-icon name="close" @click="fasilitas_utama_lainnya_x = ''" class="cursor-pointer" />
              </template>

              <template v-slot:hint>
                Fasilitas utama yang anda gunakan ? :)
              </template><br>
            </q-input>
            <q-select standout="bg-blue text-white" bottom-slots v-model="rujukan_x" :options="rujukan_s"
              label="Apakah Data BPS Digunakan Sebagai Rujukan Utama ?" :dense="dense" :options-dense="denseOpts"
              lazy-rules :rules="[ val => val && val.length > 0 || 'Jangan lupa diisi yaa']">
              <template v-slot:prepend>
                <q-icon name="assignment_turned_in" @click.stop />
              </template>
              <template v-slot:append>
                <q-icon name="close" @click.stop="rujukan_x= ''" class="cursor-pointer" />
              </template>

              <template v-slot:hint>
                Apakah sebagai rujukan utama ? :)
              </template>
            </q-select> <br>
          </div>

          <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> <br> -->

          <div>
            <q-btn label="Continue" type="submit" color="primary" />

            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div>

        </div>

      </q-form>
    </q-page>

  </div>
</template>

<script>
export default {
  data () {
    return {
      cek_pemanfaatan: 0,
      cek_jenis_layanan: 0,
      nama: null,
      umur: null,
      jenis_kelamin: null,
      jenis_kelamin_s: [
        'Laki-laki', 'Perempuan'
      ],

      pendidikan: null,
      pendidikan_s: [
        'SLTP/Sederajat', 'SLTA/Sederajat', 'D1/D2/D3', 'D4/S1', 'S2/S3'
      ],

      pekerjaan: null,
      pekerjaan_s: [
        'Pelajar/Mahasiswa', 'Peneliti/Dosen', 'PNS/TNI/Polri', 'Pegawai BUMN/D', 'Pegawai Swasta', 'Wiraswasta',
        'Lainnya'
      ],

      nama_instansi: null,

      kategori_instansi: null,
      kategori_instansi_s: [
        'Lembaga Pendidikan & Penelitian Dalam Negeri',
        'Lembaga Pendidikan & Penelitian Luar Negeri',
        'Kementrian & Lembaga Pemerintah',
        'Lembaga Internasional',
        'Media Massa',
        'Pemerintah Daerah',
        'Perbankan',
        'BUMN/BUMD',
        'Swasta lainnya',
        'Lainnya'
      ],

      pemanfaatan_hasil_kunjungan: [],
      pemanfaatan_hasil_kunjungan_s: [{
        label: 'Tugas Sekolah/Tugas Kuliah',
        value: 1
      },
      {
        label: 'Skripsi/Tesis/Disertasi',
        value: 2
      },
      {
        label: 'Penelitian',
        value: 4
      },
      {
        label: 'Perencanaan',
        value: 8
      },
      {
        label: 'Evaluasi',
        value: 16
      },
      {
        label: 'Penyebaran Informasi',
        value: 32
      }
      ],

      jenis_layanan: [],
      jenis_layanan_s: [{
        label: 'Perpustakaan Tercetak',
        value: 1
      },
      {
        label: 'Perpustakaan Digital',
        value: 2

      },
      {
        label: 'Penjualan Buku',
        value: 4

      },
      {
        label: 'Data Mikro/Peta Digital/Softcopy Publikasi',
        value: 8
      },
      {
        label: 'Konsultasi Data Statistik',
        value: 16
      },
      {
        label: 'Konsultasi dan Rekomendasi Kegiatan Statistik',
        value: 32
      }
      ],

      fasilitas_utama: [],
      fasilitas_utama_s: [
        'Website BPS',
        'Telepon/Faksimili',
        'E-mail',
        'Surat',
        'PST/Perpustakaan BPS',
        'Layanan Statistik Online',
        'Lainnya'
      ],

      rujukan: [],
      rujukan_s: [
        'Ya',
        'Tidak'
      ],

      text: '',
      ph: '',

      dense: false,
      denseOpts: true
    }
  },

  methods: {
    onSubmit () {
      if (Object.keys(this.pemanfaatan_hasil_kunjungan_x).length === 0 || Object.keys(this.jenis_layanan_x).length ===
          0) {
        if (Object.keys(this.pemanfaatan_hasil_kunjungan_x).length === 0) {
          this.cek_pemanfaatan = 1
        } else {
          this.cek_pemanfaatan = 0
        }

        if (Object.keys(this.jenis_layanan_x).length === 0) {
          this.cek_jenis_layanan = 1
        } else {
          this.cek_jenis_layanan = 0
        }

        this.$q.notify({
          color: 'red-6',
          textColor: 'white',
          icon: 'highlight_off',
          message: 'Maaf, ada error :(',
          position: 'center',
          timeout: 1000
        })
      } else {
        this.step_x = 2
      }
      //
      // console.log('submitted')
      // console.log(this.accept)
      // console.log(this.nama_x)
      // console.log(this.umur_x)
      // console.log(this.jenis_kelamin_x)
      // console.log(this.pendidikan_x)
      // console.log(this.pekerjaan_x)
      // console.log(this.pekerjaan_lainnya_x)
      // console.log(this.nama_instansi_x)
      // console.log(this.kategori_instansi_x)
      // console.log(this.kategori_instansi_lainnya_x)
      // console.log(Object.keys(this.pemanfaatan_hasil_kunjungan_x).length)
      // console.log(this.jenis_layanan_x)
      // console.log(this.fasilitas_utama_x)
      // console.log(this.fasilitas_utama_lainnya_x)
      // console.log(this.rujukan_x)

      // }
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
      this.pemanfaatan_hasil_kunjungan_x = ''
      this.jenis_layanan_x = ''
      this.fasilitas_utama_x = null
      this.rujukan_x = null
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
        this.$store.state.dataresponden.pekerjaan_lainnya = val
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
    }
  }
}

</script>
