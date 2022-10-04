@extends('layouts.default', ['sidebarSearch' => true])

@section('title', 'Dashboard')

@section('content')
	<!-- begin row -->
	<div class="row">
		<h1>Welcome Admin</h1>
		<!-- begin col-3 -->
		{{-- <div class="col-xl-3 col-md-6">
			<div class="widget widget-stats bg-indigo">
				<div class="stats-icon stats-icon-lg"><i class="fa fa-book"></i></div>
				<div class="stats-content">
					<div class="stats-number">Summary 1</div>
					<div class="p-5" style="font-size: 15px; font-weight:bold;">detail 1 : <span id="param1cat0">0</span> </div>
					<div class="p-5" style="font-size: 15px; font-weight:bold;">detail 2 : <span id="param1cat1">0</span> </div>
					<div class="p-5" style="font-size: 15px; font-weight:bold;">detail 3 : <span id="param1cat2">0</span> </div>
					<div class="stats-progress progress">
						<div class="progress-bar" style="width: 100%;"></div>
					</div>
					<div class="stats-desc">
						<button class="btn btn-detail-1 btn-warning"> <i class="fa fa-sign-in-alt"></i> Detail</button>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-md-6">
			<div class="widget widget-stats bg-red">
				<div class="stats-icon stats-icon-lg"><i class="fa fa-book"></i></div>
				<div class="stats-content">
					<div class="stats-number">Summary 2</div>
					<div class="p-5" style="font-size: 15px; font-weight:bold;">detail 1 : <span id="param2cat0">0</span> </div>
					<div class="p-5" style="font-size: 15px; font-weight:bold;">detail 2 : <span id="param2cat1">0</span> </div>
					<div class="p-5" style="font-size: 15px; font-weight:bold;">detail 3 : <span id="param2cat2">0</span> </div>
					<div class="stats-progress progress">
						<div class="progress-bar" style="width: 100%;"></div>
					</div>
					<div class="stats-desc">
						<button class="btn btn-detail-2 btn-inverse"> <i class="fa fa-sign-in-alt"></i> Detail</button>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-md-6">
			<div class="widget widget-stats bg-orange">
				<div class="stats-icon stats-icon-lg"><i class="fa fa-book"></i></div>
				<div class="stats-content">
					<div class="stats-number">Summary 3</div>
					<div class="p-5" style="font-size: 15px; font-weight:bold;">detail 1 : <span id="param3cat0">0</span> </div>
					<div class="p-5" style="font-size: 15px; font-weight:bold;">detail 2 : <span id="param3cat1">0</span> </div>
					<div class="p-5" style="font-size: 15px; font-weight:bold;">detail 3 : <span id="param3cat2">0</span> </div>
					<div class="stats-progress progress">
						<div class="progress-bar" style="width: 100%;"></div>
					</div>
					<div class="stats-desc">
						<button class="btn btn-detail-3 btn-danger"> <i class="fa fa-sign-in-alt"></i> Detail</button>
					</div>
				</div>
			</div>
		</div>
	</div> --}}
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
