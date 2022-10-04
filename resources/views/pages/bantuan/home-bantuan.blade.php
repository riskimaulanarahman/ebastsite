@extends('layouts.default', ['sidebarSearch' => true])

@section('title', 'Master User')

@section('content')

<div class="row">

	<div class="col-xl-12">
		<!-- begin panel -->
		<div class="panel panel-info">
			<!-- begin panel-heading -->
			<div class="panel-heading">
				<h4 class="panel-title">Panduan </h4>
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
                {{-- <embed src="upload/bantuan/panduan.pdf" width="100%" height="2100px" /> --}}
			</div>
			<!-- end panel-body -->
		</div>
		<!-- end panel -->
	</div>
	<!--  -->

</div>


@endsection
