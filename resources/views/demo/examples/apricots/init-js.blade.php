<script>
$(function () {
    var dg = new DataGridManager();

    var grid = dg.create('apricots', {
        source: '{{ route('demo.example.apricots.source') }}',
        pagination: {
            method: 'infinite',
            threshold: '10',
            throttle: '10'
        },
        loader: {
            element: '.progress'
        }
    });
});
</script>
