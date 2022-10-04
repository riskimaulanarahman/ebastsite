@extends('layouts.empty', ['paceTop' => true])

@section('title', 'Login Page')

@section('content')
	<!-- begin login-cover -->
	<div class="login-cover">
		<div class="login-cover-image" style="background-image: url(/assets/img/logo/bglogin.jpg)" data-id="login-cover-image"></div>
		<div class="login-cover-bg"></div>
	</div>
	<!-- end login-cover -->
	
	<!-- begin login -->
	<div class="login login-v2" data-pageload-addclass="animated fadeIn">
		<!-- begin brand -->
		<div class="login-header">
			<div class="brand">
				<span class="fa fa-lock"></span> <b>ebas</b> <img src="/assets/img/logo/tsel.png" width="10%" height="10%">
				<small>Elektronik Berita Acara Serah Terima</small>
			</div>
			{{-- <div class="icon">
				<i class="fa fa-lock"></i>
			</div> --}}
		</div>
		<!-- end brand -->
		<!-- begin login-content -->
		<div class="login-content">
			<form method="POST" class="margin-bottom-0" action="{{ route('login') }}">
				{{-- {{ csrf_field() }} --}}
				@csrf
				<div class="form-group m-b-20">
					<input id="email" type="email"
                                    class="form-control form-control-lg {{ $errors->has('email') ? ' is-invalid' : '' }}"
                                    name="email" value="{{ old('email') }}"  placeholder="email " required autofocus>
                    @if ($errors->has('email'))
                    <span class="invalid-feedback">
                        <strong>{{ $errors->first('email') }}</strong>
                    </span>
                    @endif
				</div>
				<div class="form-group m-b-20">
					<input id="password" type="password" name="password" class="form-control form-control-lg" placeholder="Password" required />
                    @if ($errors->has('password'))
                        <span class="help-block">
                            <strong>{{ $errors->first('password') }}</strong>
                        </span>
                    @endif
				</div>
				<div class="login-buttons">
					<button type="submit" class="btn btn-success btn-block btn-lg">Masuk</button>
				</div>
				<small>Powered by.Telkomsel</small>

			</form>
		</div>
		<!-- end login-content -->
	</div>
	<!-- end login -->
	
	<!-- begin login-bg -->
	<ul class="login-bg-list clearfix">
		{{-- <li class="active"><a href="javascript:;" data-click="change-bg" data-img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Kantor_Kelurahan_Baru_Ilir%2C_Balikpapan.jpg/1200px-Kantor_Kelurahan_Baru_Ilir%2C_Balikpapan.jpg" style="background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Kantor_Kelurahan_Baru_Ilir%2C_Balikpapan.jpg/1200px-Kantor_Kelurahan_Baru_Ilir%2C_Balikpapan.jpg)"></a></li> --}}
		<li><a href="javascript:;" data-click="change-bg" data-img="/assets/img/login-bg/login-bg-17.jpg" style="background-image: url(/assets/img/login-bg/login-bg-17.jpg)"></a></li>
		<li><a href="javascript:;" data-click="change-bg" data-img="/assets/img/login-bg/login-bg-16.jpg" style="background-image: url(/assets/img/login-bg/login-bg-16.jpg)"></a></li>
		<li><a href="javascript:;" data-click="change-bg" data-img="/assets/img/login-bg/login-bg-15.jpg" style="background-image: url(/assets/img/login-bg/login-bg-15.jpg)"></a></li>
		<li><a href="javascript:;" data-click="change-bg" data-img="/assets/img/login-bg/login-bg-14.jpg" style="background-image: url(/assets/img/login-bg/login-bg-14.jpg)"></a></li>
		<li class="active"><a href="javascript:;" data-click="change-bg" data-img="/assets/img/logo/bglogin.jpg" style="background-image: url(/assets/img/logo/bglogin.jpg)"></a></li>
		<li><a href="javascript:;" data-click="change-bg" data-img="/assets/img/login-bg/login-bg-12.jpg" style="background-image: url(/assets/img/login-bg/login-bg-12.jpg)"></a></li>
	</ul>
	<!-- end login-bg -->
@endsection

@push('scripts')
	<script src="/assets/js/demo/login-v2.demo.js"></script>
@endpush
