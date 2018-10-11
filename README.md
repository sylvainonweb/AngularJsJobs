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
##Boutons
* <button type="button" (click)="returnToJobs()" => pour appeler une méthode du composant (autre que submit)

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


#Extensions
tslint : tslint.autofixonsave=true dans User Settings  pour corriger les erreurs tslint automatiquement

#Sécurité
* CORS : Cross Origin Resource Sharing. Par défaut, les navigateurs bloquent les appels à des web services situés dans un domaine différent (domaine, port) de celui du site visité. Pour l'autoriser, le serveur doit gérer les CORS. Ici, on utilse le middleware cors 'voir server.js)





