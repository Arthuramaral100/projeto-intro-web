let serie1 = {
  nome: "The Office",
  sinopse:
    'Esta versão americana de "The Office" é uma comédia que gira em torno do cotidiano de um escritório. Esta sátira descreve a vida dos funcionários da fábrica de papel Dunder Miffin, situada em Scranton, na Pensilvânia.',
  temps: 9,
  episodios: 201,
  producaoAtiva: false,
  elenco: [
    "Steve Carrell",
    "Rainn Wilson",
    "John Krasinski",
    "Jenna Fischer",
    "B. J. Novak",
    "Angela Kinsey",
    "Brian Baumgartner",
    "Oscar Nunez",
    "Leslie David Baker",
    "Creed Bratton",
    "Phyllis Smith",
    "MIndy Kaling",
    "Kate Flannery",
    "Paul Lieberstein",
    "Craig Robinson",
    "Ed Helms",
    "Ellie Kemper",
  ],
};

let serie2 = {
  nome: "Brooklyn 99",
  sinopse:
    "A série gira em torno de Jake Peralta (Andy Samberg), um imaturo, mas talentoso, detetive da polícia de Nova York na fictícia 99. ª Delegacia do Brooklyn, que muitas vezes entra em conflito com seu novo comandante, o sério e severo capitão Raymond Holt (Andre Braugher).",
  temps: 8,
  episodios: 153,
  producaoAtiva: false,
  elenco: [
    "Andy Samberg",
    "Melissa Fumero",
    "Stephanie Beatriz",
    "Chelsea Peretti",
    "Terry Crews",
    "Andre Braugher",
    "Joe Lo Truglio",
    "Dirk Blocker",
    "Joel McKinnon Miller",
    "Marc Evan Jackson",
    "Jason Mantzoukas",
    "Craig Robinson",
  ],
};

let serie3 = {
  nome: "The Crown",
  sinopse:
    "The Crown é uma série de TV britânica produzida para a Netflix. A história acompanha a rainha Elizabeth II e os primeiros-ministros que, juntos, deram forma à Grã-Bretanha depois da Segunda Guerra Mundial.",
  temps: 4,
  episodios: 40,
  producaoAtiva: true,
  elenco: [
    "Claire Foy",
    "Olivia Colman",
    "Matt Smith",
    "Tobias Menzies",
    "Vanessa Kirby",
    "Helena Bonham Carter",
    "Eilen Atkins",
    "Victoria Hamilton",
    "Pip Torrens",
    "John Lithgow",
    "Ben Miles",
  ],
};

let serie4 = {
  nome: "Stranger Things",
  sinopse:
    "Um grupo de amigos se envolve em uma série de eventos sobrenaturais na pacata cidade de Hawkins. Eles enfrentam criaturas monstruosas, agências secretas do governo e se aventuram em dimensões paralelas.",
  temps: 4,
  episodios: 34,
  producaoAtiva: true,
  elenco: [
    "Millie Bobby Brown",
    "Finn Wolfhard",
    "Noah Schnapp",
    "Caleb McLaughlin",
    "Sadie Sink",
    "Gaten Matarazzo",
    "Joe Keery",
    "David Harbour",
    "Natalia Dyer",
    "Winona Ryder",
    "Charlie Heaton",
    "Maya Hawke",
    "Dacre Montgomery",
    "Matthew Modine",
    "Joseph Quinn",
    "Jamie Campbell Bower",
    "Priah Ferguson",
    "Brett Gelman",
    "Paul Reiser",
    "Cara Buono",
    "Eduardo Franco",
  ],
};

let serie5 = {
  nome: "Community",
  sinopse:
    "Comédia inteligente sobre um advogado cujo diploma foi revogado e retorna para a universidade, fazendo parte de um grupo de estudo que acaba aprendendo muito mais sobre si do que fazendo sobre o trabalho do curso.",
  temps: 6,
  episodios: 110,
  producaoAtiva: false,
  elenco: [
    "Joel McHale",
    "Danny Pudi",
    "Donald Glover",
    "Alison Brie",
    "Gillian Jacobs",
    "ChevyChase",
    "Jim Rash",
    "Yvette Nicole Brown",
    "Ken Jeong",
    "Lauren Stamile",
    "John Oliver",
    "Brie Larson",
    "Paget Brewster",
    "Vince Giligan",
    "Keith David",
    "Jonathan Banks",
    "Hilary Duff",
    "Erik Charles Nielsen",
  ],
};

let serie6 = {
  nome: "Sherlock",
  sinopse:
    "Sherlock Holmes sempre foi um homem moderno, o mundo é que envelheceu. Agora ele está de volta como sempre foi: nervoso, contemporâneo, difícil e perigoso, apresentado de um jeito novo, moderno.",
  temps: 4,
  episodios: 12,
  producaoAtiva: false,
  elenco: [
    "Benedict Cumberbatch",
    "Martin Freeman",
    "Mark Gatiss",
    "Andrew Scott",
    "Louise Brealey",
    "Amanda Abbington",
    "Rupert Graves",
    "Lara Pulver",
    "Vinette Robinson",
    "Zoe Telford",
    "Jonathan Aris",
    "Lars Mikkelsen",
    "Phil Davis",
    "Siobhan Hewlett",
    "Victoria Wicks",
    "William Scott-Masson",
    "Una Stubbs",
    "Lindsay Duncan"
  ],
};
//---------------------------------------------------------------------------------------------
// Função de pesquisa no site

function encontraSerie(event) {
  event.preventDefault();
  let valorInput = document.getElementById("input").value;
  valorInput = valorInput.toLowerCase();
  let classeTotal = document.getElementsByClassName("serie");
  let contador = 0;

  for (i = 0; i < classeTotal.length; i++) {
    if (!classeTotal[i].innerHTML.toLowerCase().includes(valorInput)) {
      classeTotal[i].style.display = "none";
      contador++;
    } else {
      classeTotal[i].style.display = "flex";
    }
  }

  console.log(contador);
  const serieNaoEncontrada = document.getElementById("serie-nao-encontrada");
  if (valorInput === "") {
    alert("Campo de pesquisa vazio");
    serieNaoEncontrada.style.display = "none";
  } else if (contador === 6) {
    serieNaoEncontrada.style.display = "flex";
  }
}

//---------------------------------------------------------------------------------------------
// Função de adicionar as propriedades dos objetos do JS nas UL's do HTML

let novoArray = [serie1, serie2, serie3, serie4, serie5, serie6];
for (let ator of novoArray) {
  ator.elenco = "ELENCO: " + ator.elenco.join(", ");
  ator.temps = ator.temps + " TEMPORADAS";
  ator.episodios = ator.episodios + " EPISÓDIOS";
  if (ator.producaoAtiva) {
    ator.producaoAtiva = "SÉRIE EM PRODUÇÃO";
  } else{
    ator.producaoAtiva = "SÉRIE FINALIZADA";
  }
}

function adicionarObjetos(objeto, id) {
  for (i in objeto) {
    if (objeto[i] !== objeto.nome) {
      let serie = document.getElementById(id);
      let novoItem = document.createElement("li");
      serie.appendChild(novoItem);
      novoItem.innerHTML = objeto[i];
    }
  }
}
adicionarObjetos(serie1, "serie1");
adicionarObjetos(serie2, "serie2");
adicionarObjetos(serie3, "serie3");
adicionarObjetos(serie4, "serie4");
adicionarObjetos(serie5, "serie5");
adicionarObjetos(serie6, "serie6");

//---------------------------------------------------------------------------------------------
