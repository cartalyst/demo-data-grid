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

<header class="layout__header">

    <div class="row row--welcome">

        <div>

            <h1>Examples</h1>

            <h2 class="tagline">A collection of implementations using Cartalyst Data Grid</h2>

        </div>

    </div>

</header>

<div class="layout__body">

    <div class="showcase showcase--examples row">

        <div class="data-grid data-grid--blocks" data-grid="examples">

            <div class="row small-up-1 medium-up-3" data-grid-layout="results"></div>

        </div>

    </div>

</div>

<script type="text/template" data-grid="examples" data-grid-template="results">

    <% var results = response.results; %>

    <% if (_.isEmpty(results)) { %>
        No Results
    <% } else { %>

        <% _.each(results, function(r) { %>

            <div class="column">
                <div class="card">
                    <div class="card-section">
                        <img src="images/<%= r.name %>.svg" alt="<%= r.name %>">
                        <h4>
                            <a class="large hollow button" href="<%= r.url %>">
                                <%= r.name %>
                            </a>
                        </h4>
                    </div>
                    <div class="card-section">
                        <p><%= r.description %></p>
                        <p><i><%= r.features %></i></p>
                    </div>
                </div>
            </div>

        <% }); %>

    <% } %>

</script>

@stop
