<template>
<nav class="navbar fixed-top navbar-expand-lg navbar-light">
            <a href="#" class="navbar-brand" style="font-family: 'Roboto', sans-serif;">
                <img src="@/assets/s.png" alt="" height="40">
                <span class="text-bold">osrg Studios</span></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <button class="btn my-2 my-sm-0" type="submit">Go to Console</button>
                </form>
            </div>
        </nav>
</template>

<style scoped>
nav {
    float: left;
    background-color: rgba(241, 82, 8, 1) !important;
}

.nav-item {
    margin-right: 20px;
}

nav button {
  background-color: rgb(241, 82, 8) !important;
  color: white !important;
}

.nav-item a
{
    color: #FFF;
    text-decoration: none;
    font: 20px Raleway;
    margin: 0px 10px;
    padding: 10px 10px;
    position: relative;
    z-index: 0;
    cursor: pointer;
}

/* Top and Bottom borders go out */
.nav-item a:before, .nav-item a:after
{
    position: absolute;
    left: 0px;
    width: 100%;
    height: 2px;
    background: #FFF;
    content: "";
    opacity: 0;
    transition: all 0.3s;
}

.nav-item a:before
{
    top: 0px;
    transform: translateY(10px);
}

.nav-item a:after
{
    bottom: 0px;
    transform: translateY(-1px);
}

.nav-item a:hover:before, .nav-item a:hover:after
{
    opacity: 1;
    transform: translateY(0px);
}

.navbar {
    background-color: rgba(255, 255, 255, 0.7) !important;
}
</style>
