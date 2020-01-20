<template>
<div>
  <div class="q-pa-md">
    <!-- {{get_data[0]}} -->
    <q-table
     color="primary"
      title="Data Responden"
      :data="get_data"
      :columns="columns"
      row-key="id"
      :pagination.sync="pagination"
      :loading="loading"
      :filter="filter"
      @request="onRequest"
      binary-state-sort
      :visible-columns="visibleColumns"
      no-data-label="I didn't find anything for you"
      no-results-label="The filter didn't uncover any results"
    >
      <template v-slot:top-right>
         <q-select
          v-model="visibleColumns"
          multiple
          borderless
          dense
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="columns"
          option-value="name"
          style="min-width: 150px"
        />
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <q-space />

        <!-- <q-btn
          flat round dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
          class="q-ml-md"
        /> -->
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
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
        'rating',
        'feedback'],
      get_data: null,
      // get_data: [
      //   { id: 1, name: 'Frozen Yogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0, sodium: 87, calcium: '14%', iron: '1%' },
      //   { id: 2, name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, sodium: 129, calcium: '8%', iron: '1%' },
      //   { id: 3, name: 'Eclair', calories: 262, fat: 16.0, carbs: 23, protein: 6.0, sodium: 337, calcium: '6%', iron: '7%' },
      //   { id: 4, name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3, sodium: 413, calcium: '3%', iron: '8%' },
      //   { id: 5, name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9, sodium: 327, calcium: '7%', iron: '16%' },
      //   { id: 6, name: 'Jelly bean', calories: 375, fat: 0.0, carbs: 94, protein: 0.0, sodium: 50, calcium: '0%', iron: '0%' },
      //   { id: 7, name: 'Lollipop', calories: 392, fat: 0.2, carbs: 98, protein: 0, sodium: 38, calcium: '0%', iron: '2%' },
      //   { id: 8, name: 'Honeycomb', calories: 408, fat: 3.2, carbs: 87, protein: 6.5, sodium: 562, calcium: '0%', iron: '45%' },
      //   { id: 9, name: 'Donut', calories: 452, fat: 25.0, carbs: 51, protein: 4.9, sodium: 326, calcium: '2%', iron: '22%' },
      //   { id: 10, name: 'KitKat', calories: 518, fat: 26.0, carbs: 65, protein: 7, sodium: 54, calcium: '12%', iron: '6%' },
      //   { id: 11, name: 'Frozen Yogurt-1', calories: 159, fat: 6.0, carbs: 24, protein: 4.0, sodium: 87, calcium: '14%', iron: '1%' },
      //   { id: 12, name: 'Ice cream sandwich-1', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, sodium: 129, calcium: '8%', iron: '1%' },
      //   { id: 13, name: 'Eclair-1', calories: 262, fat: 16.0, carbs: 23, protein: 6.0, sodium: 337, calcium: '6%', iron: '7%' },
      //   { id: 14, name: 'Cupcake-1', calories: 305, fat: 3.7, carbs: 67, protein: 4.3, sodium: 413, calcium: '3%', iron: '8%' },
      //   { id: 15, name: 'Gingerbread-1', calories: 356, fat: 16.0, carbs: 49, protein: 3.9, sodium: 327, calcium: '7%', iron: '16%' },
      //   { id: 16, name: 'Jelly bean-1', calories: 375, fat: 0.0, carbs: 94, protein: 0.0, sodium: 50, calcium: '0%', iron: '0%' },
      //   { id: 17, name: 'Lollipop-1', calories: 392, fat: 0.2, carbs: 98, protein: 0, sodium: 38, calcium: '0%', iron: '2%' },
      //   { id: 18, name: 'Honeycomb-1', calories: 408, fat: 3.2, carbs: 87, protein: 6.5, sodium: 562, calcium: '0%', iron: '45%' },
      //   { id: 19, name: 'Donut-1', calories: 452, fat: 25.0, carbs: 51, protein: 4.9, sodium: 326, calcium: '2%', iron: '22%' },
      //   { id: 20, name: 'KitKat-1', calories: 518, fat: 26.0, carbs: 65, protein: 7, sodium: 54, calcium: '12%', iron: '6%' },
      //   { id: 21, name: 'Frozen Yogurt-2', calories: 159, fat: 6.0, carbs: 24, protein: 4.0, sodium: 87, calcium: '14%', iron: '1%' },
      //   { id: 22, name: 'Ice cream sandwich-2', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, sodium: 129, calcium: '8%', iron: '1%' },
      //   { id: 23, name: 'Eclair-2', calories: 262, fat: 16.0, carbs: 23, protein: 6.0, sodium: 337, calcium: '6%', iron: '7%' },
      //   { id: 24, name: 'Cupcake-2', calories: 305, fat: 3.7, carbs: 67, protein: 4.3, sodium: 413, calcium: '3%', iron: '8%' },
      //   { id: 25, name: 'Gingerbread-2', calories: 356, fat: 16.0, carbs: 49, protein: 3.9, sodium: 327, calcium: '7%', iron: '16%' },
      //   { id: 26, name: 'Jelly bean-2', calories: 375, fat: 0.0, carbs: 94, protein: 0.0, sodium: 50, calcium: '0%', iron: '0%' },
      //   { id: 27, name: 'Lollipop-2', calories: 392, fat: 0.2, carbs: 98, protein: 0, sodium: 38, calcium: '0%', iron: '2%' },
      //   { id: 28, name: 'Honeycomb-2', calories: 408, fat: 3.2, carbs: 87, protein: 6.5, sodium: 562, calcium: '0%', iron: '45%' },
      //   { id: 29, name: 'Donut-2', calories: 452, fat: 25.0, carbs: 51, protein: 4.9, sodium: 326, calcium: '2%', iron: '22%' },
      //   { id: 30, name: 'KitKat-2', calories: 518, fat: 26.0, carbs: 65, protein: 7, sodium: 54, calcium: '12%', iron: '6%' },
      //   { id: 31, name: 'Frozen Yogurt-3', calories: 159, fat: 6.0, carbs: 24, protein: 4.0, sodium: 87, calcium: '14%', iron: '1%' },
      //   { id: 32, name: 'Ice cream sandwich-3', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, sodium: 129, calcium: '8%', iron: '1%' },
      //   { id: 33, name: 'Eclair-3', calories: 262, fat: 16.0, carbs: 23, protein: 6.0, sodium: 337, calcium: '6%', iron: '7%' },
      //   { id: 34, name: 'Cupcake-3', calories: 305, fat: 3.7, carbs: 67, protein: 4.3, sodium: 413, calcium: '3%', iron: '8%' },
      //   { id: 35, name: 'Gingerbread-3', calories: 356, fat: 16.0, carbs: 49, protein: 3.9, sodium: 327, calcium: '7%', iron: '16%' },
      //   { id: 36, name: 'Jelly bean-3', calories: 375, fat: 0.0, carbs: 94, protein: 0.0, sodium: 50, calcium: '0%', iron: '0%' },
      //   { id: 37, name: 'Lollipop-3', calories: 392, fat: 0.2, carbs: 98, protein: 0, sodium: 38, calcium: '0%', iron: '2%' },
      //   { id: 38, name: 'Honeycomb-3', calories: 408, fat: 3.2, carbs: 87, protein: 6.5, sodium: 562, calcium: '0%', iron: '45%' },
      //   { id: 39, name: 'Donut-3', calories: 452, fat: 25.0, carbs: 51, protein: 4.9, sodium: 326, calcium: '2%', iron: '22%' },
      //   { id: 40, name: 'KitKat-3', calories: 518, fat: 26.0, carbs: 65, protein: 7, sodium: 54, calcium: '12%', iron: '6%' }
      // ],
      filter: '',
      loading: false,
      pagination: {
        sortBy: 'name',
        descending: false,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 10
      },
      columns: [
        {
          name: 'nama',
          // required: true,
          label: 'Nama',
          align: 'left',
          field: row => row.nama,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'umur', align: 'center', label: 'Umur', field: row => row.umur, format: val => `${val}`, sortable: true },
        { name: 'jenis_kelamin', label: 'Jenis Kelamin', field: row => row.jenis_kelamin, format: val => `${val}`, sortable: true },
        { name: 'pendidikan_terakhir', label: 'Pendidikan Terakhir', field: row => row.pendidikan, format: val => `${val}`, sortable: true },
        { name: 'pekerjaan_utama', label: 'Pekerjaan Utama', field: 'pekerjaan', sortable: true },
        { name: 'pekerjaan_lainnya', label: 'Pekerjaan Lainnya', field: 'pekerjaan_lainnya', sortable: true },

        { name: 'nama_instansi', label: 'Nama Instansi/Insitusi', field: 'nama_instansi', sortable: true },
        { name: 'kategori_instansi', label: 'Kategori Instansi/Institusi', field: 'kategori_instansi', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'kategori_instansi_lainnya', label: 'Kategori Instansi/Institusi Lainnya', field: 'kategori_instansi_lainnya', sortable: true },
        { name: 'pemanfaatan_hasil_kunjungan', label: 'Pemanfaatan Hasil Kunjungan', field: 'pemanfaatan_hasil_kunjungan', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'jenis_layanan', label: 'Jenis Layanan yang Digunakan', field: 'jenis_layanan', sortable: true },
        { name: 'fasilitas_utama', label: 'Fasilitas Utama yang Digunakan', field: 'fasilitas_utama', sortable: true },
        { name: 'fasilitas_utama_lainnya', label: 'Fasilitas Utama yang Digunakan Lainnya', field: 'fasilitas_utama_lainnya', sortable: true },
        { name: 'rujukan', label: 'Sebagai Rujukan Utama', field: 'rujukan', sortable: true },
        { name: 'rating', label: 'Rating', field: 'rating', sortable: true },
        { name: 'feedback', label: 'Feedback', field: 'feedback', sortable: true }
      ],
      // columns: [
      //   {
      //     name: 'desc',
      //     required: true,
      //     label: 'Dessert (100g serving)',
      //     align: 'left',
      //     field: row => row.name,
      //     format: val => `${val}`,
      //     sortable: true
      //   },
      //   { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
      //   { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
      //   { name: 'carbs', label: 'Carbs (g)', field: 'carbs', sortable: true },
      //   { name: 'protein', label: 'Protein (g)', field: 'protein', sortable: true },
      //   { name: 'sodium', label: 'Sodium (mg)', field: 'sodium', sortable: true },
      //   { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
      //   { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      // ],
      data: []
    }
  },
  mounted () {
    // get initial data from server (1st page)
    this.onRequest({
      pagination: this.pagination,
      filter: undefined
    })
  },
  methods: {
    onRequest (props) {
      let { page, rowsPerPage, rowsNumber, sortBy, descending } = props.pagination
      let filter = props.filter

      this.loading = true

      // emulate server
      setTimeout(() => {
        // update rowsCount with appropriate value
        this.pagination.rowsNumber = this.getRowsNumberCount(filter)

        // get all rows if "All" (0) is selected
        let fetchCount = rowsPerPage === 0 ? rowsNumber : rowsPerPage

        // calculate starting row of data
        let startRow = (page - 1) * rowsPerPage

        // fetch data from "server"
        let returnedData = this.fetchFromServer(startRow, fetchCount, filter, sortBy, descending)

        // clear out existing data and add new
        this.data.splice(0, this.data.length, ...returnedData)

        // don't forget to update local pagination object
        this.pagination.page = page
        this.pagination.rowsPerPage = rowsPerPage
        this.pagination.sortBy = sortBy
        this.pagination.descending = descending

        // ...and turn of loading indicator
        this.loading = false
      }, 1500)
    },

    // emulate ajax call
    // SELECT * FROM ... WHERE...LIMIT...
    fetchFromServer (startRow, count, filter, sortBy, descending) {
      let data = []

      if (!filter) {
        data = this.get_data.slice(startRow, startRow + count)
      } else {
        let found = 0
        for (let index = startRow, items = 0; index < this.get_data.length && items < count; ++index) {
          let row = this.get_data[index]
          // match filter?
          if (!row['name'].includes(filter)) {
            // get a different row, until one is found
            continue
          }
          ++found
          if (found >= startRow) {
            data.push(row)
            ++items
          }
        }
      }

      // handle sortBy
      if (sortBy) {
        data.sort((a, b) => {
          let x = descending ? b : a
          let y = descending ? a : b
          if (sortBy === 'nama' ||
           sortBy === 'nama_instansi' ||
            sortBy === 'fasilitas_utama' ||
             sortBy === 'feedback' ||
             sortBy === 'jenis_kelamin' ||
             sortBy === 'kategori_instansi' ||
             sortBy === 'pekerjaan_utama' ||
             sortBy === 'pemanfaatan_hasil_kunjungan' ||
             sortBy === 'pendidikan_terakhir' ||
             sortBy === 'rujukan' ||
             sortBy === 'time'
          ) {
            // string sort
            return x[sortBy] > y[sortBy] ? 1 : x[sortBy] < y[sortBy] ? -1 : 0
          } else {
            // numeric sort
            return parseFloat(x[sortBy]) - parseFloat(y[sortBy])
          }
        })
      }

      return data
    },

    // emulate 'SELECT count(*) FROM ...WHERE...'
    getRowsNumberCount (filter) {
      if (!filter) {
        return this.get_data.length
      }
      let count = 0
      this.get_data.forEach((treat) => {
        console.log(treat['name'])
        if (treat['name'].includes(filter)) {
          ++count
        }
      })
      return count
    }
  },
  created () {
    this.$axios.get('https://tolis-pst.firebaseio.com/users.json')
      .then(res => {
        // console.log('ini')
        // console.log(res)
        const resdata = res.data
        // console.log('ini resdata')
        // console.log(resdata)
        const datas = []
        for (let key in resdata) {
          const data = resdata[key]
          data.id = key
          datas.push(data)
        }
        // console.log('ini datas  ')
        // console.log(datas)
        this.get_data = datas
        // console.log('ini get_data')
        console.log(this.get_data)
      })
      .catch(error => console.log(error))
    // console.log(this.get_data)
  }

}
</script>
