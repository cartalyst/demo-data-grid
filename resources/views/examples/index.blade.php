@extends('layouts/default')

{{-- Inline scripts --}}
@section('scripts')
<script>
    $(function() {
        var dg = new DataGridManager();

        var grid = dg.create('examples', {
            source: '{{ route('examples.source') }}',
        });
    });
</script>
@stop

{{-- Content --}}
@section('page')
<header class="page__header examples">

    <div class="container">

        <div class="mdl-grid center">

            <div class="mdl-cell mdl-cell--12-col">

                <h1>Examples</h1>
                <h2 class="tagline">A collection of implementations using Data Grid</h2>

            </div>

        </div>

    </div>

</header>

<section class="page__showcase">

    <div class="container">

        <div class="data-grid data-grid--grid" data-grid="examples">

            <div class="mdl-grid" data-grid-layout="results"></div>

        </div>

    </div>

</section>

<script type="text/template" data-grid="examples" data-grid-template="results">

    <% var results = response.results; %>

    <% if (_.isEmpty(results)) { %>
        <tr>
            <td colspan="6">No Results</td>
        </tr>
    <% } else { %>

        <% _.each(results, function(r) { %>

            <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">

                <div class="demo-card-square mdl-card mdl-shadow--2dp">
                        <div class="mdl-card__title mdl-card--expand">
                            <h2 class="mdl-card__title-text">
                                <%= r.name %>
                            </h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                            <p><%= r.description %></p>
                            <p><%= r.features %></p>
                        </div>
                        <div class="mdl-card__actions mdl-card--border">
                            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="<%= r.url %>">
                                <%= r.name %>
                            </a>
                        </div>
                    </div>
                </div>

        <% }); %>

    <% } %>

</script>

@stop
