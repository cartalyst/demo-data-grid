<div class="title-bar" data-responsive-toggle="example-animated-menu" data-hide-for="medium">
  <button class="menu-icon" type="button" data-toggle></button>
  <div class="title-bar-title">Menu</div>
</div>

<div class="top-bar" id="example-animated-menu" data-animate="hinge-in-from-top spin-out">
  <div class="top-bar-left">
    <ul class="dropdown menu" data-dropdown-menu>
      <li class="menu-text"><a href="{{ route('home') }}">{{ trans('app.title') }}</a></li>
      <li>
        <a href="{{ route('examples') }}">Examples</a>
        <ul class="menu vertical">
          <li><a href="">Basic</a></li>
          <li><a href="">Advanced</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
