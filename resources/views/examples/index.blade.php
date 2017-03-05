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

<header class="page__header">

    <div class="welcome row">

        <div class="small-12 align-self-middle columns">

            <h1>Examples</h1>

            <h2 class="tagline">A collection of implementations using Cartalyst Data Grid</h2>

        </div>

    </div>

</header>

<div class="page__body">

    <div class="row align-stretch small-up-1 medium-up-2" data-grid="examples" data-grid-layout="results"></div>

</div>

<script type="text/template" data-grid="examples" data-grid-template="results">

    <% var results = response.results; %>

    <% if (_.isEmpty(results)) { %>
        No Results
    <% } else { %>

        <% _.each(results, function(r) { %>

            <div class="column">

                <div class="card card--example">
                    <div class="mascot mascot--card mascot--<%= r.name %>"></div>
                    <div class="card-section">
                        <h4>
                            <a class="large button" href="<%= r.url %>">
                                <%= r.name %>
                            </a>
                        </h4>
                        <p><%= r.description %></p>
                        <p><i><%= r.features %></i></p>

                    </div>
                </div>

            </div>

        <% }); %>

    <% } %>

</script>

@stop
