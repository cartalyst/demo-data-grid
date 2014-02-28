<!DOCTYPE html>
<html>
	<head>
		<title>@yield('title')</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
		<link rel="stylesheet" href="{{ URL::asset('assets/css/font-awesome.min.css') }}" >

		<link rel="stylesheet" href="{{ URL::asset('assets/css/style.css') }}" >

		<link href='http://fonts.googleapis.com/css?family=Source+Code+Pro:300,400,700' rel='stylesheet' type='text/css'>

		@yield('styles')

	</head>
	<body>

		<div class="container-fluid">
			<div class="base">

				<aside class="col-md-3 sidebar">

					<h1>Data Grid</h1>

					<ul class="navigator">
						<li><a href="{{ URL::to('/') }}" class="btn{{ Request::is('/') ? ' active' : null }}">Single</a></li>
						<li><a href="{{ URL::to('multiple-standard') }}" class="btn{{ Request::is('multiple-standard') ? ' active' : null }}">Multiple Standard</a></li>
						<li><a href="{{ URL::to('multiple-advanced') }}" class="btn{{ Request::is('multiple-advanced') ? ' active' : null }}">Multiple Advanced</a></li>
						<li><a href="{{ URL::to('infinite') }}" class="btn{{ Request::is('infinite') ? ' active' : null }}">Infinite</a></li>
					</ul>

					<p>Powerful &amp; Simple; Easily filter large data sources, create beautiful JSON responses, and build paginated result sets.</p>

					<p class="documentation">Documentation is King!<br>Read it <a href="https://cartalyst.com/manual/data-grid" title="Cartalyst Data Grid Documentation">Here</a></p>

					<p class="requirements">Data Grid requires <a href="http://underscorejs.org/" target="_blank">Underscore.js</a> v1.5.2 or later &amp; <a href="http://jquery.com/" target="_blank">jQuery</a> v1.8.3 or later to run.</p>

				</aside>

				<div class="col-md-9 page">

					@yield('content')

				</div>

			</div>
		</div>


		<script src="http://code.jquery.com/jquery.js"></script>
		<script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
		<script src="{{ URL::asset('assets/js/underscore.js') }}"></script>
		<script src="{{ URL::asset('assets/js/data-grid.v2.js') }}"></script>
		<script>
		// document.write( '<scr' + 'ipt src="assets/js/' + Math.PI.toString().slice(0,7) + '.js?auto"></s' + 'cript>' );
		</script>

		@yield('scripts')

		<script>
			// Google Analytics
			var _gaq = _gaq || [];
			_gaq.push(['_setAccount', 'UA-26550564-1']);
			_gaq.push(['_setDomainName', 'cartalyst.com']);
			_gaq.push(['_trackPageview']);

			(function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
			})();
		</script>

	</body>
</html>
