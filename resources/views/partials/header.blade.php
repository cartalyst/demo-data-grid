<header class="quickstart-header mdl-layout__header mdl-layout__header--waterfall">
    <div class="mdl-layout__header-row">
        <span class="quickstart-title mdl-layout-title">
            <a class="quickstart-title__link" href="{{ route('home') }}">{{ trans('app.title') }}</a>
        </span>
        <!-- Add spacer, to align navigation to the right in desktop -->
        <div class="quickstart-header-spacer mdl-layout-spacer"></div>
        <!-- Navigation -->
        <div class="quickstart-navigation-container">
            <nav class="quickstart-navigation mdl-navigation">
                <a class="mdl-navigation__link mdl-typography--text-uppercase" href="{{ route('examples') }}">Examples</a>
                <a class="mdl-navigation__link mdl-typography--text-uppercase" href="">Quickstarts</a>
            </nav>
        </div>
    </div>
</header>
