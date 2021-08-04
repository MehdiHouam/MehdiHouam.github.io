<?php
class personne
{
    private $nom;
    private $prenom;
    private $age;

    public function __construct($n, $pr, $a)
    {
        $this->nom = $n;
        $this->prenom = $pr;
        $this->age = $a;
    }

    public function getnom()
    {
        return $this->nom;
    }

    public function getprenom()
    {
        return $this->prenom;
    }

    public function getage()
    {
        return $this->age;
    }

    public function toHTML()
    {
        return
            "<p><strong>Nom</strong> " . $this->getnom() . "</p>" .
            "<p><strong>Prenom</strong> " .  $this->getprenom() . "</p>" .
            "<p><strong>Age</strong> " .  $this->getage() . "</p>";
    }
}
/*--------------------------------------*/