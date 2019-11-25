<div class="title-bar" data-responsive-toggle="demo-menu" data-hide-for="medium">
    <button class="menu-icon" type="button" data-toggle></button>
    <div class="title-bar-title"><a href="{{ route('demo.home') }}">{{ trans('app.title') }}</a></div>
</div>

<div class="top-bar" id="demo-menu">
    <div class="top-bar-left hide-for-small-only">
        <ul class="menu">
            <li>
                <img class="brand brand--header" src="{{ mix('assets/demo/images/brand-cartalyst.svg') }}" alt="{{ trans('app.vendor') }}">
            </li>
            <li>
                <a href="{{ route('demo.home') }}">{{ trans('app.title') }}</a>
            </li>
        </ul>
    </div>

    <div class="top-bar-right">
        <ul class="menu">
            <li>
                <a href="{{ route('demo.install') }}">Install</a>
            </li>
            <li>
                <a href="{{ route('demo.examples') }}">Examples</a>
            </li>
            <li>
                <a href="https://cartalyst.com/manual/data-grid" target="_blank">Manual</a>
            </li>
        </ul>
    </div>
</div>
