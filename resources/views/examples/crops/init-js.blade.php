<script>
$(function () {
    var dg = new DataGridManager();

    var grid = dg.create('crops', {
        source: '{{ route('example.crops.source') }}',
        pagination: {
            threshold: '10',
            throttle: '10'
        },
        loader: {
            element: '.loading'
        }
    });
});
</script>
