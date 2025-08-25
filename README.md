# Dino_Game 🦕

Le jeu de dinosaures le plus effrayant du monde ! Une reproduction fidèle du célèbre jeu T-Rex de Google Chrome, développée en HTML, CSS et JavaScript.

## 📖 Description

Dino_Game est une implémentation web du jeu emblématique de dinosaure qui apparaît dans Google Chrome lorsque vous n'avez pas de connexion Internet. Contrôlez un T-Rex pixelisé qui court à travers un désert parsemé de cactus. Le but est simple : évitez les obstacles en sautant par-dessus pour survivre le plus longtemps possible !

### 🎮 Fonctionnalités

- **Gameplay classique** : Course infinie avec obstacles à éviter
- **Contrôles simples** : Saut activé par n'importe quelle touche du clavier
- **Support mobile** : Contrôles tactiles optimisés pour smartphones et tablettes
- **Animations fluides** : Animations CSS pour le saut du dinosaure et le défilement des cactus
- **Détection de collision** : Système de collision précis entre le T-Rex et les obstacles
- **Mode paysage mobile** : Détection automatique de l'orientation pour une meilleure expérience

### 🕹️ Contrôles

- **Desktop** : Appuyez sur n'importe quelle touche pour faire sauter le dinosaure
- **Mobile** : Touchez l'écran pour faire sauter le dinosaure
- **Orientation** : Sur mobile, le jeu recommande automatiquement le mode paysage

## 🚀 Installation et Utilisation

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Aucune installation supplémentaire requise

### Lancement du jeu

1. **Méthode simple** : Ouvrez directement le fichier `index.html` dans votre navigateur

2. **Méthode serveur local** (recommandée) :
   ```bash
   # Avec Python 3
   python3 -m http.server 8080
   
   # Avec Node.js (si vous avez http-server installé)
   npx http-server -p 8080
   
   # Puis ouvrez http://localhost:8080 dans votre navigateur
   ```

## 🛠️ Structure du Projet

```
Dino_Game/
├── index.html      # Structure HTML principale
├── styles.css      # Styles et animations CSS
├── script.js       # Logique de jeu JavaScript
├── t-rex.png       # Sprite du dinosaure T-Rex
├── cactus.png      # Sprite du cactus (obstacle)
└── README.md       # Documentation du projet
```

## 💻 Détails Techniques

### Technologies Utilisées
- **HTML5** : Structure sémantique du jeu
- **CSS3** : Animations keyframes, positionnement relatif
- **JavaScript (Vanilla)** : Logique de jeu, détection d'événements, collision

### Implémentation Technique

- **Animation du saut** : Animation CSS de 300ms avec courbe personnalisée
- **Défilement des obstacles** : Animation infinie de 1.2s pour simuler le mouvement
- **Détection de collision** : Calcul en temps réel des positions via `getComputedStyle()`
- **Responsive Design** : Adaptation automatique pour les appareils mobiles
- **Boucle de jeu** : Vérification des collisions toutes les 10ms avec `setInterval()`

### Dimensions du Jeu
- **Zone de jeu** : 600px × 200px
- **Dinosaure** : 70px × 70px
- **Cactus** : 20px × 40px

## 🎯 Comment Jouer

1. Lancez le jeu en ouvrant `index.html`
2. Le dinosaure T-Rex commence à courir automatiquement
3. Les cactus défilent de droite à gauche
4. Appuyez sur n'importe quelle touche (ou touchez l'écran sur mobile) pour faire sauter le dinosaure
5. Évitez de toucher les cactus pour continuer à jouer
6. En cas de collision, le jeu affiche "PERDUUUUUUUUUUU :(" et redémarre automatiquement

## 📱 Support Mobile

Le jeu détecte automatiquement si vous utilisez un appareil mobile et :
- Active les contrôles tactiles
- Recommande l'orientation paysage pour une meilleure expérience
- Adapte l'interface utilisateur en conséquence

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer de nouvelles fonctionnalités
- Améliorer le code existant
- Optimiser les performances

## 📄 Licence

Ce projet est un projet éducatif open source. Vous êtes libre de l'utiliser, le modifier et le distribuer.

---

Amusez-vous bien avec ce jeu nostalgique ! 🦖✨
