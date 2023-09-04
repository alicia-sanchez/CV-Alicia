//COMPTEUR COEUR

// Fonction pour créer ou mettre à jour le cookie
function setLikeCountCookie(value) {
    document.cookie = "likeCount=" + value + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
  }
  
  // Fonction pour récupérer la valeur du cookie
  function getLikeCountFromCookie() {
    let name = "likeCount=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieArray = decodedCookie.split(';');
    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) === 0) {
            return parseInt(cookie.substring(name.length), 10);
        }
    }
    return 0; // Valeur par défaut si le cookie n'est pas trouvé
  }
  
  // Initialisation du compteur de likes à partir du cookie
  let clickCount = getLikeCountFromCookie();
  let clickCounter = document.getElementById("click-counter");
  clickCounter.textContent = clickCount;
  
  // Gestion du clic sur l'icône du cœur
  document.getElementById("heart-icon").addEventListener("click", function() {
    clickCount++;
    clickCounter.textContent = clickCount;
    setLikeCountCookie(clickCount);
  });
  

  document.getElementById('btn-contact').addEventListener('click', function() {
    window.location.href = 'index.html#contact';
  });

  
  