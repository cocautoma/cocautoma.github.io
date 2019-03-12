var flipSide = 'front';
var rotate = 0;
var currentActions = [];
var mainActionChosen = false;
var maxShippingMerchants = '';
var currentMove = '';

$(document).ready(function(){

    var flipTemplate = [
            '<div class="flip-card flip-back gameInfoHide">',
                '<div class="flip-card-inner">',
                    '<div class="flip-card-front">',
                        '<div id="frontCardPic" class="cardPic gameInfoReset"></div>',
                    '</div>',
                    '<div class="flip-card-back">',
                        '<div id="backCardPic" class="cardPic gameInfoReset"></div>',
                    '</div>',
                '</div>',
            '</div>',
    ].join('');

    $(flipTemplate).appendTo('#cardArea');

    var mainActionTemplate = [
        '<div class="mainAction">',
            '<div class="supportCard"></div>',
            '<div class="mainActionInstructions"></div>',
            '<div class="mainActionButtons" btns="0"></div>',
        '</div>'
    ].join('');

    $(mainActionTemplate).appendTo('#cardArea');

})

// If the cardDisplay mode is 'flip' then the below function will be called during the game

function flip(mode, thisGameSection){

    if(mode != 'savedGame') {
        $('.supportCard').html('');
        game.action.number = 0;
        game.action.currentActions = [];
        game.action.mainActionChosen = false;
        game.action.status = 'initial';
        currentMove = '';
    }

    var gameSection = JSON.parse(thisGameSection);

    // if rotate is 360 then we need to reset the rotate number to 0 so that the cards can keep flipping the same way
    if(rotate == 360) {
        // Add the '.noTransition' class so that the card doesn't animate the flip from 360deg to 0deg.
        $('.flip-card-inner').addClass('notransition');
        // Update the card's rotation value to 0deg
        $('.flip-card-inner').css('transform', 'rotateY(0deg) translate3d(0, 0, 1px)');
        // This code trigger a reflow, flushing the CSS changes (without it the card does animate the flip from 360deg to 0deg)
        $('.flip-card-inner')[0].offsetHeight; // 
        //Remove the '.noTransition' class so that future flips will be animated
        $('.flip-card-inner').removeClass('notransition');
        // Update the rotate value to 0
        rotate = 0;
    }

    // Run the below code block if the mode is 'game', or 'savedGame'
    if(mode == 'game' || mode == 'savedGame') {

        if(mode == 'savedGame' && game.moves[game.moves.length-1].includes('shuffled')) return;

        var helpLinks = [];
        var cardContent = '';
        $('.supportCard').css('display', 'none');
        game.action.maxShippingMerchants = '';

        for (let i = 0; i < deck.length; i++) {

            if (mode == 'game' && deck[i].card == game.usedCards[0] || mode == 'savedGame' && deck[i].card == game.action.mainCardNum) {

                if (mode == 'game'){
                    game.action.mainCardNum = deck[i].card;
                }
                
                if(deck[i].removeCard) {
                    deck[i].removed = true;
                }

                currentMove = '<p><span class="bold italic">Move ' + game.moveNum + ':</span>';

                for (let j = 0; j < deck[i].actions.length; j++) {

                    if(deck[i].actions.length == 1) {
                        helpLinks.push('<div class="tooltip"><img class="helpImage cardIcon helpLink helpLink-' + deck[i].actions[j].class + '" src="img/question.png" /></div>');
                    } else {
                        helpLinks.push('<li class="helpLink helpLink-' + deck[i].actions[j].class + '">' + deck[i].actions[j].desc + '</li>');
                    }

                    if(j == 0) {
                        currentMove += ' ' + deck[i].actions[j].desc;
                    } else {
                        currentMove += ' ' + game.moveSymbol + ' ' + deck[i].actions[j].desc;
                    }

                    if(mode != 'savedGame') {
                        game.action.currentActions.push(deck[i].actions[j].class);
                    }

                    cardContent += '<img src="img/icons/mainActions/' + deck[i].actions[j].class + '.png" class="mainActionIcon';

                    if(j != 0 && mode != 'savedGame' || mode == 'savedGame' && j != game.action.number) {
                        cardContent += ' inactiveIcon';
                    } 
                    
                    if(j == 0 && mode != 'savedGame') {
                        game.action.name = deck[i].actions[0].class;
                    }

                    cardContent += '" />';

                }

                currentMove += '</p>';

                cardContent += '<p class="cardNum">Card ' + deck[i].card + '</p>';

            }

        }

        if(mode != 'savedGame') {
            recordMove(currentMove, 'custom', 'add');
        }
        
        helpLinks = helpLinks.filter( onlyUnique ); // returns ['a', 1, 2, '1']

        $('.flip-card').css('display', 'block');

        // Initialize the array to push all of the card information to
        var flipCardContent = [];
            // If there is helpContent, then push the question mark icon

        if (typeof helpContent !== 'undefined' && helpLinks.length > 0) {

            if(helpLinks.length == 1) {
                flipCardContent.push(helpLinks);
            } else {
                flipCardContent.push('<div class="tooltip"><img class="helpImage cardIcon" src="img/question.png" /><span class="tooltiptext"><ul>');
                for (let i = 0; i < helpLinks.length; i++) {
                    flipCardContent.push(helpLinks[i]);
                }
                flipCardContent.push('</ul></span></div>');
            }
        } else if(typeof game.customHelpInfo !== 'undefined') {
            flipCardContent.push('<div class="tooltip"><img class="helpImage cardIcon" src="img/question.png" /><span class="tooltiptext">');
            flipCardContent.push(game.customHelpInfo);
            flipCardContent.push('</span></div>');
        }

        // Finally push the actual card image into the array
        flipCardContent.push(cardContent);

        // SUPPORT CARD INFO
        supportCard(game.action.name, game.action.status);

        if(game.action.name == 'expansion' && game.action.mainActionChosen) {
            supportCardInfo('savedGame', game.action.name);
        } else if(game.action.name == 'shippingMerchant' && game.action.mainActionChosen && mode == 'savedGame') {
            shippingMerchantUpgrade('savedGame');
        } else if(game.action.name == 'shippingMerchant' && game.action.mainActionChosen) {
            shippingMerchantUpgrade('game');
        }
      
        // Target the cardPic container that matches with what currently in the 'flipSide' variable and insert the generated HTML
        $('#' + flipSide + 'CardPic').html(flipCardContent.join(''));

        // Change there's currently no HTML in both card containers, then it might be a new game or the deck may have just been shuffled.
        // In this case, rather than do any flipping, the code will simply insert the card into the box since there's no previous card image to flip FROM
        if($('#frontCardPic').html() != '' && $('#backCardPic').html() != '') rotate += 180;

        // Apply the current rotation to the card in order to activate the flipping motion.
        $('.flip-card-inner').css('transform', 'rotateY(' + rotate + 'deg) translate3d(0, 0, 1px)');      

        // Change the 'flipSide' variable to the other side ready for the next turn
        flipSide == 'front' ? flipSide = 'back' :  flipSide = 'front';

        $('.mainActionButtons .btn').each(function(){
            $(this).addClass('func-activateUndo');
        });


    } else if(mode == 'shuffle') {

        // If the mode is 'shuffle', then reset all of the existing content from the card containers ready for the next round to start
        $('.flip-card').css('display', 'none');
        $('#frontCardPic').html('');
        $('#backCardPic').html('');
        // No matter which side / rotation the code was previously at, set 'flipSide' to 'front', and 'rotate' to '360', so that the new card kicks in at a consistent side.
        flipSide = 'front';
        rotate = 360;
    }
    
    cardHeight('flip-card');
    cardHeight('cardPic');

    
    currentMove = '';
    
}

