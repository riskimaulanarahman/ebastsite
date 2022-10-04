@extends('layouts.default', ['sidebarSearch' => true])

@section('title', 'Monitoring')

@section('content')


		<!-- begin panel -->
		<div class="panel panel-info">
			<!-- begin panel-heading -->
			<div class="panel-heading">
				<h4 class="panel-title">Monitoring </h4>
				<div class="panel-heading-btn">
					<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
				
					<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning"
						data-click="panel-collapse"><i class="fa fa-minus"></i></a>
				</div>
			</div>
			<!-- end panel-heading -->
			<!-- begin panel-body -->
			<div class="panel-body">
                <div id="grid-monitoring" style="height: 640px; width:100%;"></div>
			</div>
			<!-- end panel-body -->
		</div>
		<!-- end panel -->

@endsection

@push('scripts')
<script src="/assets/js/kap/monitoring.js?n=1"></script>

@endpush
