# Repository github du projet 
    https://github.com/codeconcept

# Lignes de commande utiles
* création d'un projet : ng new "NomDuProjet"
* mise à jour de npm : npm i npm
* création d'un composant : ng g component "NomDuComposant"
* création d'un composant : ng g service "NomDuService"

# Fichiers de configuration
    * Package.json
        * contient notamment (dans la section scrits) les différentes commandes possibles (ng, start, build, ...) => npm start sera équivalent à ng serve
    * Angular.json
        * possibilité de modifier le prefixe des composants (via le tag prefix)
    => on pourra déclarer un composant comme suit : <sbcomponents-customerList></sbcomponents-customerList>
        * Ajout de répertoires où l'application pourra aller récupérer des données (section assets) et récupération via http.get()

#Généralités
    * Angular 
        * prise en compte automatique des modifications
        * attention, entre angular 4 et angular 6, le fonctionnement de rxjs a changé
        * constructor(private http: HttpClient) : déclare la variable http en privée
        * <div *ngFor="let job of jobs">
            <label>Title : {{job.title}}</label>
          </div>
        * ReactiveFormsModule : 
            * pour générer des pages de façon dynamique
            * FormControlName="XXX" : bind le contrôle à la propriété XXX
            * 

    * Bootstrap 
        * cdn à cette url : https://www.bootstrapcdn.com/







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
