import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

const things = {
  state: {
    step: 1
  }
}
const dataresponden = {
  state: {
    nama: null,
    umur: null,
    jenis_kelamin: null,
    jenis_kelamin_s: [
      'Laki-laki', 'Perempuan'
    ],

    pendidikan: null,
    // pendidikan_s: [
    //   'SLTP/Sederajat', 'SLTA/Sederajat', 'D1/D2/D3', 'D4/S1', 'S2/S3'
    // ],

    pekerjaan: null,
    pekerjaan_lainnya: null,
    // pekerjaan_s: [
    //   'Pelajar/Mahasiswa', 'Peneliti/Dosen', 'PNS/TNI/Polri', 'Pegawai BUMN/D', 'Pegawai Swasta', 'Wiraswasta',
    //   'Lainnya'
    // ],

    nama_instansi: null,

    kategori_instansi: null,
    kategori_instansi_lainnya: null,
    // kategori_instansi_s: [
    //   'Lembaga Pendidikan & Penelitian Dalam Negeri',
    //   'Lembaga Pendidikan & Penelitian Luar Negeri',
    //   'Kementrian & Lembaga Pemerintah',
    //   'Lembaga Internasional',
    //   'Media Massa',
    //   'Pemerintah Daerah',
    //   'Perbankan',
    //   'BUMN/BUMD',
    //   'Swasta lainnya',
    //   'Lainnya'
    // ],

    pemanfaatan_hasil_kunjungan: [],
    // pemanfaatan_hasil_kunjungan_s: [{
    //   label: 'Tugas Sekolah/Tugas Kuliah',
    //   value: 1
    // },
    // {
    //   label: 'Skripsi/Tesis/Disertasi',
    //   value: 2
    // },
    // {
    //   label: 'Penelitian',
    //   value: 4
    // },
    // {
    //   label: 'Perencanaan',
    //   value: 8
    // },
    // {
    //   label: 'Evaluasi',
    //   value: 16
    // },
    // {
    //   label: 'Penyebaran Informasi',
    //   value: 32
    // }
    // ],

    jenis_layanan: [],
    // jenis_layanan_s: [{
    //   label: 'Perpustakaan Tercetak',
    //   value: 1
    // },
    // {
    //   label: 'Perpustakaan Digital',
    //   value: 2,
    //   color: 'green'
    // },
    // {
    //   label: 'Penjualan Buku',
    //   value: 4,
    //   color: 'red'
    // },
    // {
    //   label: 'Data Mikro/Peta Digital/<i>Softcopy</i> Publikasi',
    //   value: 8
    // },
    // {
    //   label: 'Konsultasi Data Statistik',
    //   value: 16
    // },
    // {
    //   label: 'Konsultasi dan Rekomendasi Kegiatan Statistik',
    //   value: 32
    // }
    // ],

    fasilitas_utama: [],
    fasilitas_utama_lainnya: null,
    // fasilitas_utama_s: [
    //   'Website BPS',
    //   'Telepon/Faksimili',
    //   'E-mail',
    //   'Surat',
    //   'PST/Perpustakaan BPS',
    //   'Layanan Statistik Online',
    //   'Lainnya'
    // ],

    rujukan: [],
    // rujukan_s: [
    //   'Ya',
    //   'Tidak'
    // ]
    rating_kualitas_data: null,
    rating_akses_data: null,
    rating_sarana: null,
    feedback: null,
    no_hp: null,
    data_yang_dicari: null
  }
}

export default function (/* { ssrContext } */) {
  const store = new Vuex.Store({
    modules: {
      // example
      dataresponden: dataresponden,
      things: things
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return store
}
