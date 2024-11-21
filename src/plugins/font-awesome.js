// src/plugins/font-awesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import des icônes spécifiques que vous souhaitez utiliser
import { faUserSecret, faCoffee } from '@fortawesome/free-solid-svg-icons';

// Ajout des icônes à la bibliothèque Font Awesome
library.add(faUserSecret, faCoffee);

// Exporter l'élément `FontAwesomeIcon` pour l'utiliser dans l'application
export default FontAwesomeIcon;
