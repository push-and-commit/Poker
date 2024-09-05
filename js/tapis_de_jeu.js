var TapisJeu = function(){
	this.jetons = 200;
	this.jetonsP1 = this.jetons;
	this.jetonsP2 = this.jetons;
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
	var h2DivPot2 = document.createElement('h2');
	h2DivPot2.innerHTML = ""+this.pot+"";
	divPot.appendChild(h2DivPot1);
	divPot.appendChild(h2DivPot2);
	mainDiv.appendChild(divPot);

	var divJetonsP1 = document.createElement('div');
	divJetonsP1.className = "divJetons";
	divJetonsP1.id = "jetonsP1";
	var h2JetonsP11 = document.createElement('h2');
	h2JetonsP11.innerHTML = "Jetons :";
	var h2JetonsP12 = document.createElement('h2');
	h2JetonsP12.innerHTML = ""+this.jetonsP1+"";
	divJetonsP1.appendChild(h2JetonsP11);
	divJetonsP1.appendChild(h2JetonsP12);
	mainDiv.appendChild(divJetonsP1);

	var divMiseP1 = document.createElement('div');
	divMiseP1.className = "divJetons";
	divMiseP1.style.bottom = "5%";
	divMiseP1.style.left = "30%";
	var h2MiseP11 = document.createElement('h2');
	h2MiseP11.innerHTML = "Mise :";
	var h2MiseP12 = document.createElement('h2');
	h2MiseP12.innerHTML = ""+this.miseP1+"";
	divMiseP1.appendChild(h2MiseP11);
	divMiseP1.appendChild(h2MiseP12);
	mainDiv.appendChild(divMiseP1);

	var divJetonsP2 = document.createElement('div');
	divJetonsP2.className = "divJetons";
	divJetonsP2.style.top = "0";
	divJetonsP2.style.right = "20%";
	var h2JetonsP21 = document.createElement('h2');
	h2JetonsP21.innerHTML = "Jetons :";
	var h2JetonsP22 = document.createElement('h2');
	h2JetonsP22.innerHTML = ""+this.jetonsP2+"";
	divJetonsP2.appendChild(h2JetonsP21);
	divJetonsP2.appendChild(h2JetonsP22);
	mainDiv.appendChild(divJetonsP2);

	var divMiseP1 = document.createElement('div');
	divMiseP1.className = "divJetons";
	divMiseP1.style.top = "0";
	divMiseP1.style.right = "30%";
	var h2MiseP11 = document.createElement('h2');
	h2MiseP11.innerHTML = "Mise :";
	var h2MiseP12 = document.createElement('h2');
	h2MiseP12.innerHTML = ""+this.miseP1+"";
	divMiseP1.appendChild(h2MiseP11);
	divMiseP1.appendChild(h2MiseP12);
	mainDiv.appendChild(divMiseP1);

	var divDealer = document.createElement('div');
	divDealer.className = "divDBS";
	divDealer.innerHTML = "D";
	divDealer.style.top = "85%";
	divDealer.style.left = "57%";
	mainDiv.appendChild(divDealer);

	var divBigBlind = document.createElement('div');
	divBigBlind.className = "divDBS";
	divBigBlind.innerHTML = "BB";
	divBigBlind.style.top = "85%";
	divBigBlind.style.left = "55%";
	mainDiv.appendChild(divBigBlind);

	var divSmallBlind = document.createElement('div');
	divSmallBlind.className = "divDBS";
	divSmallBlind.innerHTML = "SB";
	divSmallBlind.style.top = "10%";
	divSmallBlind.style.left = "55%";
	mainDiv.appendChild(divSmallBlind);

	var tableCRF = document.createElement('table');
	tableCRF.id = "tableCRF";
	mainDiv.appendChild(tableCRF);

		var tr1TableCRF = document.createElement('tr');
		tr1TableCRF.style.width = "100%";
		tableCRF.appendChild(tr1TableCRF);

			var td1Tr1TableCRF = document.createElement('td');
			tr1TableCRF.appendChild(td1Tr1TableCRF);
				var input1Td1Tr1TableCRF = document.createElement('input');
				input1Td1Tr1TableCRF.id = "inputCheck";
				input1Td1Tr1TableCRF.type = "button";
				input1Td1Tr1TableCRF.style.cursor = "pointer";
				input1Td1Tr1TableCRF.onclick = "check()";
				input1Td1Tr1TableCRF.innerHTML = "Passer";
				td1Tr1TableCRF.appendChild(input1Td1Tr1TableCRF);

			var td2Tr1TableCRF = document.createElement('td');
			tr1TableCRF.appendChild(td2Tr1TableCRF);
				var input2Td2Tr1TableCRF = document.createElement('input');
				input2Td2Tr1TableCRF.id = "inputCheck";
				input2Td2Tr1TableCRF.type = "button";
				input2Td2Tr1TableCRF.style.cursor = "pointer";
				input2Td2Tr1TableCRF.onclick = "raise()";
				input2Td2Tr1TableCRF.innerHTML = "Relancer";
				td2Tr1TableCRF.appendChild(input2Td2Tr1TableCRF);

			var td3Tr1TableCRF = document.createElement('td');
			tr1TableCRF.appendChild(td3Tr1TableCRF);
				var input3Td3Tr1TableCRF = document.createElement('input');
				input3Td3Tr1TableCRF.id = "inputCheck";
				input3Td3Tr1TableCRF.type = "button";
				input3Td3Tr1TableCRF.style.cursor = "pointer";
				input3Td3Tr1TableCRF.onclick = "fold()";
				input3Td3Tr1TableCRF.style.value = "Se coucher";
				td3Tr1TableCRF.appendChild(input3Td3Tr1TableCRF);
			
			var td4Tr1TableCRF = document.createElement('td');
			tr1TableCRF.appendChild(td4Tr1TableCRF);
				var input4Td4Tr1TableCRF = document.createElement('input');
				input4Td4Tr1TableCRF.id = "inputCheck";
				input4Td4Tr1TableCRF.type = "button";
				input4Td4Tr1TableCRF.style.cursor = "pointer";
				input4Td4Tr1TableCRF.onclick = "follow()";
				input4Td4Tr1TableCRF.innerHTML = "Suvire";
				td4Tr1TableCRF.appendChild(input4Td4Tr1TableCRF);

		var tr2TableCRF = document.createElement('tr');
		tableCRF.appendChild(tr2TableCRF);
			var td1Tr2TableCRF = document.createElement('td');
			td1Tr2TableCRF.colSpan = "3";
			tr2TableCRF.appendChild(td1Tr2TableCRF);
				var divRaiseBar = document.createElement('div');
				td1Tr2TableCRF.appendChild(divRaiseBar);

			var td2Tr2TableCRF = document.createElement('td');
			tr2TableCRF.appendChild(td2Tr2TableCRF);
				var inputConfirm = document.createElement('input');
				inputConfirm.id = "inputCheck";
				inputConfirm.type = "button";
				inputConfirm.style.cursor = "pointer";
				inputConfirm.onclick = "confirm()";
				inputConfirm.innerHTML = "Miser";
				td2Tr2TableCRF.appendChild(inputConfirm);
}