$(window).resize(function() {
    cardHeight('flip-card');
    cardHeight('cardPic');
}).resize()

function cardHeight(cardContainer) {
    setTimeout(function(){
        $('.actionCard').each(function(){
            if($(this).css('height') != 0) {
                var newHeight = parseInt($(this).css('height'));
                $('.' + cardContainer).css('height', newHeight);
            }
        })
    }, 50)
}

function supportCard(mainAction, type) {

    currentMove = '<p><span class="bold italic">Move ' + game.moveNum + ':</span> ';

    var mainActionButtons = '';

    for (let k = 0; k < mainActionsInfo.length; k++) {
        if(mainActionsInfo[k].name == mainAction) {

            currentMove += mainActionsInfo[k].desc;

            for (let x = 0; x < mainActionsInfo[k].info.length; x++) {
                if(mainActionsInfo[k].info[x].rounds.indexOf(game.round) > -1) {
                    $('.mainActionInstructions').html(mainActionsInfo[k].info[x][type].content);
                    if(typeof mainActionsInfo[k].info[x][type].buttons !== 'undefined') {
                        for (let l = 0; l < mainActionsInfo[k].info[x][type].buttons.length; l++) {
                            mainActionButtons += '<a href="#" class="btn'
                            for (let m = 0; m <  mainActionsInfo[k].info[x][type].buttons[l].classes.length; m++) {
                                mainActionButtons += ' ' + mainActionsInfo[k].info[x][type].buttons[l].classes[m];
                            }
                            mainActionButtons += '">';
                            mainActionButtons += mainActionsInfo[k].info[x][type].buttons[l].name;
                            mainActionButtons += '</a>';
                        }

                        $('.mainActionButtons').html(mainActionButtons);

                    } else {
                        $('.mainActionButtons').html('');
                    }

                    $('.mainAction .mainActionButtons').attr('btns', $(".mainAction .mainActionButtons .btn:visible").length);
                }
                
            }

        }
        
    }

    if(mainAction == 'noAction') {
        activateDraw();
    }

    currentMove += '</p>';

    recordMove(currentMove, 'custom', 'replace');
    currentMove = '';

}

