<script>
$(function () {
    var dg = new DataGridManager();

    var grid = dg.create('crops', {
        source: '{{ route('demo.example.crops.source') }}',
        pagination: {
            threshold: '10',
            throttle: '10'
        },
        loader: {
            element: '.progress'
        },
        cssClasses: {
            activeLayout: 'is-active'
        }
    });
});
</script>
