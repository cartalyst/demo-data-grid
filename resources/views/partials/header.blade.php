<div class="title-bar" data-responsive-toggle="quickstart-menu" data-hide-for="medium">
    <button class="menu-icon" type="button" data-toggle></button>
    <div class="title-bar-title">Data Grid 4</div>
</div>

<div class="top-bar" id="quickstart-menu">
    <div class="top-bar-left">
        <ul class="menu">
            <li class="menu-text"><a href="{{ route('home') }}">{{ trans('app.title') }}</a></li>
        </ul>
    </div>
    <div class="top-bar-right">
        <ul class="dropdown menu" data-dropdown-menu>

            <li>
                <a href="{{ route('examples') }}">Examples</a>
                <ul class="menu vertical">
                    <li><a href="">Basic</a></li>
                    <li><a href="">Advanced</a></li>
                </ul>
            </li>
            <li class="menu-text"><a href="">Docs</a></li>
        </ul>
    </div>
</div>
