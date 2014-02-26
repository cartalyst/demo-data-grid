<!DOCTYPE html>
<html>
	<head>
		<title>@yield('title')</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<link rel="stylesheet" href="{{ URL::asset('assets/css/reset.css') }}" >
		<link rel="stylesheet" href="{{ URL::asset('assets/css/font-awesome.min.css') }}" >
		<link rel="stylesheet" href="{{ URL::asset('assets/css/style.css') }}" >

		@yield('styles')

	</head>
	<body>


		<div class="frame-synopsis">
			<h1>Data Grid</h1>
			<h2>@yield('title')</h2>

			@yield('menu')

			<p>Powerful &amp; Simple; Easily filter large data sources, create beautiful JSON responses, and build paginated result sets.</p>



			<p class="documentation">Documentation is King!<br>Read it <a href="https://cartalyst.com/manual/data-grid" title="Cartalyst Data Grid Documentation">Here</a></p>

			<p class="requirements">Data Grid requires <a href="http://underscorejs.org/" target="_blank">Underscore.js</a> v1.5.2 or later &amp; <a href="http://jquery.com/" target="_blank">jQuery</a> v1.8.3 or later to run.</p>

		</div>

		<div class="frame-content">

			<h1>City Population</h1>
			<div class="settings">
				@yield('settings')
			</div>
			@yield('content')

		</div>

		<script src="http://code.jquery.com/jquery.js"></script>
		<script src="{{ URL::asset('assets/js/underscore.js') }}"></script>
		<script src="{{ URL::asset('assets/js/data-grid.js') }}"></script>
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
