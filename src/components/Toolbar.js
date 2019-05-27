import React from 'react'

const toolbar = () => {
  return(  <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
    <div class="container">
      <a class="navbar-brand" href="{% url 'index' %}">
        <img src="{% static 'img/logo.png' %}" class="logo" alt="" />
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav">
          <li
              class="nav-item active mr-3"
          >
            <a class="nav-link" href="/">Home</a>
          </li>
          <li
              class="nav-item mr-3"
            >
            <a class="nav-link" href="/about">About</a>
          </li>
          <li
              class="nav-item mr-3"
          >
            <a class="nav-link" href="/classes">Featured Classes</a>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item mr-3">
            <a class="nav-link" href="register.html">
              <i class="fas fa-user-plus"></i> Register</a>
          </li>
          <li class="nav-item mr-3">
            <a class="nav-link" href="login.html">
              <i class="fas fa-sign-in-alt"></i>

              Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>)
}

export default toolbar
