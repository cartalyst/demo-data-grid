<script>
$(function () {
    var dg = new DataGridManager();

    var grid = dg.create('apples', {
        source: '{{ route('example.fruits.apples') }}',
        pagination: {
            method: 'infinite',
            threshold: '10',
            throttle: '10'
        },
        loader: {
            element: '.progress'
        }
    });

    var grid = dg.create('oranges', {
        source: '{{ route('example.fruits.oranges') }}',
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
