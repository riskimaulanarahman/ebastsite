@extends('layouts.default', ['sidebarSearch' => true])

@section('title', 'Kegiatan RT')

@section('content')

@php
    use Illuminate\Support\Carbon;

@endphp
		<!-- begin panel -->
		<div class="panel panel-info">
			<!-- begin panel-heading -->
			<div class="panel-heading">
				<h4 class="panel-title">Kegiatan RT {{ Carbon::now()->format('l, d F y') }} </h4>
				<div class="panel-heading-btn">
					<!-- <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a> -->
					{{-- <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success reloadalltabel"
						data-click="panel-reload"><i class="fa fa-redo"></i></a> --}}
					<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning"
						data-click="panel-collapse"><i class="fa fa-minus"></i></a>
					<!-- <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a> -->
				</div>
			</div>
			<!-- end panel-heading -->
			<!-- begin panel-body -->
			<div class="panel-body">
				@if(Auth::user()->role == "admin")
				<div class="row">
					<div class="col-md-3">
						<label for="bulan">Bulan : </label>
						<div id="bulan"></div>
						{{-- <select name="bulan" id="bulan" class="form-control">
							<option value="">-- Pilih Bulan --</option>
							<option value="01">01</option>
							<option value="02">02</option>
							<option value="03">03</option>
							<option value="04">04</option>
							<option value="05">05</option>
							<option value="06">06</option>
							<option value="07">07</option>
							<option value="08">08</option>
							<option value="09">09</option>
							<option value="10">10</option>
							<option value="11">11</option>
							<option value="12">12</option>
						</select> --}}
					</div>
					<div class="col-md-3">
						<label for="tahun">Tahun : </label>
						<div id="tahun"></div>
						{{-- <select name="tahun" id="tahun" class="form-control">
							<option value="">-- Pilih Tahun --</option>
							<option value="2020">2020</option>
							<option value="2021">2021</option>
							<option value="2022">2022</option>
							<option value="2023">2023</option>
							<option value="2024">2024</option>
							<option value="2025">2025</option>
							<option value="2027">2027</option>
							<option value="2028">2028</option>
							<option value="2029">2029</option>
							<option value="2030">2030</option>
							<option value="2031">2031</option>
							<option value="2032">2032</option>
						</select> --}}
					</div>
					<div class="col-md-3">
						<label for="rt">Nomor RT : </label>
						<div id="rt"></div>
						{{-- <select name="getrt" id="getrt" class="form-control"></select> --}}
					</div>
					<div class="col-md-3">
						<button id="print-laporan" class="btn btn-danger">Print Laporan</button>
					</div>
				</div>
				<hr>
				@endif
				<div id="popup"></div>

                <div id="kegiatan-laporanrt" style="height: 640px; width:100%;"></div>
			</div>
			<!-- end panel-body -->
		</div>
		<!-- end panel -->

@endsection

@push('scripts')
<script src="/assets/js/kegiatan-laporanrt.js?n=1"></script>
<script>
	// $.getJSON('/api/list-rt',function(item){
	// 	$('#getrt').html('');

	// 	$('#getrt').append("<option value=''> -- Pilih Nomor RT -- </option>")

	// 	$.each(item,function(x,y){
	// 		$('#getrt').append("<option value='"+y.nomor_rt+"'> "+y.nomor_rt+" </option>");
	// 	})
	// })

	// $('#print-laporan').on("click",function(){
	// 	// alert('fitur belum tersedia')
	// 	var vbulan = $('#bulan').val();
	// 	alert(vbulan)
	// })
</script>
@endpush