function mainAction(currentAction, type) {
    // currentAction = trade, shippingMerchant, technologyUpgrade, expansion, contract
    game.action.name = currentAction;
    game.action.status = type;
    supportCard(currentAction, type);
    game.action.mainActionChosen = true;

}

function mainActionFail(currentAction) {

    game.action.mainActionChosen = false;
    game.action.status = 'initial';

    $('.supportCard').css('display', 'none');
    $('.supportCard').html('');

    if(flipSide == 'front') {
        $('#backCardPic .mainActionIcon').eq(game.action.number).addClass('inactiveIcon'); 
        $('#backCardPic .mainActionIcon').eq(game.action.number + 1).removeClass('inactiveIcon');       
    } else {
        $('#frontCardPic .mainActionIcon').eq(game.action.number).addClass('inactiveIcon');
        $('#frontCardPic .mainActionIcon').eq(game.action.number + 1).removeClass('inactiveIcon');    
    }

    game.action.number++;

    game.action.name = game.action.currentActions[game.action.number];

    if(game.action.number == game.action.currentActions.length) {
        supportCard('passing', 'initial');

        game.action.name = 'passing';

        gameButtonDisplay('draw', false);

        if(game.round < 5) {
            gameButtonDisplay('shuffle', true);
        } else if(game.round == 5) {
            gameButtonDisplay('scoring', true);
        }

        activateUndo();
        
    } else {
        supportCard(game.action.currentActions[game.action.number], 'initial');
    }

    updateGame();
}

