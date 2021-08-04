<?php
class Voiture
{
    private $Immatriculation;
    private $Couleur;
    private $Poids;
    private $Puissance;
    private $Capacite_Reservoir;
    private $Niveau_Essence;
    private $Nombre_Place;
    private $Assure = false;
    private $Message_Tableau_de_Bord;

    public function __construct($Imma, $Coul, $P, $Pui, $Cap_Res, $niv_res, $Nb_Place)
    {
        $this->Immatriculation = $Imma;
        $this->Couleur = $Coul;
        $this->Poids = $P;
        $this->Puissance = $Pui;
        $this->Capacite_Reservoir = $Cap_Res;
        $this->Niveau_Essence = $niv_res;
        $this->Nombre_Place = $Nb_Place;
    }
    public function __toString()
    {
        return $this->Immatriculation;
    }

    public function getImmat()
    {
        return $this->Immatriculation;
    }
    public function getCouleur()
    {
        return $this->Couleur;
    }
    public function getPoids()
    {
        return $this->Poids;
    }
    public function getPuissance()
    {
        return $this->Puissance;
    }
    public function getCapacity()
    {
        return $this->Capacite_Reservoir;
    }
    public function getEssence()
    {
        return $this->Niveau_Essence;
    }
    public function getAssure()
    {
        if ($this->Assure === true) {
            echo '<strong>vehicule</strong> assuré <br><br>';
        } else {
            echo '<strong>vehicule</strong> non assuré <br><br>';
        }
        return $this->Assure;
    }
    public function setAssure($vie)
    {
        if (is_bool($vie) === false) {
            echo 'Veuillez entrer True ou False <br> ';
        } else {
            $this->Assure = $vie;
        }
    }
    public function setNivEss()
    {
        // $this->Niveau_Essence = $NivEss;
    }
    public function getNbPlace()
    {
        return $this->Nombre_Place;
    }

    public function repeindre($toto)
    {
        if (isset($toto)) {
            if ($this->Couleur == $toto) {
                echo 'merci pour le rafraishissement <br> ';
            } else {
                $this->Couleur = $toto;
                echo '<strong>Couleur MAJ:  </strong>' . $toto . '<br><br>';
            }
        } else {
            echo '';
        }
    }
    public function mettreessence($plusulta)
    {
        if ($plusulta + $this->Niveau_Essence >= $this->Capacite_Reservoir) {
            $this->Niveau_Essence = $this->Capacite_Reservoir;
            echo '<strong>Detail Essence:</strong> Max <br> ';
        } else {
            $this->Niveau_Essence += $plusulta;
            echo 'reservoir ' . $this->Niveau_Essence . 'L<br>';
        }
        if ($this->Niveau_Essence + $plusulta <= 0) {
            $this->Niveau_Essence = 0;
        }
    }

    public function distance($Speed, $Km)
    {
        if ($Speed < 50) {
            $this->Niveau_Essence -= 10 / 100 * $Km;
        }
        if ($Speed > 50 && $Speed < 90) {
            $this->Niveau_Essence -= 5 / 100 * $Km;
        }
        if ($Speed > 90 && $Speed < 130) {
            $this->Niveau_Essence -= 8 / 100 * $Km;
        }
        if ($Speed > 130) {
            $this->Niveau_Essence -= 12 / 100 * $Km;
        }
    }

    public function setMessage()
    {
        // $this->Message_Tableau_de_Bord = $Msg; 
    }
    public function toHTML()
    {
        return
            "<p><strong>immatriculation</strong> " . $this->Immatriculation . "</p>" .
            "<p><strong>Couleur</strong> " . $this->Couleur . "</p>" .
            "<p><strong>Poids</strong> " . $this->Poids . "</p>" .
            "<p><strong>Capacité</strong> " . $this->Capacite_Reservoir . "</p>" .
            "<p><strong>Niveau d'essence</strong> " . $this->Niveau_Essence . "</p>" .
            "<p><strong>Nombre de place</strong> " . $this->Nombre_Place . "</p>";
    }
}
/*--------------------------------------*/

class fourgon extends Voiture
{
    public $fourgon_poid;    
    public $fourgon_puissance;    


    public function __construct($Imma, $Coul, $P, $Pui, $Cap_Res, $niv_res, $Nb_Place, $f_p, $f_pui)
    {
        parent::__construct($Imma, $Coul, $P, $Pui, $Cap_Res, $niv_res, $Nb_Place);

        $this->fourgon_poid = $f_p;
        $this->fourgon_puissance = $f_pui;
    }

    public function getfourgon_poid()
    {
        return $this->fourgon_poid;
    }
    public function getfourgon_puissance()
    {
        return $this->fourgon_puissance;
    }
    public function toHTML()
    {
        return
            "<p><strong>immatriculation</strong> " . $this->fourgon_poid . "</p>" .
            "<p><strong>Couleur</strong> " . $this->fourgon_puissance . "</p>" .
            "<p><strong>Poids</strong> " . parent::getPuissance() . "</p>";
    }
}
