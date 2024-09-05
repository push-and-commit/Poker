var Poker = function(){
	// Mélange d'un tableau
	this.shuffle = function(tab){
		for (var i = tab.length; i > 0; i--) {
			var j = Math.floor(Math.random() * i);
			var x = tab[i - 1];
			tab[i - 1] = tab[j];
			tab[j] = x;
	    }
	};

	this.createDeck = function(){
		// Création d'un jeu de cartes trié
		this.deck =  	[[0,   0],[-44,   0],[-88,   0],[-132,   0],[-176,   0],[-220,   0],[-264,   0],[-308,   0],[-352,   0],[-396,   0],[-440,   0],[-484,   0],[-528,   0],
						 [0, -63],[-44, -63],[-88, -63],[-132, -63],[-176, -63],[-220, -63],[-264, -63],[-308, -63],[-352, -63],[-396, -63],[-440, -63],[-484, -63],[-528, -63],
						 [0,-126],[-44,-126],[-88,-126],[-132,-126],[-176,-126],[-220,-126],[-264,-126],[-308,-126],[-352,-126],[-396,-126],[-440,-126],[-484,-126],[-528,-126],
						 [0,-189],[-44,-189],[-88,-189],[-132,-189],[-176,-189],[-220,-189],[-264,-189],[-308,-189],[-352,-189],[-396,-189],[-440,-189],[-484,-189],[-528,-189]];
		this.shuffle(this.deck);
	};
	this.createCard = function(top, left, bool, id){
		this.card = document.createElement('div');
		this.card.className = "cardsPlateauVert";
		this.card.id = id;
		this.nbCard = id;
		if(bool == "true"){	
			// La carte est celle du jeu de carte mélangé de la fonction "createDeck" à la position "id"	
			this.card.style.backgroundPosition = ""+this.deck[id][0]+"px "+this.deck[id][1]+"px";
		} else if(bool == "false"){
			// La carte est retournée
			this.card.style.backgroundPosition = "0px -252px";
		} else if(bool == "none"){
			// La carte n'existe pas
			this.card.style.backgroundPosition = "-44px -252px";
		}
		this.card.style.top = ""+top+"%"
		this.card.style.left = ""+left+"%";
		document.body.appendChild(this.card);
	};

	this.nbCards = 7;
	this.getTabCard = function(id){
		this.tabCard = [];
		for(var i = 0; i < id.length; i++){
			this.tabCard.push(this.deck[id[i]]);
		}
		return this.tabCard;
	};
	this.sorted = function(array){
		// tri d'une matrice en fonction du premier indice des tableaux
		var storage = [];
		for(var i = 0; i < array.length; i++){
			for(var j = i+1; j < array.length; j++){
				if(array[i][0] > array[j][0]){
					storage = array[i];
					array[i] = array[j];
					array[j] = storage;
				}
			}
		}
	};
	this.getAllPos = function(array){
		this.tab = [];
		var storage = [];
		// Balayage de la matrice "array x array"
		for(var i = 0; i < array.length; i++){
			for(var j = 0; j < array.length; j++){
				// Si on sort de la matrice
				if(i + j >= array.length){
					// Stockage de l'indice "i + j - array.length" du tableau "array" dans un tableau d'indice "storage"
					storage[j] = i + j - array.length;
				} else{
					// Stockage de l'indice i + j
					storage[j] = i + j;
				}
				// Si les indices sont suffisants
				if(j > 3 && j < array.length-1){
					// La matrice "tab" prend pour valeur le tableau "array" avec les 5 indices définis dans le storage
					sortedArray = [array[storage[0]],array[storage[1]],array[storage[2]],array[storage[3]],array[storage[j]]];
					this.sorted(sortedArray);
					this.tab.push(sortedArray);
				}
			}
		}
		return this.tab;
	};
	this.getComb = function(array){
		var valeur = 0;
		// Est-ce que plusieurs cartes ont la même valeur ?
		var cnt = 0;
		var freeze = [];
		var paire1 = [];
		var paire2 = [];
		for(var i = 0; i < array.length-1; i++){
			cnt = 0;
			if(freeze.indexOf(i) != -1){ continue; }
			for(var j = i+1; j < array.length; j++){
				// Si correspondance
				if(array[i][0] == array[j][0]){
					cnt++;
					// Geler la carte qu'on a comparé
					freeze.push(j);
				}
			}
			if(cnt > 0){
				if(paire1.length > 0){
					paire2.push(array[i][0]);
					paire2.push(cnt);
				} else{
					paire1.push(array[i][0]);
					paire1.push(cnt);
				}
			}
		}
		if(paire2.length > 0){
			if(paire1[1] == 2 || paire2[1] == 2){
				valeur = 425;
			} else{
				valeur = 325
			}
		} else if(paire1.length > 0){
			if(paire1[1] == 3){ valeur = 450;}
			if(paire1[1] == 2){ valeur = 350;}
			if(paire1[1] == 1){ valeur = 300;}
		} else{
			valeur = 275;
		}
		// Est-ce que toutes les cartes se suivent ?
		var a = array[0][0] / 44; var b = array[1][0] / 44; var c = array[2][0] / 44;
		var d = array[3][0] / 44; var e = array[4][0] / 44;
		if(a == b - 1 && b == c - 1 && c == d - 1 && d == e - 1){
			valeur = 375;
		}
		// Est-ce que toutes les cartes sont de la même couleur ?
		if(array[0][1] == array[1][1] && array[0][1] == array[2][1] && array[0][1] == array[3][1] && array[0][1] == array[4][1]){
			valeur = 400;
		}

		if(valeur == 400){
			// Est-ce que toutes les cartes se suivent jusqu'à l'as et sont de la même couleur ?
			if(a == b + 1 && b == c + 1 && c == d + 1 && d == e + 1){
				if(array[4][0] == -528){ 
					valeur = 500;
				} 
				else{ 
					valeur = 475;
				}
			}
		} 
		return valeur;
	};
	this.getBestComb = function(array){
		var storage = [];
		// Quel tableau a le plus de point ?
		for(var j = 0; j < array.length-1; j++){
			if(this.getComb(array[j]) > this.getComb(array[j+1])){
				storage = array[j+1];
				array[j+1] = array[j];
				array[j] = storage;
			}
		}
		this.getComb(array[array.length-1]);
		// Attribuer des points aux tableaux
		for(var i = 0; i < array.length; i++){
			if(this.getComb(array[i]) ==   0){ this.str = "un 3"; }
			if(this.getComb(array[i]) ==  25){ this.str = "un 4"; }
			if(this.getComb(array[i]) ==  50){ this.str = "un 5"; }
			if(this.getComb(array[i]) ==  75){ this.str = "un 6"; }
			if(this.getComb(array[i]) == 100){ this.str = "un 7"; }
			if(this.getComb(array[i]) == 125){ this.str = "un 8"; }
			if(this.getComb(array[i]) == 150){ this.str = "un 9"; }
			if(this.getComb(array[i]) == 175){ this.str = "un 10"; }
			if(this.getComb(array[i]) == 200){ this.str = "un Valet"; }
			if(this.getComb(array[i]) == 225){ this.str = "une Dame"; }
			if(this.getComb(array[i]) == 250){ this.str = "un Roi"; }
			if(this.getComb(array[i]) == 275){ this.str = "un As"; }
			if(this.getComb(array[i]) == 300){ this.str = "une simple paire"; }
			if(this.getComb(array[i]) == 325){ this.str = "une double paire"; }
			if(this.getComb(array[i]) == 350){ this.str = "un berlan"; }
			if(this.getComb(array[i]) == 375){ this.str = "une suite"; }
			if(this.getComb(array[i]) == 400){ this.str = "une couleur"; }
			if(this.getComb(array[i]) == 425){ this.str = "un full"; }
			if(this.getComb(array[i]) == 450){ this.str = "un carré"; }
			if(this.getComb(array[i]) == 475){ this.str = "une quinte flush"; }
			if(this.getComb(array[i]) == 500){ this.str = "une quinte flush royale"; }
		}
		return this.str;
	}
	this.getRoundWinner = function(){
		var player1 = this.getBestComb(this.getAllPos(this.getTabCard([0,2,5,6,7,9,11])));
		var player2 = this.getBestComb(this.getAllPos(this.getTabCard([1,3,5,6,7,9,11])));
		if(player1 > player2){
			return "Vous avez"+player1+"";
		} else{
			return "L'adversaire a "+player2+"";;
		}
	}

	this.flop = function(){
		this.dFlop = true;
		that.nbCards = that.nbCards + 3;
	};
	this.turn = function(){
		this.dTurn = true;
		that.nbCards = that.nbCards + 1;
	};
	this.river = function(){
		this.dRiver = true;
		that.nbCards = that.nbCards + 1;
	};

	this.manche = function(jetons){
		this.dFlop = 'none';
		this.dTurn = 'none';
		this.dRiver = 'none';
		this.dRiverP2 = 'false';
		this.check = 0;
		this.createDeck();
		this.createCard(86.5, 47, "true", 0);
		this.createCard(86.5, 50, "true", 2);
		this.createCard(3.9, 47, ""+this.dRiverP2+"");
		this.createCard(3.9, 50, ""+this.dRiverP2+"");
	};

	this.end = function(){
		//affichage des cartes adversaire
		this.dRiverP2 = 'none';
		this.createCard(3.9, 47, "true", 1);
		this.createCard(3.9, 50, "true", 3);
	};
}