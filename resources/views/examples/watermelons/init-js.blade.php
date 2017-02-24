<script>
$(function () {
    var dg = new DataGridManager();

    var grid = dg.create('watermelons', {
        source: '{{ route('example.watermelons.source') }}',
        pagination: {
            threshold: '100',
            throttle: '10'
        },
        loader: {
            element: '.loading'
        },
        filters: {
            'production': {
                type: 'term',
                label: 'Production',
                isDefault: true,
                query: [
                    {
                        column: 'element',
                        operator: '=',
                        value: 'Production'
                    }
                ]
            }
        }
    });
});
</script>
