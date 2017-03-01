<div class="title-bar" data-responsive-toggle="demo-menu" data-hide-for="medium">
    <button class="menu-icon" type="button" data-toggle></button>
    <div class="title-bar-title">Data Grid 4</div>
</div>

<div class="top-bar" id="demo-menu">
    <div class="top-bar-left">
        <ul class="menu">
            <li class="menu-text"><a href="{{ route('home') }}">{{ trans('app.title') }}</a></li>
        </ul>
    </div>
    <div class="top-bar-right">
        <ul class="menu" data-dropdown-menu>
            <li class="menu-title">
                <a href="">Install</a>
            </li>
            <li class="menu-title">
                <a href="{{ route('examples') }}">Examples</a>
            </li>

            <li class="menu-title">
                <a href="https://cartalyst.com/manual/data-grid">Manual</a>
            </li>
        </ul>
    </div>
</div>
