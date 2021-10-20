import React from 'react';

import { motion } from 'framer-motion';

import authorPhoto from '../../img/unknown-profile.jpg';

export default function ComitesPostesList({ current, updateScroller }) {
  const comites = [
    [
      { poste: 'Président', name: 'David "Nitch" Ksenicz', photo: authorPhoto },
      {
        poste: 'Vice-président',
        name: 'Julien "Djou" Deneunmostier',
        photo: authorPhoto,
      },
      {
        poste: 'Secrétaire',
        name: 'Caroline "Caro" Overbergh',
        photo: authorPhoto,
      },
      { poste: 'Trésorier', name: 'Pierre "Pit" Baijot', photo: authorPhoto },
      { poste: 'Vice-orga', name: 'Kevin "Kev" Stassen', photo: authorPhoto },
      {
        poste: 'Vice-guindaille',
        name: 'Michael "Mike" Decamp',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-bar/baptême',
        name: 'Gaetan "Getget" Esselen',
        photo: authorPhoto,
      },
      { poste: 'Vice-anim', name: 'Leila Taktak', photo: authorPhoto },
      {
        poste: 'Vice-culture',
        name: 'Michael "Michmich" Toussaint',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-revue',
        name: 'Gilles "Jimmy" Jonckheere',
        photo: authorPhoto,
      },
      { poste: 'Vice-info', name: 'Julien "Boss" Bosly', photo: authorPhoto },
      {
        poste: 'Vice-info',
        name: 'Christophe "Franky" Gowie',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-midi',
        name: 'Emmanuel "Manu" Emonts',
        photo: authorPhoto,
      },
      { poste: 'Vice-web', name: 'Xavier Claude', photo: authorPhoto },
      {
        poste: 'Vice-kfet',
        name: 'Olivier "Dotr" Dotremont',
        photo: authorPhoto,
      },
      { poste: 'Vice-souk', name: 'Arnaud "Kifier" Brack', photo: authorPhoto },
      {
        poste: 'Vice-contact',
        name: 'Quentin Christiaens',
        photo: authorPhoto,
      },
      { poste: 'Vice-commu', name: 'Caroline Baseqcz', photo: authorPhoto },
      { poste: 'Vice-bac', name: 'Stéphanie Marenne', photo: authorPhoto },
      {
        poste: 'Vice-sport',
        name: 'Michael "Micky Mike" Marichal',
        photo: authorPhoto,
      },
      { poste: 'Vice-lundi', name: 'Wouter de Groot', photo: authorPhoto },
      { poste: 'Vice-clash', name: 'Jean Van der Vaeren', photo: authorPhoto },
    ],
    [
      { poste: 'Président', name: 'Julien "Boss" Bosly', photo: authorPhoto },
      {
        poste: 'Vice-président',
        name: 'Jean Van der Vaeren',
        photo: authorPhoto,
      },
      { poste: 'Secrétaire', name: 'Stéphanie Marenne', photo: authorPhoto },
      { poste: 'Trésorier', name: 'Wouter de Groot', photo: authorPhoto },
      { poste: 'Vice-orga', name: 'Quentin Christiaens', photo: authorPhoto },
      {
        poste: 'Vice-guindaille',
        name: 'Michael "Micky Mike" Marichal',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-bar/baptême',
        name: 'Arnaud "Kiefer" Brack',
        photo: authorPhoto,
      },
      { poste: 'Vice-anim', name: 'Caroline Baseqcz', photo: authorPhoto },
      {
        poste: 'Vice-culture/bleusailles',
        name: 'Christophe "Franky" Gowie',
        photo: authorPhoto,
      },
      { poste: 'Vice-revue', name: 'Louis Bömcke', photo: authorPhoto },
      { poste: 'Vice-info', name: 'Thomas "PP" Tourneur', photo: authorPhoto },
      {
        poste: 'Vice-info',
        name: 'Geoffroy "Phili" Herbin',
        photo: authorPhoto,
      },
      { poste: 'Vice-midi', name: 'Jayson Paris', photo: authorPhoto },
      { poste: 'Vice-web', name: 'Renaud Hartert', photo: authorPhoto },
      { poste: 'Vice-kfet', name: 'Antoine Decuyper', photo: authorPhoto },
      { poste: 'Vice-souk', name: 'Erik "Erak" Cooremans', photo: authorPhoto },
      {
        poste: 'Vice-contact',
        name: 'Thomas "Thom" Hanquet',
        photo: authorPhoto,
      },
      { poste: 'Vice-commu', name: 'Martin Limpens', photo: authorPhoto },
      { poste: 'Vice-bac', name: 'Virgile Hinque', photo: authorPhoto },
      { poste: 'Vice-sport', name: 'Gilles De Neyer', photo: authorPhoto },
      { poste: 'Vice-lundi', name: 'Olivier Gindt', photo: authorPhoto },
      { poste: 'Vice-clash', name: 'Laurent Pérignon', photo: authorPhoto },
    ],
    [
      { poste: 'Président', name: 'Erik "Erak" Cooremans', photo: authorPhoto },
      {
        poste: 'Vice-président',
        name: 'Thomas "PP" Tourneur',
        photo: authorPhoto,
      },
      { poste: 'Secrétaire', name: 'Renaud Hartert', photo: authorPhoto },
      { poste: 'Trésorier', name: 'Martin Limpens', photo: authorPhoto },
      { poste: 'Vice-orga', name: 'Louis Bömcke', photo: authorPhoto },
      {
        poste: 'Vice-bar/baptême',
        name: 'Thomas "Thom" Hanquet',
        photo: authorPhoto,
      },
      { poste: 'Vice-revue', name: 'Aude Colson', photo: authorPhoto },
      {
        poste: 'Vice-anim',
        name: 'Julien "Gros ju" Van Cottem',
        photo: authorPhoto,
      },
      { poste: 'Vice-culture', name: 'Antoine De Cuyper', photo: authorPhoto },
      {
        poste: 'Vice-guindaille',
        name: 'David "Nitch" Kzenicz',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-bleusailles',
        name: 'Gregory Paladin',
        photo: authorPhoto,
      },
      { poste: 'Vice-midi', name: 'Malian De Ron', photo: authorPhoto },
      { poste: 'Vice-info', name: 'Eric "Ricky" Huysmans', photo: authorPhoto },
      { poste: 'Vice-info', name: 'Raphaël Capelle', photo: authorPhoto },
      {
        poste: 'Vice-contact',
        name: 'Frédérique "Fred" Delvaux',
        photo: authorPhoto,
      },
      { poste: 'Vice-web', name: 'Thoralf Gutierrez', photo: authorPhoto },
      {
        poste: 'Vice-kfet',
        name: 'Jérôme "Patou" Patigny',
        photo: authorPhoto,
      },
      { poste: 'Vice-souk', name: 'Yannick Tivisse', photo: authorPhoto },
      {
        poste: 'Vice-clash',
        name: 'Martin "Martich" Funck',
        photo: authorPhoto,
      },
      { poste: 'Vice-commu', name: 'Antoine Watterman', photo: authorPhoto },
      { poste: 'Vice-bac', name: 'Pauline "Popol" Joris', photo: authorPhoto },
      { poste: 'Vice-sport', name: 'Simon Vansnick', photo: authorPhoto },
      {
        poste: 'Vice-photo',
        name: 'Alexis "Alex" Debarsy',
        photo: authorPhoto,
      },
    ],
    [
      { poste: 'Président', name: 'Malian De Ron', photo: authorPhoto },
      {
        poste: 'Vice-président',
        name: 'Eric "Ricky" Huysmans',
        photo: authorPhoto,
      },
      {
        poste: 'Secrétaire',
        name: 'Julien "Gros ju" Van Cottem',
        photo: authorPhoto,
      },
      { poste: 'Trésorier', name: 'Antoine Watterman', photo: authorPhoto },
      {
        poste: 'Vice-bar/baptême',
        name: 'Yannick Tivisse',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-guindaille',
        name: 'Martin "Martich" Funck',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-anim/bleusailles',
        name: 'Alexandre "Alex" Debarsy',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-140ème',
        name: 'Pauline "Popol" Joris',
        photo: authorPhoto,
      },
      { poste: 'Vice-midi', name: 'Alexis De Borrekens', photo: authorPhoto },
      {
        poste: 'Vice-info',
        name: 'Euloge "Eulol" Nshimirimana',
        photo: authorPhoto,
      },
      { poste: 'Vice-info', name: 'Martin Godts', photo: authorPhoto },
      { poste: 'Vice-contact', name: 'Chloé Matheys', photo: authorPhoto },
      { poste: 'Vice-revue', name: 'Charly Raisière', photo: authorPhoto },
      {
        poste: 'Vice-kfet',
        name: 'Manuel "Manu" Vanderlinden',
        photo: authorPhoto,
      },
      { poste: 'Vice-souk', name: 'Jia-Zhun "Jazou" Chen', photo: authorPhoto },
      { poste: 'Vice-clash', name: 'Gauthier Limpens', photo: authorPhoto },
      { poste: 'Vice-commu', name: 'Eugénie Nothomb', photo: authorPhoto },
      { poste: 'Vice-bac', name: 'Line Goffaux', photo: authorPhoto },
      {
        poste: 'Vice-sport',
        name: 'Loïc Van Nieuwenhuyse',
        photo: authorPhoto,
      },
      { poste: 'Vice-photo', name: 'Audrey Devos', photo: authorPhoto },
    ],
    [
      { poste: 'Président', name: 'Alexis De Borrekens', photo: authorPhoto },
      { poste: 'Vice-président', name: 'Charly Raisière', photo: authorPhoto },
      {
        poste: 'Secrétaire',
        name: 'Euloge "Eulol" Nshimirimana',
        photo: authorPhoto,
      },
      { poste: 'Trésorière', name: 'Line Goffaux', photo: authorPhoto },
      {
        poste: 'Vice-orga',
        name: 'Manuel "Manu" Vanderlinden',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-bar/baptême',
        name: 'Jia-Zhun "Jazou" Chen',
        photo: authorPhoto,
      },
      { poste: 'Vice-anim', name: 'Loïc Van Nieuwenhuyse', photo: authorPhoto },
      { poste: 'Vice-anim', name: 'Eugénie Nothomb', photo: authorPhoto },
      {
        poste: 'Vice-guindaille/bleusailles',
        name: 'Martin Godts',
        photo: authorPhoto,
      },
      { poste: 'Vice-culture', name: 'Gauthier Limpens', photo: authorPhoto },
      { poste: 'Vice-info', name: 'Fabrice Rigot', photo: authorPhoto },
      { poste: 'Vice-info', name: 'Antoine Fourquet', photo: authorPhoto },
      {
        poste: 'Vice-midi',
        name: 'Thibaud "BN" Van Hamme',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-contact',
        name: 'Maxime "Graxime" Duyck',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-revue',
        name: 'Antoine "Winny" Weynants',
        photo: authorPhoto,
      },
      { poste: 'Vice-kfet', name: 'Cyril "Kenny" Sollas', photo: authorPhoto },
      {
        poste: 'Vice-souk',
        name: 'Quentin "Qlal" Lallemand',
        photo: authorPhoto,
      },
      { poste: 'Vice-clash', name: 'Clément Gengler', photo: authorPhoto },
      {
        poste: 'Vice-commu',
        name: 'Simon "Grassouillet" Gailly',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-bac',
        name: 'Samuel "Sam" Deladrière',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-sport',
        name: 'Quentin "Compote" Materne',
        photo: authorPhoto,
      },
      { poste: 'Vice-web/photo', name: 'Thibaut Grogna', photo: authorPhoto },
    ],
    [
      {
        poste: 'Président',
        name: 'Simon "Grassouillet" Gailly',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-président',
        name: 'Quentin "Qlal" Lallemand',
        photo: authorPhoto,
      },
      { poste: 'Secrétaire', name: 'Thibaut Grogna', photo: authorPhoto },
      {
        poste: 'Trésorier',
        name: 'Samuel "Sam" Deladrière',
        photo: authorPhoto,
      },
      { poste: 'Vice-orga', name: 'Antoine Fourquet', photo: authorPhoto },
      {
        poste: 'Vice-bar/baptême',
        name: 'Maxime "Grax" Duyck',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-anim/bleusailles',
        name: 'Clément Gengler',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-guindaille',
        name: 'Fabrice "Fab" Rigot',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-culture',
        name: 'Quentin "Compote" Materne',
        photo: authorPhoto,
      },
      { poste: 'Vice-midi', name: 'Félicien Schiltz', photo: authorPhoto },
      {
        poste: 'Vice-info',
        name: 'Flavien "Flatou" Gaspard',
        photo: authorPhoto,
      },
      { poste: 'Vice-info', name: 'Tanguy Wackers', photo: authorPhoto },
      {
        poste: 'Vice-contact',
        name: 'Robin "Mouf" El Raghibi',
        photo: authorPhoto,
      },
      { poste: 'Vice-revue', name: 'William Bonesire', photo: authorPhoto },
      { poste: 'Vice-kfet', name: 'Michael "Mike" Biro', photo: authorPhoto },
      {
        poste: 'Vice-souk',
        name: 'Antoine "Maindial" Maindiaux',
        photo: authorPhoto,
      },
      { poste: 'Vice-clash/web', name: 'Vincent Cattoir', photo: authorPhoto },
      {
        poste: 'Vice-commu',
        name: 'Stéphanie "Steph" Abbeels',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-bac',
        name: 'Damien "Marniflette" Marneffe',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-sport',
        name: 'Tristan "Gaytan" Herrezeel',
        photo: authorPhoto,
      },
      { poste: 'Vice-photo', name: 'Valentine "Val" Eloy', photo: authorPhoto },
    ],
    [
      {
        poste: 'Président',
        name: 'Antoine "Maindial" Maindiaux',
        photo: authorPhoto,
      },
      { poste: 'Vice-président', name: 'Félicien Schiltz', photo: authorPhoto },
      {
        poste: 'Secrétaire',
        name: 'Robin "Mouf" El Raghibi',
        photo: authorPhoto,
      },
      { poste: 'Trésorier', name: 'Michael "Mike" Biro', photo: authorPhoto },
      {
        poste: 'Vice-orga',
        name: 'Tristan "Gaytan" Herrezeel',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-orga',
        name: 'Damien "Marniflette" Marneffe',
        photo: authorPhoto,
      },
      { poste: 'Vice-bar', name: 'Vincent Cattoir', photo: authorPhoto },
      {
        poste: 'Vice-anim/bleusailles',
        name: 'William "Will" Bonesire',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-anim/baptême',
        name: 'Tanguy Wackers',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-guindaille',
        name: 'Flavien "Flatou" Gaspard',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-culture',
        name: 'Valentine "Val" Eloy',
        photo: authorPhoto,
      },
      { poste: 'Vice-midi', name: 'Simon "Scauwe" Cauwe', photo: authorPhoto },
      {
        poste: 'Vice-info',
        name: 'Gilles "Petit Gilles" Vanderwegen',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-info/web',
        name: 'Nathan "Fafanculo" Magrofuoco',
        photo: authorPhoto,
      },
      { poste: 'Vice-kfet', name: 'Dylan "Didier" Maas', photo: authorPhoto },
      {
        poste: 'Vice-commu',
        name: 'Damien "Damier" Loiseau',
        photo: authorPhoto,
      },
      { poste: 'Vice-contact', name: 'Camille Meyers', photo: authorPhoto },
      { poste: 'Vice-revue', name: 'Simon "Bizut" Nyssen', photo: authorPhoto },
      {
        poste: 'Vice-souk/clash',
        name: 'Martin "Barbalol" Barbason',
        photo: authorPhoto,
      },
      { poste: 'Vice-photo', name: 'Ophélie Wagner', photo: authorPhoto },
      { poste: 'Vice-bac/sport', name: 'Guillaume Costa', photo: authorPhoto },
    ],
    [
      { poste: 'Président', name: 'Simon "Bizut" Nyssen', photo: authorPhoto },
      { poste: 'Vice-présidente', name: 'Camille Meyers', photo: authorPhoto },
      { poste: 'Secrétaire', name: 'Ophélie Wagner', photo: authorPhoto },
      {
        poste: 'Trésorier',
        name: 'Damien "Damier" Loiseau',
        photo: authorPhoto,
      },
      { poste: 'Vice-orga', name: 'Dylan "Didier" Maas', photo: authorPhoto },
      { poste: 'Vice-orga', name: 'Guillaume Costa', photo: authorPhoto },
      { poste: 'Vice-bar', name: 'Simon "Scauwe" Cauwe', photo: authorPhoto },
      {
        poste: 'Vice-guindaille/bleusailles',
        name: 'Martin "Barbalol" Barbason',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-anim/baptême',
        name: 'Gilles "Petit Gilles" Vanderwegen',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-culture/anim',
        name: 'Nathan "Fafanculo" Magrofuoco',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-midi',
        name: 'Paul "La Poisse" Decroës',
        photo: authorPhoto,
      },
      { poste: 'Vice-info', name: 'James "Rames" Deman', photo: authorPhoto },
      {
        poste: 'Vice-info/souk',
        name: 'Lucien "Sodom" Massinon',
        photo: authorPhoto,
      },
      { poste: 'Vice-kfet', name: 'Bastien Tagnon', photo: authorPhoto },
      {
        poste: 'Vice-commu',
        name: 'Virginie "Verge" Mathy',
        photo: authorPhoto,
      },
      { poste: 'Vice-contact', name: 'Anthony Gatin', photo: authorPhoto },
      { poste: 'Vice-revue', name: 'Cédric Simon', photo: authorPhoto },
      {
        poste: 'Vice-clash/web',
        name: 'Jean Sébastien "JS" Deneil',
        photo: authorPhoto,
      },
      { poste: 'Vice-photo', name: 'Irène Schiltz', photo: authorPhoto },
      { poste: 'Vice-bac', name: 'Victor "Folklore" Reis', photo: authorPhoto },
      { poste: 'Vice-bac', name: 'Laurane Guiot', photo: authorPhoto },
      {
        poste: 'Vice-sport',
        name: 'Timothée "Tim" Malengreau',
        photo: authorPhoto,
      },
    ],
    [
      {
        poste: 'Président',
        name: 'Anthony "Mangeur de fûts" Gatin',
        photo: authorPhoto,
      },
      { poste: 'Vice-président', name: 'Cédric Simon', photo: authorPhoto },
      {
        poste: 'Secrétaire/vice-orga',
        name: 'Virginie "Verge" Mathy',
        photo: authorPhoto,
      },
      { poste: 'Trésorier', name: 'James "Rames" Deman', photo: authorPhoto },
      {
        poste: 'Vice-orga',
        name: 'Victor "Folklore" Reis',
        photo: authorPhoto,
      },
      { poste: 'Vice-anim', name: 'Jules "Dindon" Delcon', photo: authorPhoto },
      {
        poste: 'Vice-bar/baptême',
        name: 'Paul "Gestapaul" Decroes',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-guindaille',
        name: 'Bastien "Medor" Tagnon',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-anim/bleusailles',
        name: 'Jean-Sébastien "Jean Snoopy" Deneil',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-culture/145 ans',
        name: 'Irène "Irenedusex" Schiltz',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-midi/photo',
        name: 'Benjamin "Big Ben" Ferdinand',
        photo: authorPhoto,
      },
      { poste: 'Vice-info', name: 'Quentin Deketelaere', photo: authorPhoto },
      { poste: 'Vice-info', name: 'Adrien Alexandre', photo: authorPhoto },
      {
        poste: 'Vice-kfet',
        name: 'Gaëlle "Graëlle" De Beusscher',
        photo: authorPhoto,
      },
      { poste: 'Vice-commu', name: 'Brice "Frank" Bertin', photo: authorPhoto },
      {
        poste: 'Vice-contact/web',
        name: 'Thomas "TholaMenthe" Lampe',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-revue',
        name: 'Guillaume "Puti" Dacier',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-clash',
        name: 'Guillaume "Daniel" Morel',
        photo: authorPhoto,
      },
      { poste: 'Vice-souk', name: 'Maxime Borlon', photo: authorPhoto },
      { poste: 'Vice-bac', name: 'Nicolas Breels', photo: authorPhoto },
      {
        poste: 'Vice-sport',
        name: 'Léo "Lélé" Vande Putte',
        photo: authorPhoto,
      },
    ],
    [
      { poste: 'Président', name: 'Maxime "MaxBo" Borlon', photo: authorPhoto },
      {
        poste: 'Vice-président',
        name: 'Brice "Frank" Bertin',
        photo: authorPhoto,
      },
      {
        poste: 'Secrétaire/vice-culture',
        name: 'Guillaume "Daniel" Morel',
        photo: authorPhoto,
      },
      {
        poste: 'Trésorier',
        name: 'Nicolas "Tapis" Breels',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-orga',
        name: 'Benjamin "BigBen" Ferdinand',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-orga',
        name: 'Léo "Lélé" Vande Putte',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-anim',
        name: 'Adrien "Furt" Alexandre',
        photo: authorPhoto,
      },
      { poste: 'Vice-anim', name: 'Gaëlle De Beusscher', photo: authorPhoto },
      { poste: 'Vice-bar', name: 'Thomas Lampe', photo: authorPhoto },
      {
        poste: 'Vice-guindaille',
        name: 'Guillaume "Puti" Dacier',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-photo/bleusailles',
        name: 'Jules "Dindon" Delcon',
        photo: authorPhoto,
      },
      { poste: 'Vice-bac/baptême', name: 'Louis Boudry', photo: authorPhoto },
      { poste: 'Vice-midi', name: 'Ivan "Divan" Stevens', photo: authorPhoto },
      { poste: 'Vice-info', name: 'Nicolas "Dour" Dourt', photo: authorPhoto },
      { poste: 'Vice-info', name: 'Quentin "Iglo" Igot', photo: authorPhoto },
      { poste: 'Vice-kfet', name: 'Denis Pinsar', photo: authorPhoto },
      {
        poste: 'Vice-commu/web',
        name: 'Guillaume "Laclaque" Lacave',
        photo: authorPhoto,
      },
      { poste: 'Vice-contact', name: 'Merlin Iserentant', photo: authorPhoto },
      {
        poste: 'Vice-revue',
        name: 'Pauline "Jack-Jack" Jacques',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-souk/clash',
        name: 'Julien "Juchien" Bosseler',
        photo: authorPhoto,
      },
      { poste: 'Vice-bac', name: 'Inès Winand', photo: authorPhoto },
      {
        poste: 'Vice-sport',
        name: 'François "Frunch" Berhin',
        photo: authorPhoto,
      },
    ],
    [
      {
        poste: 'Président',
        name: 'Guillaume "Laclaque" Lacave',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-président',
        name: 'Nicolas "Dour" Dourt',
        photo: authorPhoto,
      },
      {
        poste: 'Secrétaire/Vice-orga',
        name: 'Quentin "Iglo" Igot',
        photo: authorPhoto,
      },
      { poste: 'Trésorier', name: 'Denis "Penys" Pinsar', photo: authorPhoto },
      {
        poste: 'Vice-orga',
        name: 'Pauline "Jack-Jack" Jacques',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-bar',
        name: 'Julien "Juchien" Bosseler',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-culture/anim/bleusailles',
        name: 'François "Frunch" Berhin',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-guindaille',
        name: 'Adrien "Steve" Delhaye',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-revue',
        name: 'Michel "MichMich" Henry',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-bac/contact/baptême',
        name: 'Martin "FiACO" Fiasse',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-culture/photo',
        name: 'Sophie "Ladouce" Ledoux',
        photo: authorPhoto,
      },
      { poste: 'Vice-info', name: 'Axel "Gérard" Bosly', photo: authorPhoto },
      {
        poste: 'Vice-info',
        name: 'Arnaud "Biernaud" Sibille',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-souk',
        name: 'Baptiste "Snoch" Vansnick',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-kfet',
        name: 'Hugo "Arthur Paul" Baudson',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-commu/web',
        name: 'Aurian "JF" Rommel',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-clash',
        name: 'Anthony "Defresh" Devresse',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-midi',
        name: 'Clément "ClemDup" Dupont',
        photo: authorPhoto,
      },
      { poste: 'Vice-midi/anim', name: 'Nathan Tasset', photo: authorPhoto },
      {
        poste: 'Vice-bac',
        name: 'Grégoire "Nyssen" Dupriez',
        photo: authorPhoto,
      },
      { poste: 'Vice-sport', name: 'Charles "CF" Frère', photo: authorPhoto },
    ],
    [
      { poste: 'Président', name: 'Nathan Tasset', photo: authorPhoto },
      {
        poste: 'Vice-président',
        name: 'Aurian "JF" Rommel',
        photo: authorPhoto,
      },
      {
        poste: 'Secrétaire/vice-culture/bleusailles',
        name: 'Axel "Gérard" Bosly',
        photo: authorPhoto,
      },
      { poste: 'Trésorier', name: 'Hugo "Gluten" Baudson', photo: authorPhoto },
      { poste: 'Vice-bar', name: 'Charles "CF" Frère', photo: authorPhoto },
      {
        poste: 'Vice-orga',
        name: 'Anthony "Defresh" Devresse',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-orga',
        name: 'Grégoire "Nyssen" Dupriez',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-anim',
        name: 'Sophie "Ladouce" Ledoux',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-guindaille/baptême',
        name: 'Clément "ClemDup" Dupont',
        photo: authorPhoto,
      },
      { poste: 'Vice-souk/web', name: 'Hadrien Plancq', photo: authorPhoto },
      {
        poste: 'Vice-bac',
        name: 'John "Jonion" Niyonkuru',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-info',
        name: 'Thomas "Averell" Mylemans',
        photo: authorPhoto,
      },
      { poste: 'Vice-info', name: 'Brieuc "Kaiz" Kaisin', photo: authorPhoto },
      { poste: 'Vice-commu', name: 'Elise Darche', photo: authorPhoto },
      {
        poste: 'Vice-anim',
        name: 'Antoine "Nelson" Lemaire',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-midi',
        name: 'Pierre "Pierrot" Laurent',
        photo: authorPhoto,
      },
      { poste: 'Vice-clash/photo', name: 'Elisa Devresse', photo: authorPhoto },
      { poste: 'Vice-bac', name: 'Ottilie "LLN" Bonfanti', photo: authorPhoto },
      {
        poste: 'Vice-sport/contact',
        name: 'Guillaume "DD" André',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-kfet',
        name: 'Thibaut "Thib" Parizel',
        photo: authorPhoto,
      },
      { poste: 'Vice-revue', name: 'Valentin Fonck', photo: authorPhoto },
    ],
    [
      { poste: 'Président', name: 'Hadrien "Q" Plancq', photo: authorPhoto },
      {
        poste: 'Vice-président/orga',
        name: 'John Niyonkuru',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-président/orga',
        name: 'Pierre "Pierre Louis" Louis',
        photo: authorPhoto,
      },
      {
        poste: 'Secrétaire/baptême',
        name: 'Elisa Devresse',
        photo: authorPhoto,
      },
      {
        poste: 'Trésorière',
        name: 'Ottilie "Titi" Bonfanti',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-bar/guindaille',
        name: 'Guillaume "DD" André',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-anim/bleusailles',
        name: 'Thomas "Moumoute" Mylemans',
        photo: authorPhoto,
      },
      { poste: 'Vice-anim', name: 'Ophélie "OP" Poncelet', photo: authorPhoto },
      {
        poste: 'Vice-culture/revue',
        name: 'Valentin Fonck',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-culture/photo',
        name: 'Linda Erjapova',
        photo: authorPhoto,
      },
      { poste: 'Vice-info', name: 'Arnaud "Bilal" Billat', photo: authorPhoto },
      { poste: 'Vice-info/web', name: 'Andréas Bombaert', photo: authorPhoto },
      {
        poste: 'Vice-commu',
        name: 'Samuel "Sampat" Patesson',
        photo: authorPhoto,
      },
      { poste: 'Vice-souk', name: 'Gil Wagenaar', photo: authorPhoto },
      { poste: 'Vice-midi', name: 'Lucien Delait', photo: authorPhoto },
      { poste: 'Vice-clash', name: 'Thibault Servais', photo: authorPhoto },
      {
        poste: 'Vice-bac',
        name: 'Noémie "Nono" Lapraille',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-bac',
        name: 'Alexia "Popo" De Poorter',
        photo: authorPhoto,
      },
      { poste: 'Vice-sport', name: 'Cyril Grasseels', photo: authorPhoto },
      {
        poste: 'Vice-contact',
        name: 'Arthur "Véronique Eeckhout"',
        photo: authorPhoto,
      },
      {
        poste: 'Vice-kfet',
        name: 'Nez "Alexandre" Mignot',
        photo: authorPhoto,
      },
    ],
  ];

  const jsxComiteInfos = comites[current].map(comitard => (
    <li key={comitard.name + '_data'}>
      <motion.img
        onLoad={updateScroller}
        src={comitard.photo}
        alt={comitard.name}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.75, duration: 1, ease: [0.83, 0, 0.17, 1] }}
      ></motion.img>
      <motion.p
        className="title"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.7 }}
      >
        {comitard.name}
      </motion.p>
      <motion.p
        className="name"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.7 }}
      >
        {comitard.poste}
      </motion.p>
    </li>
  ));

  return (
    <div data-scroll-section className="container container-list">
      <ul layout="rows top-justify">{jsxComiteInfos}</ul>
    </div>
  );
}
