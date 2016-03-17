function gatherSequence(get) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
          get(xmlHttp.responseText)
  }
  xmlHttp.open("GET", "http://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=nuccore&id=CP000962&rettype=fasta&retmode=text", true)
  xmlHttp.send(null)
}
