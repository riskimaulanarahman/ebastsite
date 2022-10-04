@extends('layouts.default', ['sidebarSearch' => true])

@section('title', 'Dashboard Vendor')

@section('content')
	<!-- begin row -->
	<div class="row">
		<!-- begin col-3 -->
		<div class="col-xl-3 col-md-6">
			<div class="widget widget-stats bg-indigo">
				<div class="stats-icon stats-icon-lg"><i class="fa fa-book"></i></div>
				<div class="stats-content">
					<div class="stats-number">SQAC Request</div>
					<div class="p-5" style="font-size: 15px; font-weight:bold;">approved : <span id="param1cat0">{{ $data->approved }}</span> </div>
					<div class="p-5" style="font-size: 15px; font-weight:bold;">rejected : <span id="param1cat1">{{ $data->rejected }}</span> </div>
					<div class="p-5" style="font-size: 15px; font-weight:bold;">waiting : <span id="param1cat2">{{ $data->waiting }}</span> </div>
						
					<div class="stats-progress progress">
						<div class="progress-bar" style="width: 100%;"></div>
					</div>
					<div class="stats-desc">
						{{-- isi content --}}
						<a href="/sqacdoc" class="btn btn-detail-1 btn-warning"> <i class="fa fa-sign-in-alt"></i> Detail</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- end row -->
	{{-- <div class="row">

		<div class="col-md-12">

		<div class="panel panel-inverse">
			<div class="panel-heading">
				<h4 class="panel-title">Detail Data Equipment : <span id="param-title"></span> </h4>
				<div class="panel-heading-btn">
					<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
				
					<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning"
						data-click="panel-collapse"><i class="fa fa-minus"></i></a>
				</div>
			</div>
			<div class="panel-body">
				<div id="site-popup"></div>
                <div id="grid-detailequipment" style="width:100%;"></div>
			</div>
		</div>
	</div>

	</div> --}}
@endsection

@push('scripts')
{{-- <script src="/assets/js/kap/dashboard.js?n=3"></script> --}}

@endpush
