<template>
  <div>
    <div class="q-pa-md">
      <transition appear enter-active-class="animated fadeInRight" leave-active-class="animated fadeOut">
        <q-table title="Data Responden" :data="get_data[0]" :columns="columns" row-key="name" :filter="filter"
          :loading="loading" :visible-columns="visibleColumns" no-data-label="I didn't find anything for you"
          no-results-label="The filter didn't uncover any results">

          <template v-slot:body="props">
                <q-tr :props="props">

                  <q-td key="nama" :props="props">
                    <q-badge color="primary">
                      {{ props.row.nama }}
                    </q-badge>
                  </q-td>

                  <q-td key="umur" :props="props">
                    <q-badge color="primary">
                      {{ props.row.umur }}
                    </q-badge>
                  </q-td>

                  <q-td key="jenis_kelamin" :props="props">
                    <q-badge color="primary">
                      {{ props.row.jenis_kelamin }}
                    </q-badge>
                  </q-td>
                  <q-td key="pendidikan_terakhir" :props="props">
                    <q-badge color="primary">
                      {{ props.row.pendidikan }}
                    </q-badge>
                  </q-td>
                  <q-td key="pekerjaan_utama" :props="props">
                    <q-badge color="primary">
                      {{ props.row.pekerjaan }}
                    </q-badge>
                  </q-td>
                  <q-td key="pekerjaan_lainnya" :props="props">
                      <q-badge color="primary">
                      {{ props.row.pekerjaan_lainnya }}
                      </q-badge>
                  </q-td>

                  <q-td key="nama_instansi" :props="props">
                      <q-badge color="primary">
                      {{ props.row.nama_instansi }}
                      </q-badge>
                  </q-td>

                  <q-td key="kategori_instansi" :props="props">
                      <q-badge color="primary">
                      {{ props.row.kategori_instansi }}
                      </q-badge>
                  </q-td>

                  <q-td key="kategori_instansi_lainnya" :props="props">
                      <q-badge color="primary">
                      {{ props.row.kategori_instansi_lainnya }}
                      </q-badge>
                  </q-td>

                  <q-td key="pemanfaatan_hasil_kunjungan" :props="props">
                      <q-badge color="primary">
                      {{ props.row.pemanfaatan_hasil_kunjungan }}
                      </q-badge>
                  </q-td>

                  <q-td key="jenis_layanan" :props="props">
                      <q-badge color="primary">
                      {{ props.row.jenis_layanan }}
                      </q-badge>
                  </q-td>

                  <q-td key="fasilitas_utama" :props="props">
                      <q-badge color="primary">
                      {{ props.row.fasilitas_utama }}
                      </q-badge>
                  </q-td>

                  <q-td key="fasilitas_utama_lainnya" :props="props">
                      <q-badge color="primary">
                      {{ props.row.fasilitas_utama_lainnya }}
                      </q-badge>
                  </q-td>

                  <q-td key="rujukan" :props="props">
                      <q-badge color="primary">
                      {{ props.row.rujukan }}
                      </q-badge>
                  </q-td>

                  <q-td key="no_hp" :props="props">
                      <q-badge color="primary">
                      {{ props.row.no_hp }}
                      </q-badge>
                  </q-td>

                  <q-td key="data_yang_dicari" :props="props">
                      <q-badge color="primary">
                      {{ props.row.data_yang_dicari }}
                      </q-badge>
                  </q-td>

                  <q-td key="rating_kualitas_data" :props="props">
                      <q-badge color="primary">
                      {{ props.row.rating_kualitas_data }}
                      </q-badge>
                  </q-td>

                  <q-td key="rating_akses_data" :props="props">
                      <q-badge color="primary">
                      {{ props.row.rating_akses_data }}
                      </q-badge>
                  </q-td>

                  <q-td key="rating_sarana" :props="props">
                      <q-badge color="primary">
                      {{ props.row.rating_sarana }}
                      </q-badge>
                  </q-td>

                  <q-td key="feedback" :props="props">
                      <q-badge color="primary">
                      {{ props.row.feedback }}
                      </q-badge>
                  </q-td>

                   <q-td key="time" :props="props">
                      <q-badge color="primary">
                      {{ props.row.time }}
                      </q-badge>
                  </q-td>
                </q-tr>
              </template>

          <template v-slot:top-right>
            <q-select v-model="visibleColumns" multiple borderless dense options-dense
              :display-value="$q.lang.table.columns" emit-value map-options :options="columns" option-value="name"
              style="min-width: 150px" />

            <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
              <q-space />

              <template v-slot:append>
                <q-icon name="search" />
              </template>

              <template v-slot:no-data="{ icon, message, filter }">
                <div class="full-width row flex-center text-accent q-gutter-sm">
                  <q-icon size="2em" name="sentiment_dissatisfied" />
                  <span>
                    Well this is sad... {{ message }}
                  </span>
                  <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
                </div>
              </template>

            </q-input>

          </template>

        </q-table>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [{
        name: 'nama',
        // required: true,
        label: 'Nama',
        align: 'left',
        field: row => row.nama,
        format: val => `${val}`,
        sortable: true
      },
      {
        name: 'umur',
        align: 'center',
        label: 'Umur',
        field: row => row.umur,
        format: val => `${val}`,
        sortable: true
      },
      {
        name: 'jenis_kelamin',
        label: 'Jenis Kelamin',
        field: row => row.jenis_kelamin,
        format: val => `${val}`,
        sortable: true
      },
      {
        name: 'pendidikan_terakhir',
        label: 'Pendidikan Terakhir',
        field: row => row.pendidikan,
        format: val => `${val}`,
        sortable: true
      },
      {
        name: 'pekerjaan_utama',
        label: 'Pekerjaan Utama',
        field: 'pekerjaan',
        sortable: true
      },
      {
        name: 'pekerjaan_lainnya',
        label: 'Pekerjaan Lainnya',
        field: 'pekerjaan_lainnya',
        sortable: true
      },

      {
        name: 'nama_instansi',
        label: 'Nama Instansi/Insitusi',
        field: 'nama_instansi',
        sortable: true
      },
      {
        name: 'kategori_instansi',
        label: 'Kategori Instansi/Institusi',
        field: 'kategori_instansi',
        sortable: true,
        sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
      },
      {
        name: 'kategori_instansi_lainnya',
        label: 'Kategori Instansi/Institusi Lainnya',
        field: 'kategori_instansi_lainnya',
        sortable: true
      },
      {
        name: 'pemanfaatan_hasil_kunjungan',
        label: 'Pemanfaatan Hasil Kunjungan',
        field: 'pemanfaatan_hasil_kunjungan',
        sortable: true,
        sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
      },
      {
        name: 'jenis_layanan',
        label: 'Jenis Layanan yang Digunakan',
        field: 'jenis_layanan',
        sortable: true
      },
      {
        name: 'fasilitas_utama',
        label: 'Fasilitas Utama yang Digunakan',
        field: 'fasilitas_utama',
        sortable: true
      },
      {
        name: 'fasilitas_utama_lainnya',
        label: 'Fasilitas Utama yang Digunakan Lainnya',
        field: 'fasilitas_utama_lainnya',
        sortable: true
      },
      {
        name: 'rujukan',
        label: 'Sebagai Rujukan Utama',
        field: 'rujukan',
        sortable: true
      },
      {
        name: 'no_hp',
        label: 'No HP',
        field: 'no_hp',
        sortable: true
      },
      {
        name: 'data_yang_dicari',
        label: 'Data yang dicari',
        field: 'rujukan',
        sortable: true
      },
      {
        name: 'rating_kualitas_data',
        label: 'Rating Kualitas Data',
        field: 'rating_kualitas_data',
        sortable: true
      },
      {
        name: 'rating_akses_data',
        label: 'Rating Akses Data',
        field: 'rating_akses_data',
        sortable: true
      },
      {
        name: 'rating_sarana',
        label: 'Rating Sarana Prasarana',
        field: 'rating_sarana',
        sortable: true
      },
      {
        name: 'feedback',
        label: 'Feedback',
        field: 'feedback',
        sortable: true
      },
      {
        name: 'time',
        label: 'Time',
        field: 'time',
        sortable: true
      }
      ],
      visibleColumns: [
        'nama',
        'umur',
        'jenis_kelamin',
        'pendidikan_terakhir',
        'pekerjaan_utama',
        'pekerjaan_lainnya',
        'nama_instansi',
        'kategori_instansi',
        'kategori_instansi_lainnya',
        'pemanfaatan_hasil_kunjungan',
        'jenis_layanan',
        'fasilitas_utama',
        'fasilitas_utama_lainnya',
        'rujukan',
        'no_hp',
        'data_yang_dicari',
        'rating_kualitas_data',
        'rating_akses_data',
        'rating_sarana',
        'feedback',
        'time'
      ],
      get_data: []

    }
  },
  created () {
    var user = this.$firebase.auth().currentUser
    var tes = []
    this.$firebase.firestore().collection('responden_datas').where('user_id', '==', user.uid)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          // console.log('coba')
          // console.log(doc.data())
          // console.log(doc.id, ' => ', doc.data())
          const data = {
            user_id: doc.data().user_id,
            nama: doc.data().nama,
            umur: doc.data().umur,
            jenis_kelamin: doc.data().jenis_kelamin,
            pendidikan: doc.data().pendidikan,
            pekerjaan: doc.data().pekerjaan,
            pekerjaan_lainnya: doc.data().pekerjaan_lainnya,
            nama_instansi: doc.data().nama_instansi,
            kategori_instansi: doc.data().kategori_instansi,
            kategori_instansi_lainnya: doc.data().kategori_instansi_lainnya,
            pemanfaatan_hasil_kunjungan: doc.data().pemanfaatan_hasil_kunjungan,
            jenis_layanan: doc.data().jenis_layanan,
            fasilitas_utama: doc.data().fasilitas_utama,
            fasilitas_utama_lainnya: doc.data().fasilitas_utama_lainnya,
            rujukan: doc.data().rujukan,
            no_hp: doc.data().no_hp,
            data_yang_dicari: doc.data().data_yang_dicari,
            rating_kualitas_data: doc.data().rating_kualitas_data,
            rating_akses_data: doc.data().rating_akses_data,
            rating_sarana: doc.data().rating_sarana,
            feedback: doc.data().feedback,
            time: doc.data().time
          }
          tes.push(data)
        })
      })

      .catch(function (error) {
        // console.log('Error getting documents: ', error)
        alert(error.message)
      })
    this.get_data.push(tes)
  }
  // created () {
  //   this.$axios.get('https://tolis-pst.firebaseio.com/users.json')
  //     .then(res => {
  //       // console.log('ini')
  //       // console.log(res)
  //       const resdata = res.data
  //       // console.log('ini resdata')
  //       // console.log(resdata)
  //       const datas = []
  //       for (let key in resdata) {
  //         const data = resdata[key]
  //         data.id = key
  //         datas.push(data)
  //       }
  //       // console.log('ini datas  ')
  //       // console.log(datas)
  //       this.get_data = datas
  //       // console.log('ini get_data')
  //       // console.log(this.get_data)
  //     })
  //     // .catch(error => console.log(error))
  //   // console.log(this.get_data)
  // }

}

</script>
