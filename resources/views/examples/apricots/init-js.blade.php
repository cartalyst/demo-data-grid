<script>
$(function () {
    var dg = new DataGridManager();

    var grid = dg.create('apricots', {
        source: '{{ route('example.apricots.source') }}',
        pagination: {
            method: 'infinite',
            threshold: '100',
            throttle: '10'
        },
        loader: {
            element: '.loading'
        }
    });
});
</script>
