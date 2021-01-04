$(function () {
  //Date time picker
  $.datetimepicker.setLocale("id");
  $("#tglPengusulanPenetapan,#tglPenetapan").datetimepicker({
    i18n: {
      id: {
        months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
        dayOfWeek: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
      },
    },
    timepicker: false,
    format: "d/m/Y",
  });

  // Data Table
  $("#monitoringpenetapan").DataTable({
    responsive: true,
    autoWidth: false,
    pagingType: "full_numbers",
    language: {
      sEmptyTable: "Tidak ada data yang tersedia pada tabel ini",
      sProcessing: "Sedang memproses...",
      sZeroRecords: "Tidak ditemukan data yang sesuai",
      lengthMenu:
        'Tampilkan <select style="color:#555555;">' +
        '<option value="10"><div>10</div></option>' +
        '<option value="20">20</option>' +
        '<option value="30">30</option>' +
        '<option value="40">40</option>' +
        '<option value="50">50</option>' +
        '<option value="-1">All</option>' +
        "</select> entri",
      sSearch: "Cari :",
      sInfo: "Menampilkan _START_ sampai _END_ dari _TOTAL_ entri",
      sInfoEmpty: "Menampilkan 0 sampai 0 dari 0 entri",
      sInfoFiltered: "(disaring dari _MAX_ entri keseluruhan)",
      oPaginate: {
        sFirst: "Pertama",
        sPrevious: "Sebelumnya",
        sNext: "Berikutnya",
        sLast: "Terakhir",
      },
    },
    dom: "Blrtp <'clear'>",
    buttons: [
      {
        extend: "excel",
        className: "btn-primary",
        text: '<div class="">Export Tabel to Excel <span><i class="fas fa-file-export"></i></span></div>',
        title: "",
        buttons: [
          {
            extend: "excel",
            className: "btn-primary",
          },
        ],
      },
    ],
  });
});
