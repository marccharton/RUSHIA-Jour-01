# RUSH-IA – Jour 01 : Todolist HTML/CSS/JS

Projet personnel réalisé dans le cadre du **rush "RUSH-IA" – Jour 1**, dont l’objectif est de :
- découvrir l’outil **Cursor** et le **vibe coding** ;
- prendre en main l’interface et le workflow IA ;
- produire rapidement un petit projet tout en **gardant la maîtrise de ce qu’on génère**.

Ce dépôt correspond à une **todolist très simple en HTML/CSS/JavaScript vanilla**, réalisée pour se concentrer avant tout sur l’outil.

---

## Présentation du projet

Ce projet est une **application web de liste de tâches (todolist)** minimaliste, en **pur HTML/CSS/JavaScript** :
- affichage d’une liste de tâches ;
- possibilité de **cocher/décocher** une tâche ;
- **séparation visuelle** entre tâches terminées et tâches restantes ;
- possibilité **d’ajouter une nouvelle tâche**.

Pas de base de données externe : les données sont **simulées/stockées en JSON/in‑memory** côté front, afin de garder une stack simple et facilement maîtrisable pour un premier jour de rush.

---

## Démo (capture d’écran)

Un aperçu de l’interface de la todolist :

![Capture d’écran de la todolist](img/Capture%20d%E2%80%99%C3%A9cran%202025-12-02%20165054.png)

---

## Contexte "RUSH-IA" – Jour 1

- **Type de projet** : projet perso dans le cadre d’un rush d’apprentissage.
- **Thème du jour** : découverte de Cursor et du coding assisté par IA.
- **Objectif principal** : produire une petite application fonctionnelle rapidement, sans perdre la compréhension du code.
- **Participants** : nous sommes deux à faire le rush (chacun sur un projet différent).
- **Règle du jour** : *découvrir l’outil et produire un truc rapidement en gardant la maîtrise de ce qu’on produit*.

Il n’y a **pas de roadmap** longue : ce projet est pensé comme un **exercice de Jour 1** ; d’autres projets suivront pour la suite du rush.

---

## Stack technique

- **Technos** : HTML, CSS, JavaScript (vanilla)
- **Données** : stockage **JSON simulé** (pas de BDD externe)
- **Front** : interface web simple, sans framework ni librairies UI (objectif : rester concentré sur l’outil et le code de base).

---

## Installation

Il n’y a **aucune installation complexe** :  
le projet est une simple application front en HTML/CSS/JS.

Étapes :

```bash
git clone <URL_DU_DEPOT>
cd RUSHIA-Jour-01
```

Ensuite, il suffit d’ouvrir le fichier principal (par ex. `index.html`) dans un navigateur, ou via un petit serveur statique (Live Server, `npx serve`, etc.).

---

## Lancement du projet

Pour lancer l’application :
- ouvrir directement `index.html` dans un navigateur,  
**ou**
- lancer un petit serveur statique (par exemple avec une extension Live Server ou un outil de dev local).

L’interface affichera une **todolist simple** :
- ajout de tâche via un champ dédié ;
- liste des tâches à faire ;
- liste des tâches terminées (ou séparation visuelle dans la même liste) ;
- possibilité de cocher/décocher les tâches.

---

## Structure (simplifiée)

Le projet suit une structure **web classique** :
- un fichier `index.html` comme point d’entrée ;
- un ou plusieurs fichiers CSS pour le style ;
- un ou plusieurs fichiers JavaScript pour la logique de la todolist (gestion de l’état en mémoire, JSON).

Aucune explication d’architecture complexe n’est nécessaire ici : **on reste volontairement sur quelque chose d’hyper simple et classique**.

---

## Auteurs

- **marccharton**
- **owlynn**

---

## Objectifs pédagogiques & journal de bord – Jour 1

**Objectifs du jour 1**
- Installer et configurer un projet Next.js basique.
- Découvrir et pratiquer le **workflow avec Cursor** (génération, édition, navigation).
- Mettre en place une petite todolist fonctionnelle :
  - liste de tâches ;
  - ajout de tâches ;
  - différenciation entre tâches cochées et non cochées.
- Garder une **bonne compréhension de tout le code produit**, même avec l’aide de l’IA.

**Journal de bord (résumé)**
- Mise en place du dépôt et de l’environnement Node/Next.
- Découverte de l’interface Cursor et des interactions avec l’IA.
- Création de la première version de la todolist minimaliste.
- Documentation du projet via ce `README.md`.

Ce README pourra être enrichi au fil du rush si nécessaire (captures d’écran, détails techniques supplémentaires, etc.).
