<script>
    const targetDiv = document.getElementById("first");
    const btn = document.getElementById("toggle");

    btn.onclick = function() {
      if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
      } else {
        targetDiv.style.display = "block";
      }
    };
</script>

<div id="first" class="fixed-bottom container-fluid cookie-banner p-3">
    Mit der Verwendung unserer Webseite erklären Sie sich mit den Datenschutzbedingungen einverstanden. <a href="datenschutz.html">Mehr erfahren</a>
    <button id="toggle">Einverstanden</button>
</div>