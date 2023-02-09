<?php
class DAOJogo
{
    public function lista()
    {
        $lista = [];
        $pst = Conexao::getPreparedStatement('SELECT * FROM jogo ORDER BY idjogo');
        $pst->execute();
        $lista = $pst->fetchAll(PDO::FETCH_ASSOC);
        return $lista;
    }

    public function inclui(Jogo $jogo)
    {
        $sql = 'INSERT INTO jogo (nomeganhador) VALUES (?)';

        $pst = Conexao::getPreparedStatement($sql);
        $pst->bindValue(1, $jogo->getNomeganhador());

        if ($pst->execute()) {
            return true;
        } else {
            return false;
        }
    }
}