function supportCardInfo(mode, currentAction) {

    if(sound == 'on') playAudio('draw');

    var mainActionButtonsCode = '';
    chosenCardAction = '';
    game.action.mainActionChosen = true;


    if(mode !== 'savedGame') {
        game.cardsDrawn++;

        if(game.cardsDrawn > deck.length) {
            deck = shuffle(deck);
            game.cardsDrawn = 1;
        }

        thisCard = deck[game.cardsDrawn - 1];

        while(thisCard.removed) {
            game.cardsDrawn++;

            if(game.cardsDrawn > deck.length) {
                deck = shuffle(deck);
                game.cardsDrawn = 1;
            }

            thisCard = deck[game.cardsDrawn - 1];
        }

        game.usedCards.unshift(thisCard.card);

        game.action.supportCardNum = thisCard.card;
    }


    var expandTypesContent = '';
    var supportCardInstructions = '';

    if(currentAction == 'expansion') {

        currentMove = '<p><span class="bold italic">Move ' + game.moveNum + ':</span> Expansion - ';

        if(game.round == 5) {
            currentMove += '(Map Modules: ABCD';
        } else {
            currentMove += '(Map Modules: ' + thisCard.expandModules + ', ';
        }

        currentMove += 'Neutral Meeple: ' + thisCard.expandUnit + ', ';

        if(game.round == 5) {
            currentMove += '5th Round Expand Condition: Increase max num of settlements by 1, ';
        }

        currentMove += 'Tie Breakers: ';

        expandTypesContent += '<img class="expandBackground" src="img/icons/expand/backgroundHex.png" />';

        expandTypesContent += '<div class="expandInfo expandLeftInfo">';

        expandTypesContent += '<a href="#" class="helpLink helpLink-mapModules"><img class="mapModuleImage'

        if(game.round == 5) expandTypesContent += ' inactiveIcon';
        
        expandTypesContent += '" src="img/icons/mapModules/' + thisCard.expandModules + '.png" /></a>';
        expandTypesContent += '<a href="#" class="helpLink helpLink-neutralMeeple"><img class="neutralMeepleImage" src="img/icons/neutralMeeple/' + thisCard.expandUnit + '.png" /></a>';
        expandTypesContent += '<div class="clearDiv"></div>';
        expandTypesContent += '</div>';
        expandTypesContent += '<div class="expandInfo expandRightInfo">';

        supportCardInstructions += '<p>';

        if(game.round != 5) {
            supportCardInstructions += 'Map Modules: <a href="#" class="helpLink helpLink-mapModules">' + thisCard.expandModules + '</a><br />';
        }

        supportCardInstructions += 'Neutral Meeple: <a href="#" class="helpLink helpLink-neutralMeeple">' + thisCard.expandUnit + '</a></p>';

        if(game.round == 5) {
            supportCardInstructions += '<p>In the 5th game round the automa always considers <span class="bold">all four map modules</span> and only expands if it <span class="bold">can increase its total number of connected settlements by at least 1 settlement</span>. <a href="#" class="helpLink helpLink-fifthGameRoundExpansion">Click here</a> to see the full details on 5th round expansion.</p>';
            supportCardInstructions += '<p>If tied for spots to expand, then the card tiebreakers are used:</p>';
        }

        supportCardInstructions += '<p>';

        for (let i = 0; i < thisCard.expandTypes.length; i++) {

            expandTypesContent += '<a href="#" class="helpLink helpLink-' + thisCard.expandTypes[i] + '"><img class="expandIcon';
            
            expandTypesContent += '" src="img/icons/expand/' + thisCard.expandTypes[i] + '.png" /></a>';

            supportCardInstructions += 'Tie breaker ' + (i + 1) + ': <a href="#" class="helpLink helpLink-' + thisCard.expandTypes[i] + '"> ';

            for (let j = 0; j < expandTiebreakerInfo.length; j++) {
                if(expandTiebreakerInfo[j].name == thisCard.expandTypes[i]) {
                    supportCardInstructions += expandTiebreakerInfo[j].desc;
                    if(j == 0) {
                        currentMove += expandTiebreakerInfo[j].desc;
                    } else {
                        currentMove += ', ' + expandTiebreakerInfo[j].desc;
                    }
                    
                }
            }

            supportCardInstructions += '</a><br />';

        }

        supportCardInstructions += '</p>';

        supportCardInstructions += '<p class="bold">If not able to expand then automa attempts the next main action.</p>';

        expandTypesContent += '<div class="clearDiv"></div>'; 
        expandTypesContent += '</div>';
        expandTypesContent += '<div class="clearDiv"></div>';


        currentMove += ')</p>';

        if(mode !== 'savedGame') {
            recordMove(currentMove, 'custom', 'replace');
        }
        
        currentMove = '';


    } else if(currentAction == 'shippingMerchant') {

        expandTypesContent += '<img class="shippingMerchantIcon" src="img/icons/support/' + thisCard.upgrade + '.png" />'

        if(thisCard.upgrade == 'merchant') {
            supportCardInstructions += '<p style="text-align:center!important;">Hire a merchant for &pound;4.</p>';
            currentMove = '<p><span class="bold italic">Move ' + game.moveNum + ':</span> Upgrade -  Hire a Merchant</p>';
        } else if(thisCard.upgrade == 'shipping') {
            supportCardInstructions += '<p style="text-align:center!important;">Increase the shipping level by 1 step for &pound;4.</p>';
            currentMove = '<p><span class="bold italic">Move ' + game.moveNum + ':</span> Upgrade - Increase Shipping Level</p>';
        }

        for (let i = 0; i < game.roundInfo.length; i++) {
            if(game.roundInfo[i].class == thisCard.upgrade) {
               game.roundInfo[i].value[0]++;
            }
        }

        $('.mainActionButtons').html('');

        if(mode !== 'savedGame') {
            recordMove(currentMove, 'custom', 'replace');
        }
        currentMove = '';

    }

    expandTypesContent += '<p class="cardNum">Card ' + thisCard.card + '</p>';

    $('.supportCard').html(expandTypesContent);
    $('.supportCard').css('display', 'block');
    $('.mainActionInstructions').html(supportCardInstructions);


    roundInfoUpdate('draw');

    if(game.cardsDrawn > deck.length) {
        deck = shuffle(deck);
        game.cardsDrawn = 0;
    }

    updateGame();

}

function cocshippingLevel(){
	for (let i = 0; i < game.roundInfo.length; i++) {
		if(game.roundInfo[i].name == 'Shipping Level') {
			game.roundInfo[i].value[0]++;
		}
	}
	roundInfoUpdate('draw');
}

function cocmerchants(){
	for (let i = 0; i < game.roundInfo.length; i++) {
		if(game.roundInfo[i].name == 'Merchants') {
			game.roundInfo[i].value[0]++;
		}
	}
	roundInfoUpdate('draw');
}

