# Repository github du projet 
    https://github.com/codeconcept

# Fichiers de configuration
* Package.json
** contient notamment (dans la section scrits) les différentes commandes possibles (ng, start, build, ...) => npm start sera équivalent à ng serve
* Angular.json
** possibilité de modifier le prefixe des composants (via le tag prefix)
    => on pourra déclarer un composant comme suit : <sbcomponents-customerList></sbcomponents-customerList>
** Ajout de répertoires où l'application pourra aller récupérer des données (section assets) et récupération via http.get()

# Angular
## Lignes de commande utiles
* Création d'un projet : ng new "NomDuProjet"
* Mise à jour de npm : npm i npm
* Création d'un composant : ng g component "NomDuComposant"
* Création d'un service : ng g service "NomDuService"
* Création d'un pipe : ng g pipe "NomDuPipe" (pour formater une variable. Equivalent au converter XAML)
## Généraltés
* prise en compte automatique des modifications
* attention, entre angular 2/4 et angular 6, le fonctionnement de rxjs a changé
* constructor(private http: HttpClient) : déclare la variable http en privée
* Gestion des boucles
    <!-- <div *ngFor="let job of jobs">
        <label>Title : {{job.title}}</label>
    <div> -->
    Entourer value avec [] si la valeur à droite du = est une variable et pas une constante =>  <option *ngFor="let c of contractTypes" [value]="c.value">{{c.name}}</option>
* radio => input avec type="radio"
* <label [for]='"btn-" + a.value'>{{a.value}}</label> : pour créer un libellé associé à un contrôle généré dynamiquement
## ReactiveFormsModule
* pour créer des pages où le modèle prédomine sur le template => la page restera syncrhonisée
* FormControlName="XXX" : bind le contrôle à la propriété XXX
* FormGroup, Validator, ... 
* Pour réinitialiser tous les champs d'un formulaire, formGroup.reset()

#RxJS
* Observable : permet d'écouter un objet        => import { Observable } from 'rxjs';
    => attention à bien appeler subscribe sinon rien ne se passera
* Subject = permet d'informer les obversers     => import { Subject } from 'rxjs';
* tap : fonction permettant d'effectuer un traitement avant/après une autre. Couramment utilisée pour les logs

#Routage
* RouterModule permet de gérer le routage vers les composants en fonction de l'url saisie. Tout se passe côté client !!!

#A regarder !!!
* Object or array destructuring. Permet de récupérer les éléments d'un objet ou d'un tableau pour en reconstruire un nouveau. Possibilité de rajouter une nouvelle valeur. Ex : this.jobs = [newValue, ...this.jobs]. Les ... correspondent à la notion de destructuring array.


# Bootstrap 
* cdn à cette url : https://www.bootstrapcdn.com/


#Configuration
* npm install -g nodemon installe le serveur de façon global => si on reprend le projet sur un autre poste, il faut penser
  à le réinstaller sinon bah le serveur ne fonctionne pas.










# Jsjobs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.0-rc.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
