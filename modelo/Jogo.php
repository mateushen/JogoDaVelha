<?php
Class Jogo {
    private $idjogo;
    private $nomeganhador;

    public function getIdjogo()
    {
        return $this->idjogo;
    }

    public function setIdjogo($idjogo)
    {
        $this->idjogo = $idjogo;

        return $this;
    }

    public function getNomeganhador()
    {
        return $this->nomeganhador;
    }

    public function setNomeganhador($nomeganhador)
    {
        $this->nomeganhador = $nomeganhador;
        return $this;
    }
}