function shippingMerchantUpgrade(mode) {
	var merchants;
    var shipping; 
    

	for (let i = 0; i < game.roundInfo.length; i++) {
		if(game.roundInfo[i].name == 'Merchants') {
			merchants = game.roundInfo[i].value[0];
		} else if(game.roundInfo[i].name == 'Shipping Level') {
			shipping = game.roundInfo[i].value[0];
		}
	}

	if(merchants == 7 & shipping != 5) {
        mainAction('shippingMerchant', 'successShipping')
        if(mode != 'savedGame'){
            for (let i = 0; i < game.roundInfo.length; i++) {
                if(game.roundInfo[i].name == 'Shipping Level') {
                    game.roundInfo[i].value[0]++;
                }
            }
        }
        game.action.maxShippingMerchants = 'shipping';
        currentMove = '<p><span class="bold italic">Move ' + game.moveNum + ':</span> Upgrade - Increase Shipping Level</p>';
        if(mode != 'savedGame'){
            recordMove(currentMove, 'custom', 'replace');
        }
	} else if(shipping == 5 && merchants != 7 ) {
        mainAction('shippingMerchant', 'successMerchant')
        if(mode != 'savedGame'){
            for (let i = 0; i < game.roundInfo.length; i++) {
                if(game.roundInfo[i].name == 'Merchants') {
                    game.roundInfo[i].value[0]++;
                }
            }
        }
        game.action.maxShippingMerchants = 'merchant';
        currentMove = '<p><span class="bold italic">Move ' + game.moveNum + ':</span> Upgrade - Hire a Merchant</p>';
        if(mode != 'savedGame'){
            recordMove(currentMove, 'custom', 'replace');
        }
	} else if(shipping != 5 && merchants != 7 ) {
        game.action.maxShippingMerchants = '';
		supportCardInfo('game', 'shippingMerchant');
	} else {
        game.action.maxShippingMerchants = '';
		mainAction('shippingMerchant', 'failShippingMerchant')
	}

    activateDraw();
    roundInfoUpdate('draw');

    currentMove = '';

}

$(document).on(touchEvent, '.activate-shuffleDeck-game', function() {
    // showHelpInfo(helpGameSetup) etc
    $('.mainActionButtons').html('');
    $('.mainActionInstructions').html('');
    $('.supportCard').html('');
    $('.supportCard').css('display', 'none');
});

function activateUndo() {
    buttonClasses('undo', 'add', ['blueBtn', 'func-undoAction', 'func-disableDraw'])
	buttonClasses('undo', 'remove', ['greyBtn'])
}

function deactivateUndo() {
    buttonClasses('undo', 'add', ['greyBtn'])
	buttonClasses('undo', 'remove', ['blueBtn', 'func-undoAction', 'func-disableDraw'])
}

function undoAction() {

    if(game.action.number == game.action.currentActions.length) {

        gameButtonDisplay('draw', true);
        
        if(game.round < 5) {
            gameButtonDisplay('shuffle', false);
        } else if(game.round == 5) {
            gameButtonDisplay('scoring', false);
        }

        disableDraw();
        activateUndo();
        
    }

    $('.supportCard').css('display', 'none');
    $('.supportCard').html('');


	if(game.action.mainActionChosen) {
        game.action.mainActionChosen = false;
        game.action.status = 'initial';
        supportCard(game.action.currentActions[game.action.number], 'initial');

        if(game.action.currentActions[game.action.number] == 'shippingMerchant') {

            for (let i = 0; i < game.roundInfo.length; i++) {

                if(game.action.maxShippingMerchants != '') {
                    if(game.roundInfo[i].class == maxShippingMerchants) {
                        game.roundInfo[i].value[0]--;
                     }
                     game.action.maxShippingMerchants = '';
                } else {
                    if(game.roundInfo[i].class == thisCard.upgrade) {
                        game.roundInfo[i].value[0]--;
                     }
                }

            }

            roundInfoUpdate('draw');
        }

    } else {

        if(flipSide == 'front') {
            $('#backCardPic .mainActionIcon').eq(game.action.number).addClass('inactiveIcon'); 
            $('#backCardPic .mainActionIcon').eq(game.action.number - 1).removeClass('inactiveIcon');       
        } else {
            $('#frontCardPic .mainActionIcon').eq(game.action.number).addClass('inactiveIcon');
            $('#frontCardPic .mainActionIcon').eq(game.action.number - 1).removeClass('inactiveIcon');    
        }

        game.action.number--;
        supportCard(game.action.currentActions[game.action.number], 'initial');
        game.action.name = game.action.currentActions[game.action.number];

    }

    if(game.action.number == 0) {
        deactivateUndo();

        $('.mainActionButtons .btn').each(function(){
            $(this).addClass('func-activateUndo');
        });

    }
}