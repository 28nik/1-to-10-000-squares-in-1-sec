var nom = 1;
while (nom < 10001) {
  document.writeln(nom + "sq. =" + nom * nom);
  var br = document.createElement("br");
  var body = document.querySelector("body");
  body.appendChild(br);
  nom++;
}
