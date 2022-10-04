@extends('layouts.default', ['sidebarSearch' => true])

@section('title', 'Kegiatan RT')

@section('content')


		<!-- begin panel -->
		<div class="panel panel-info">
			<!-- begin panel-heading -->
			<div class="panel-heading">
				<h4 class="panel-title">Kegiatan RT </h4>
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
				{{-- <div class="row">
					<div class="col-md-4">
						<select name="getrt" id="getrt" class="form-control">
							<option value="">-- Pilih RT --</option>
							<option value="1">RT 1</option>
							<option value="2">RT 2</option>
						</select>
					</div>
				</div> --}}
                <div id="kegiatan-rt" style="height: 640px; width:100%;"></div>
			</div>
			<!-- end panel-body -->
		</div>
		<!-- end panel -->

@endsection

@push('scripts')
<script src="/assets/js/kegiatan-rt.js?n=1"></script>

@endpush
