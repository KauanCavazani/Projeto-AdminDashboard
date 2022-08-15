class mySidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="fixed-top align-top" id="sidebar-wrapper" role="navigation">
            <div class="simplebar-content" id="sidebar-content">
                <div class="sidebar-top-header">
                    <a href="#" class="sidebar-brand">
                        <img class="logo-icon" src="../assets/images/logo-icon2.png">
                        <span class="align-middle"><strong>SafeCommerce</strong></span>
                    </a>
                    <i class="bi bi-x-lg" id="btn-close" role="button"></i>
                </div>
                <ul class="navbar-nav align-self-stretch">
                    <li class="sidebar-header">Menu</li>
                    <li><a href="#" class="nav-link text-left options-menu active" role="button"><i class="bi bi-bar-chart"></i>Visão Geral</a></li>
                    <li class="sidebar-header">Servidores</li>
                    <li><a href="" class="nav-link text-left options-menu" role="button"><i class="bi bi-hdd"></i>Servidor 1</a></li>
                    <li><a href="" class="nav-link text-left options-menu" role="button"><i class="bi bi-hdd"></i>Servidor 2</a></li>
                    <li><a href="" class="nav-link text-left options-menu" role="button"><i class="bi bi-hdd"></i>Servidor 3</a></li>
                    <li><a href="" class="nav-link text-left options-menu" role="button"><i class="bi bi-hdd"></i>Servidor 4</a></li>
                    <li class="sidebar-header">Cadastro de servidores</li>
                    <li><a href="" class="nav-link text-left options-menu" role="button"><i class="bi bi-box-arrow-in-right"></i>Cadastrar</a></li>
                </ul>
            </div>
        </nav>
        `
    }
}

class myNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand navbar-light my-navbar shadow container-fluid">
                        <div class="box-hamburguer-menu">
                            <div type="button" id="bar" class="nav-icon1 hamburguer" data-toggle="offcanvas">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <form class="d-none d-sm-inline-block form-inline navbar-search">
                                <div class="input-group">
                                    <input type="text" class="form-control bg-light" placeholder="Procure por...">
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" type="button"><i class="bi bi-search"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <ul class="navbar-nav navbar-menu">
                            <li class="nav-item dropdown d-sm-none">
                                <div class="dropdown-menu dropdown-menu-right p-3">
                                    <form class="form-inline mr-auto w-100 navbar-search">
                                        <div class="input-group">
                                            <input type="text" class="form-control bg-light border-0 small" placeholder="Procure por...">
                                            <div class="input-group-append">
                                                <button class="btn btn-primary" type="button"><i class="bi bi-search"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </li>
                            <li class="nav-item icon"><a href="#" class="nav-link"><i class="bi bi-bell-fill"></i></a></li>
                            <li class="nav-item icon"><a href="#" class="nav-link"><i class="bi bi-envelope-fill"></i></a></li>
                            <li class="nav-item icon" id="dropdown"><a href="#" class="nav-link dropdown-toggle" role="button">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Empresa</span>
                                <span class="bi bi-person-circle img-profile"></span>
                            </a></li>
                            <div class="dropdown-content" id="dropdown-content">
                                <a href="">Company user</a>
                                <div class="divisor"></div>
                                <a href="">Configurações</a>
                                <a href="">
                                    <div>
                                        Sair
                                        <i class="bi bi-box-arrow-left"></i>
                                    </div>
                                </a>
                            </div>
                        </ul>
                    </nav>
        `
    }
}

class myFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
                    <div class="container-fluid">
                        <div class="row text-muted">
                            <div class="col-6 text-left">
                                <p class="mb-0">
                                    <a href="#" class="text-muted">
                                        <strong>Dashboard safecommerce &copy;</strong>
                                    </a>
                                </p>
                            </div>
                            <div class="col-6 text-right">
                                <ul class="list-inline">
                                    <li class="footer-item">
                                        <a href="#" class="text-muted">
                                            Suporte
                                        </a>
                                    </li>
                                    <li class="footer-item">
                                        <a href="#" class="text-muted">
                                            Central de atendimento
                                        </a>
                                    </li>
                                    <li class="footer-item">
                                        <a href="#" class="text-muted">
                                            Privacidade
                                        </a>
                                    </li>
                                    <li class="footer-item">
                                        <a href="#" class="text-muted">
                                            Termos
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
        `
    }
}

customElements.define('my-footer', myFooter);
customElements.define('my-navbar', myNavbar);
customElements.define('my-sidebar', mySidebar);