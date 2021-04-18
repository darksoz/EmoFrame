import React from 'react';

export default function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor : "#00bfa5"}}>
                <div class="container">
                    <a class="navbar-brand" href="/">
                    <img src={`${process.env.PUBLIC_URL}/emoframe.png`} width="50" alt="Logo"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                        <ul class="nav ms-auto">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle btn" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><span class="fas fa-universal-access fa-lg"></span> Acessibilidade</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item">Aumentar fonte <span class="fas fa-plus-circle fa-lg"></span></a></li>
                                    <li><a class="dropdown-item">Diminuir fonte <span class="fas fa-minus-circle fa-lg"></span></a></li>
                                    <li><a class="dropdown-item">Contraste <span class="fas fa-adjust fa-lg"></span></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
