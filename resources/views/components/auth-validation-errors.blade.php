@props(['errors'])

@if ($errors->any())
    <div {{ $attributes }}>
        {{-- <div class="label-danger text-red">
            {{ __('Whoops! Something went wrong.') }}
        </div> --}}
        <div class="alert alert-danger fade show m-b-10">
            <span class="close" data-dismiss="alert">×</span>
            <ul class="mt-3 list-disc list-inside text-sm text-red">
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    </div>
@endif
