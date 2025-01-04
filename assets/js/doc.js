function downloadCV() {
    // Construire le chemin complet vers le fichier en fonction de l'URL de base
    const baseUrl = window.location.origin;
    const filePath = 'assets/doc/Profil_TongaCongo.pdf';
    const fileUrl = new URL(filePath, baseUrl).href;
  
    // Créer un lien temporaire et lancer le téléchargement
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Profil_TongaCongo.pdf';
    link.style.display = 'none'; // Cacher le lien pour une meilleure expérience utilisateur
  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  // Sélectionner le bouton par son ID (plus précis)
  const button = document.getElementById('btnDown');
  
  // Écouter l'événement click sur le bouton
  button.addEventListener('click', downloadCV);