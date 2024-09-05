function TapisJeu(jetonsP1, jetonsP2, miseP1, miseP2, pot, blind){
	var mainDiv = document.createElement('div');
	mainDiv.id = "divPlateau"
	mainDiv.style.bottom = "25px";
	document.body.appendChild(mainDiv);

	var turnedCard = document.createElement('div');
	turnedCard.className = "cardsPlateauVert";
	turnedCard.id = "cardPlateau";
	turnedCard.style.left = "30%";
	turnedCard.style.backgroundPosition = "0px -252px";
	mainDiv.appendChild(turnedCard);	

	var divPot = document.createElement('div');
	divPot.id = "divPot";
	var h2DivPot1 = document.createElement('h2');
	h2DivPot1.innerHTML = "Pot :";
	this.h2DivPot2 = document.createElement('h2');
	this.h2DivPot2.innerHTML = ""+pot+"";
	divPot.appendChild(h2DivPot1);
	divPot.appendChild(this.h2DivPot2);
	mainDiv.appendChild(divPot);

	var divJetonsP1 = document.createElement('div');
	divJetonsP1.className = "divJetons";
	divJetonsP1.id = "jetonsP1";
	var h2JetonsP11 = document.createElement('h2');
	h2JetonsP11.innerHTML = "Jetons :";
	this.h2JetonsP12 = document.createElement('h2');
	this.h2JetonsP12.innerHTML = ""+jetonsP1+"";
	divJetonsP1.appendChild(h2JetonsP11);
	divJetonsP1.appendChild(this.h2JetonsP12);
	mainDiv.appendChild(divJetonsP1);

	var divMiseP1 = document.createElement('div');
	divMiseP1.className = "divJetons";
	divMiseP1.style.bottom = "5%";
	divMiseP1.style.left = "30%";
	var h2MiseP11 = document.createElement('h2');
	h2MiseP11.innerHTML = "Mise :";
	this.h2MiseP12 = document.createElement('h2');
	this.h2MiseP12.innerHTML = ""+miseP1+"";
	divMiseP1.appendChild(h2MiseP11);
	divMiseP1.appendChild(this.h2MiseP12);
	mainDiv.appendChild(divMiseP1);

	var divJetonsP2 = document.createElement('div');
	divJetonsP2.className = "divJetons";
	divJetonsP2.style.top = "0";
	divJetonsP2.style.right = "20%";
	var h2JetonsP21 = document.createElement('h2');
	h2JetonsP21.innerHTML = "Jetons :";
	this.h2JetonsP22 = document.createElement('h2');
	this.h2JetonsP22.innerHTML = ""+jetonsP2+"";
	divJetonsP2.appendChild(h2JetonsP21);
	divJetonsP2.appendChild(this.h2JetonsP22);
	mainDiv.appendChild(divJetonsP2);

	var divMiseP2 = document.createElement('div');
	divMiseP2.className = "divJetons";
	divMiseP2.style.top = "0";
	divMiseP2.style.right = "30%";
	var h2MiseP21 = document.createElement('h2');
	h2MiseP21.innerHTML = "Mise :";
	this.h2MiseP22 = document.createElement('h2');
	this.h2MiseP22.innerHTML = ""+miseP2+"";
	divMiseP2.appendChild(h2MiseP21);
	divMiseP2.appendChild(this.h2MiseP22);
	mainDiv.appendChild(divMiseP2);

	this.divDealer = document.createElement('div');
	this.divDealer.className = "divDBS";
	this.divDealer.innerHTML = "D";
	this.divDealer.style.top = "85%";
	this.divDealer.style.left = "57%";
	mainDiv.appendChild(this.divDealer);

	this.divBigBlind = document.createElement('div');
	this.divBigBlind.className = "divDBS";
	this.divBigBlind.innerHTML = "BB";
	this.divBigBlind.style.top = "85%";
	this.divBigBlind.style.left = "55%";
	mainDiv.appendChild(this.divBigBlind);

	this.divSmallBlind = document.createElement('div');
	this.divSmallBlind.className = "divDBS";
	this.divSmallBlind.innerHTML = "SB";
	this.divSmallBlind.style.top = "10%";
	this.divSmallBlind.style.left = "55%";
	mainDiv.appendChild(this.divSmallBlind);

	var tableCRF = document.createElement('table');
	tableCRF.id = "tableCRF";
	tableCRF.style.textAlign = "center";
	mainDiv.appendChild(tableCRF);

		var tr1TableCRF = document.createElement('tr');
		tableCRF.appendChild(tr1TableCRF);

			var td1Tr1TableCRF = document.createElement('td');
			tr1TableCRF.appendChild(td1Tr1TableCRF);
				this.input1Td1Tr1TableCRF = document.createElement('input');
				this.input1Td1Tr1TableCRF.className = "inputCheck";
				this.input1Td1Tr1TableCRF.type = "button";
				this.input1Td1Tr1TableCRF.style.cursor = "pointer";
				this.input1Td1Tr1TableCRF.value = "Passer";
				td1Tr1TableCRF.appendChild(this.input1Td1Tr1TableCRF);

			var td3Tr1TableCRF = document.createElement('td');
			tr1TableCRF.appendChild(td3Tr1TableCRF);
				this.input3Td3Tr1TableCRF = document.createElement('input');
				this.input3Td3Tr1TableCRF.className = "inputCheck";
				this.input3Td3Tr1TableCRF.type = "button";
				this.input3Td3Tr1TableCRF.style.cursor = "pointer";
				this.input3Td3Tr1TableCRF.value = "Se coucher";
				td3Tr1TableCRF.appendChild(this.input3Td3Tr1TableCRF);
			
			var td4Tr1TableCRF = document.createElement('td');
			tr1TableCRF.appendChild(td4Tr1TableCRF);
				this.input4Td4Tr1TableCRF = document.createElement('input');
				this.input4Td4Tr1TableCRF.className = "inputCheck";
				this.input4Td4Tr1TableCRF.type = "button";
				this.input4Td4Tr1TableCRF.style.cursor = "pointer";
				this.input4Td4Tr1TableCRF.value = "Suivre";
				td4Tr1TableCRF.appendChild(this.input4Td4Tr1TableCRF);

		var tr2TableCRF = document.createElement('tr');
		tableCRF.appendChild(tr2TableCRF);
			var td1Tr2TableCRF = document.createElement('td');
			td1Tr2TableCRF.colSpan = "2";
			tr2TableCRF.appendChild(td1Tr2TableCRF);
				this.divRaiseBar = document.createElement('input');
				this.divRaiseBar.setAttribute = ("type", "number");
				this.divRaiseBar.min = blind;
				this.divRaiseBar.max = jetonsP1;
				this.divRaiseBar.value = blind;
				this.divRaiseBar.style.textAlign = "center";
				this.divRaiseBar.className = "inputCheck";
				td1Tr2TableCRF.appendChild(this.divRaiseBar);

			var td2Tr2TableCRF = document.createElement('td');
			tr2TableCRF.appendChild(td2Tr2TableCRF);
				this.inputConfirm = document.createElement('input');
				this.inputConfirm.className = "inputCheck";
				this.inputConfirm.id = "inputConfirm";
				this.inputConfirm.type = "button";
				this.inputConfirm.style.cursor = "pointer";
				this.inputConfirm.value = "Miser";
				td2Tr2TableCRF.appendChild(this.inputConfirm);

	this.end = function(){
		//affichage bouton prochaine manche
		this.divEnd = document.createElement('div');
		this.divEnd.id = "divEnd";
		mainDiv.appendChild(this.divEnd);
			this.h2DivEnd = document.createElement('h2');
			this.divEnd.appendChild(this.h2DivEnd);
			this.inputDivEnd = document.createElement('input');
			this.inputDivEnd.className = "inputCheck";
			this.inputDivEnd.type = "button";
			this.inputDivEnd.style.cursor = "pointer";
			this.inputDivEnd.value = "Prochaine manche";
			this.divEnd.appendChild(this.inputDivEnd);

		// Congelation du formulaire des jetons
		this.inputConfirm.disabled = true;
		this.inputConfirm.style.cursor = "default";
		this.input1Td1Tr1TableCRF.disabled = true;
		this.input1Td1Tr1TableCRF.style.cursor = "default";
		this.input3Td3Tr1TableCRF.disabled = true;
		this.input3Td3Tr1TableCRF.style.cursor = "default";
		this.input4Td4Tr1TableCRF.disabled = true;
		this.input4Td4Tr1TableCRF.style.cursor = "default";
		this.divRaiseBar.disabled = true;
		this.divRaiseBar.style.cursor = "default";
	};
}