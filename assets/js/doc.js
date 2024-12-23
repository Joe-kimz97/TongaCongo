function donwloadCV(){
    var link = document.createElement('a');
    link.href='assets/doc/Profil_TongaCongo.pdf';
    link.download='Profil_TongaCongo.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.remove(link);
}
var button = document.querySelectorAll('.btn .hero-btn');

button.forEach(function(button){
    button.addEventListener('click',donwloadCV);
});