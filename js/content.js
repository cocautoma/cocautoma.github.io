var startContent = [
    {
        name: 'Setup',
        id: 'setup',
        content: `
            <p>Prepare the export board, the map, the port tiles, the scoring tiles and the market as usual in a 2 player game.</p>

            <p>The Automa starts with:</p>

                <ul>
                    <li>2 shipping upgrades = 1-loch shipping (the Automa does not pay for it)</li>
                    <li>two merchants available as usual</li>
                    <!--li>10 glory</li-->
                    <li>No goods, no clan tile</li>
                    <li>1 meeple of neutral player color (to be placed just to the left and above the sheep column of the Automa&rsquo;s player board)</li>
                    <li>empty export tile</li>
                </ul>

            <p>The human player starts the game.</p>
        `
    },
    {
        name: 'Gameplay',
        id: 'gameplay',
        content: `

            <p>During the Automas turn, draws an Automa card. Action icons determine the action of the current turn.</p>

            <p>There are 7 actions possible: no action, trade, upgrade shipping or hire merchants, technology upgrade, expansion, contract and passing.</p>

            <p>The Automa first tries to perform the action depicted on the very left. If that is not possible, it tries to perform the second action depicted etc.</p>

            <p>If the Automa performs a contract, a technology upgrade or a trade action, it does not need a support card and simply tries to perform the respective action. If the action determined is an expansion or an upgrade, then the Automa draws a second card form the draw pile and places it on the right side of the action card.</p>

            <p>The Automa receives extra &pound;10 at the beginning of rounds 2-5 in addition to any other income it receives.</p>

            <p>In the production phase, the Automa gains money from workers as normal. From all non-worker production units they do NOT gain any basic and processed goods, though. Instead, each production capacity from non-worker units makes the Automa gain &pound;5 instead.</p><p class="italic"><span class="bold">Example:</span> A field earns &pound;10 in each production phase, since its production capacity is 2, a bakery earns &pound;5 in each production phase, no matter if the Automa has any fields or not.</p>

            <p>Most scoring tiles the Automa scores as usual. <a href="#" class="helpLink helpLink-scoringTiles">Click here </a>to see the exceptions.</p></p>

            <p>At the end of the game, the Automa gains VP as usual for glory, hops and rare import goods.</p>

            <p>The Automa does not gain any VP for basic and processed goods.</p>
            
            <p>However, the Automa gains 1 VP per 5&pound; in stock (instead of 1 VP per 10&pound;).</p>

            <p>The scorings of max. number of fulfilled contracts and max. number of connected settlements work slightly different than normal: the player who fulfilled most contracts gains 8 VP as normal but the second player gains 4 VP if the second player fulfilled exactly one contract less. If the second player fulfilled 2 or more contracts less than the other player, the second player does not gain any VP for this scoring. Likewise the 1st player gains 12 VP in the settlement scoring as normal, whereas the second player gains 6 VP if 1 or 2 connected settlements less. If the second player has 3 or more connected settlements less than the other player, the second player does not gain any VP for this scoring.</p>

        `
    }
    
    // Add any more starting information in the same syntax
      
]

var helpContent = [
    {
        name: 'Game Setup',
        id: 'gameSetup',
        classes: ['gameSetup'],
        content: `
        <p>Prepare the export board, the map, the port tiles, the scoring tiles and the market as usual in a 2 player game.</p>

        <p class="bold">Automa Card Deck Preparation</p>

        <p>At the beginning of rounds II, III, IV and V the cards with the respective numeral Roman sign are added to the Automa card deck:</p>

        <img class="fullWidth" src="img/helpImages/cardSummary.png" alt="">
        
        <p class="nonRelevant">Prepare the deck for the first round by selecting the cards that have a Roman numeral I sign in the top right corner. Shuffle these cards and place the deck face-down. Sort the other cards according to their roman sign and place them in separate face-up decks in increasing order from left to right so you can add these cards and shuffle them together with the the Automa deck in subsequent rounds. Thus, cards with a roman I sign are used in all game rounds, roman II sign means these cards are used in rounds 2-5 etc..</p>

        <p>The Automa receives extra &pound;10 at the beginning of rounds 2-5 in addition to any other income it receives: </p>

        <img class="fullWidth" src="img/helpImages/extraIncome.png" alt=""><p class="nonRelevant">Place a &pound;10 coin on each card deck of the rounds II, III, IV and V. This way you cannot forget to give the Automa this bonus when you add the card decks to the active Automa deck at the beginning of each round.</p>
        
        <p>Automa starts the game with:</p>

        <ul>
            <li>2 shipping upgrades = 1-loch shipping (the Automa does not pay for it)</li>
            <li>two merchants available as usual</li>
            <li>&pound;50-&pound;75 starting cash, depending on difficulty level chosen</li>
            <li>No goods, no clan tile</li>
            <li>1 meeple of neutral player color (neutral meeple)</li>
            <li>4 workers, one in each map module</li>
        </ul>

        <p>You choose a pair out of 2 random pairs of clan and starting goods tiles for yourself. The Automa receives a player board incl. pieces and an export tile.</p>

        <p>Place 1 worker of an inactive player color just to the left and above the sheep column of the Automa&rsquo;s player board.</p>`
    },
    {
        name: 'Initial Placements',
        id: 'initialPlacements',
        classes: ['initialPlacements'],
        content: `
            <p>The Automa deploys 4 of its workers before you deploy 2 workers.</p>

            <p>The Automa starts in map module A and throws the price die. If it shows a &ldquo;+&rdquo; it deploys on the cheapest hex with a cost of &pound;1 or &pound;2 maximum that is the closest to the central loch. If it shows a &ldquo;-&rdquo; it deploys on the cheapest hex with a cost of &pound;1 or &pound;2 maximum that is the closest to the port.</p>

            <p>This way it deploys 4 workers, one in each map module. In total it deploys 2 workers close to ports, and 2 workers close to the central loch though.</p>

            <p>So if it has deployed 2 workers close to ports already, it automatically deploys the other 2 workers close to the central loch and vice versa. The landscape on the respective hexes dictate which type of worker the Automa has to deploy there. The Automa pays for all workers and hexes as normal using their starting cash. </p>

            <p>The human player starts the game.</p>
        `
    },
    {
        name: 'Automa Turns',
        id: 'AutomaTurns',
        classes: ['AutomaTurns'],
        content: `
        <p class="nonRelevant">The Automa first draws 1 card and places it face-up on the table. The top third of this card often depicts several action icons and determines the action of this Automa&rsquo;s turn.</p>
        <p>There are 7 actions possible: no action, trade, upgrade shipping or hire merchants, technology upgrade, expansion, contract and passing. The Automa first tries to perform the action depicted on the very left. If that is not possible, it tries to perform the second action depicted etc.</p>
        <p>If the Automa performs a contract, a technology upgrade or a trade action, it does not need a support card and simply tries to perform the respective action.</p>
        <p>If the action determined is an expansion or an upgrade, then the Automa draws a second card form the draw pile and places it on the right side of the action card. The lower half of the support card shows the support information that is necessary to determine how the Automa performs the action. </p><p class="nonRelevant">If the Automa performs any depicted action of an action card (not support card!) which has this icon on the top, the Automa removes this card permanently from the game and puts it back in the game box.</p><p class="nonRelevant">If the Automa card deck is depleted before the end of a game round, simply shuffle all cards from the action and support pile together and create a new draw pile.</p>
        `,
        subsections: [
            {
                name: 'Free Action: Claim a Port Bonus',
                id: 'portBonus',
                classes: ['portBonus'],
                content: `
                <p>The Automa always claims a port bonus as soon as it reaches it, no matter if through an expand action or a shipping upgrade.</p>
                <p>When the Automa claims a port bonus, it receives &pound;10 instead of the actual port bonus.</p>
                <p>As usual, it can only use a port bonus once.</p>`
            },
            {
                name: 'I. No action: &empty;',
                id: 'noAction',
                classes: ['noAction'],
                content: `
                <p>If the action card drawn depicts &empty;, the Automa simply skips this turn and does nothing.</p>
                <p>It is then the turn of the human player.</p>`
            },
            {
                name: 'II. Trade <img src="img/icons/mainActions/trade.png" class="menuIcon" />',
                id: 'trade',
                classes: ['trade'],
                content: `<p class="bold">If available merchants</p>
                <p>The Automa will only perform this action if it has available merchants. In this case the Automa rolls the price and goods die and tries to trade a quantity up to the number determined by the die (depending on available merchants).</p>
                <p><span class="bold">Example:</span> So if the dice show +3 wool but the Automa only has 2 merchants, the Automa will adjust the price of wool by only 2 steps and place the 2 merchants on the market board. </p>
                <p>If the price is in the lower price bracket the Automa buys and the price is always increased. If the price is in the upper price bracket the Automa sells and the price is always decreased. If the price is in the medium bracket the price die determines if the Automa buys or sells: A &ldquo;+&rdquo; means the Automa buys and the price increases; a &ldquo;-&rdquo; means the Automa sells and the price decreases. The Automa never trades a type of good it already has traded in the same round (except for neighbourhood bonus). If you roll a type of good a second time, the Automa trades the next type of good it hasn&rsquo;t traded yet, to the right of the good on the market board the die shows (wool comes after whisky for that matter)</p>
                <p><span class="bold">Example:</span> Goods die shows milk but Automa already has traded milk this round. It then trades bread if it hasn&rsquo;t traded bread yet. </p>
                <p>The Automa neither possesses basic nor processed goods. Thus, it neither discards nor receives basic or processed goods. Instead, it receives 1&pound; per good traded (no matter if purchased or sold). </p>
                <p class="italic underline">Normal Trade Action: +1&pound; per good traded</p>
                <p class="bold">If no available merchants</p>
                <p>If the Automa</p>
                <ol type="a">
                    <li>has no available merchants OR</li>
                    <li>failed at trading any good despite having available merchants (extremely rare) </li>
                </ol>
                <p>the Automa tries to perform the next action depicted on the action card instead.</p>`
            },
            {
                name: 'III. Upgrade shipping or hire a merchant <img src="img/icons/mainActions/shippingMerchant.png" class="menuIcon" />',
                id: 'shippingMerchant',
                classes: ['shippingMerchant'],
                content: `
                <p>The Automa tries to perform an upgrade action if the action card drawn shows the upgrade icon, the Automa has not yet maxed out shipping and merchants and the Automa has at least 4&pound;.</p>
                <p>You then draw a support card whose support information on the very bottom of the card either shows a bowler hat (--> hire a merchant for 4&pound;) or a shipping wheel (--> increase the shipping level by 1 step for 4&pound;).</p>
                <p>If the Automa has fully upgraded shipping but has not hired all merchants yet, it automatically hires a merchant without drawing a support card (and vice versa).</p><p class="italic"><span class="bold">Example:</span> Automa attempts to upgrade shipping.</p>
                <p>If the Automa has maxed out both its shipping and hired all merchants OR if the Automa has less than 4&pound;, the Automa attempts to perform the next action icon depicted on the action card.</p>`
            },
            {
                name: 'IV. Technology Upgrade <img src="img/icons/mainActions/technologyUpgrade.png" class="menuIcon" />',
                id: 'technologyUpgrade',
                classes: ['technologyUpgrade'],
                content: `
                <p>Only if the Automa has 3+ workers of the same type deployed but not upgraded yet and the Automa has at least &pound;10, the Automa pays &pound;10 and upgrades the respective technology to make these workers more efficient.</p>
                <p>If the Automa has deployed 3 workers of both types of workers each, use a die to determine which technology to upgrade.</p>
                <p>If the Automa does not have 3+ non-upgraded workers of one type OR the Automa cannot do a technology upgrade, the Automa attempts to perform the next action icon depicted on the action card.</p>`
            },
            {
                name: 'V. Expand <img src="img/icons/mainActions/expansion.png" class="menuIcon" />',
                id: 'expansion',
                classes: ['expansion'],
                content: `
                <p>The Automa attempts to do an expand action if it has at least &pound;7. The Automa then draws a support card whose support information shows how exactly the Automa expands.</p>
                <p>Note: In the beginning you might want to follow the process described below strictly. After a bit of practice, you can shorten the process by checking on which kind of hexes the Automa cannot deploy anyway.</p>
                <p>For instance if the Automa has no woodcutters on the player board, it can&rsquo;t deploy on hexes with forest only so you can ignore such hexes.</p>`,
                subsections: [
                    {
                        name: 'Neighbourhood Bonus',
                        id: 'neighbourhoodBonusDetails',
                        classes: ['neighbourhoodBonusDetails'],
                        content: `
                        <p>When the Automa expands in neighborhood of any non-worker unit of yours and the price:</p>
                        <ul>
                        <li>is in the middle range: buys up to 2 units of the good (if available merchants)</li>
                        <li>is in the bottom range: Automa attempts to buy up to 4 units of the good (if available merchants)</li>
                        <li>is in the upper range: Automa does not buy via neighborhood.</li>
                        </ul>
                        <p class="italic underline">The Automa earns 3&pound; per good traded (irrespective of type of good)</p>
                        <p>If the Automa can buy several types of goods from neighbourhood, it may buy several types of goods but prioritizes the good whose price marker is further down. In case of a tie, the Automa considers the next priority as a tie-braker (and so on). </p>
                        <p>In contrast to a regular trade action, the Automa is allowed to buy a type of good even if it has already bought the same type of good in the current round.</p>`
                    },
                    {
                        name: 'Support card',
                        id: 'supportCard',
                        classes: ['supportCard'],
                        content: `<p class="italic"><span class="bold">Example:</span> This picture shows an example of the expansion support section of a card.</p>
                        <img src="img/helpImages/expandSupportCard.png" alt="">`
                    },
                    {
                        name: 'Map modules <img src="img/icons/mapModules/AD.png" class="menuIcon" />',
                        id: 'mapModules',
                        classes: ['mapModules'],
                        content: `
                        <p>The green areas of the rectangle icon indicate on which map modules the Automa considers to expand on. So the Automa will only expand on those map modules. <p class="italic"><span class="bold">Example:</span> This icon means the Automa expands either on map module A or D.</p>
                        <img src="img/icons/mapModules/AD.png" alt="">`
                    },
                    {
                        name: 'Expansion goal',
                        id: 'expansionGoal',
                        classes: ['expansionGoal'],
                        content: `
                        <p>Remember: the Automa employs all the normal rules pertaining to expanding within shipping reach.</p>
                        <p>The icons to the right of the map module show the order of priorities (taken from top to bottom) used to determine the hex onto which the Automa will expand.</p>
                        <img src="img/helpImages/expandSupportCardExpansionGoal.png" alt="" /><p>Taken in order, each priority serves to narrow the number of possible hexes until you reach a single hex that best meets that priority (if a priority cannot be met at all, it is skipped). If you reach the final priority with multiple choices remaining, randomly determine one of those hexes (usually by rolling the +/- die).</p>
                        <p>In the example shown, (1) determine every hex within shipping reach of an unclaimed PORT. If there is only 1, STOP &ndash; you&rsquo;ve determined the hex. If there are multiple or zero choices, then move down the priority list to (2) of those, the CHEAPEST hex (or cheapest among all hexes, if the PORT criteria must be skipped). If multiple choices still remain, then (3) of those, which hex most increases the number of SETTLEMENTS. And if necessary, (4) of those, which hex grants the best NEIGHBORHOOD bonus.</p>`
                    },
                    {
                        name: 'Max settlements <img src="img/icons/expand/maxSettlements.png" class="menuIcon" />',
                        id: 'maxSettlements',
                        classes: ['maxSettlements'],
                        content: `
                        <p>When the automa tries to maximize its settlements, it goes through these steps chronologically:</p>
                        <ol>
                        <li>It first tries to connect two so far disconnected groups of settlements with each other.</li>
                        <li>If connecting disconnected groups of settlements is not possible, the automa just tries to add a new settlement to a settlement in the quadrant it tries to expand in.</li>
                        </ol>
                        <p>If a tie-breaker is needed for any of the above attempts, then the automa just considers the next expansion priority as a tie-braker. Please note that neither 1) nor 2) might necessarily increase the total number of connected settlements, and that&rsquo;s fine.</p>`
                    },
                    {
                        name: 'Min costs <img src="img/icons/expand/minCosts.png" class="menuIcon" />',
                        id: 'minCosts',
                        classes: ['minCosts'],
                        content: `
                        <p>Find the cheapest hex of the determined map modules where the Automa can afford to deploy.</p>`
                    },
                    {
                        name: 'Max Neighborhood bonus <img src="img/icons/expand/neighborhoodBonus.png" class="menuIcon" />',
                        id: 'neighborhoodBonus',
                        classes: ['neighborhoodBonus'],
                        content: `
                        <p>The Automa expands on the hex where it earns most in total from the <a href="#" class="helpLink helpLink-neighbourhoodBonusDetails">neighborhood bonus</a> (if available merchants).</p>`
                    },
                    {
                        name: 'Port tile <img src="img/icons/expand/port.png" class="menuIcon" />',
                        id: 'port',
                        classes: ['port'],
                        content: `
                        <p>The Automa expands on a hex that gets the Automa into reach of a port tile it is not reaching yet. Automa immediately claims the port tile and gains &pound;10.</p><p class="italic"><span class="bold">Example:</span> The Automa only considers hexes on the map modules B and D. It tries to reach a port tile.</p>
                        <p>If there are several hexes that gets the Automa into reach of a port tile, it considers the first tiebreaker, namely &ldquo;min costs&rdquo; and goes for the cheapest hex that gets it into reach of a port tile.</p>
                        <p>If there are several hexes that are equally cheap and gets the Automa into reach of a port tile, it goes for the one that adds most to the number of settlements in the cluster within it expands.</p>
                        <p>If this still does not resolve all tied hexes, then it considers if neighborhood bonus would resolve tied hexes and if that is still not the case a die roll would determine the hex among the final tied ones onto which the Automa will expand on. </p>
                        <p>At the end of this process of considering the expansion goal and its tiebreakers, the Automa has determined the best hex to expand onto. If the Automa cannot expand onto this hex for any reason (no unit can be placed on this landscape, too expensive etc.), it checks if it can expand on the second best hex, etc.</p>`
                    },
                    {
                        name: 'Game Round V',
                        id: 'fifthGameRoundExpansion',
                        classes: ['fifthGameRoundExpansion'],
                        content: `
                        <p>In game round V the automa always considers all four map modules and only expands if it can increase its total number of connected settlements by at least 1 settlement.</p>
                        <p>Thus, the automa ignores the map module and expansion goal information on the support card in the game round V, but it considers the tiebreakers if needed.</p>
                        <p>Adding 1 settlement to a small cluster of settlements that is not connected to a much larger group of settlements would not help with the settlement scoring so in that case the automa would not expand but try to perform the next action icon on the action card. </p>`
                    },
                    {
                        name: 'Neutral meeple <img src="img/icons/neutralMeeple/+7.png" class="menuIcon" />',
                        id: 'neutralMeeple',
                        classes: ['neutralMeeple'],
                        content: `
                        <p>This is used as a tiebreaker only if several types of units could be deployed on the best hex that were determined through the support card (map modules & expansion goal), the Automa&rsquo;s funds and player board. </p>
                        <p>A number between 1 and 7: count the number of columns from left to right of your production units. The woodcutters & miners are considered one column. </p><p class="italic"><span class="bold">Example:</span> In the first expansion action means the Automa tries to deploy a sheep.  would mean the Automa tries to deploy a worker. Note, that while moving the neutral meeple you would skip any column whose units could not be placed due to any reason (the terrain of the best hex you determined or whose cost exceeds the Automas money reserve or whose units are all deployed already).</p><p class="italic"><span class="bold">Example:</span> If the Automa has &pound;7 only, it can only deploy a woodcutter if a 1&pound;-hex is accessible. All other type of units are too expensive. In this case the Automa deploys a woodcutter if a &pound;1-hex is available and ignores the neutral meeple.</p>
                        <p>Whatever type of unit the Automa ends up deploying, the neutral worker is placed above the respective column. So in the next expansion action you begin to count with the column to the right of the neutral worker. Consider the worker column to be left of the sheep column when counting.</p><p class="italic"><span class="bold">Example:</span> If the neutral worker was last placed above the cows,  would make the neutral worker now stop above the cheese dairies. </p>`
                    },
                    {
                        name: 'Deploying workers',
                        id: 'deployingWorkers',
                        classes: ['deployingWorkers'],
                        content: `
                        <p>If the Automa can deploy either a woodcutter or a miner on the hex determined, it goes for the more efficient worker (if only one type was upgraded). If tied again, then the Automa chooses randomly. </p>
                        <p>If there is no hex on the map modules depicted on the support card, where the Automa can afford to deploy any unit, the Automa attempts to perform the next action icon depicted on the action card. </p>`
                    }
                ]
            },
            {
                name: 'VI. Contract <img src="img/icons/mainActions/contract.png" class="menuIcon" />',
                id: 'contract',
                classes: ['contract'],
                content: `
                <p>Depending on whether the Automa already has an unfulfilled contract or not, it will EITHER fulfill a contract OR take a new contract from the export board.</p>
                <p class="bold">Fulfilling a contract</p>
                <p>The Automa simply pays &pound;5 for each wool, &pound;10 for each processed good and &pound;10 for each unit of meat to fulfill their contract. The Automa neither pays any goods nor does it slaughter to produce meat.</p>
                <p>The Automa gains money as normal but it also gains &pound;5 for each free upgrade and &pound;5 for each discounted expansion bonus on an export contract (instead of receiving the free upgrade or discounted expansion).</p>
                <p class="bold">Taking a contract</p>
                <p>The Automa receives/pays money for taking a contract as usual. The Automa draws a contract if it has no unfulfilled contract OR it fulfills its current unfulfilled contract. If the Automa draws a contract, it chooses according to the following criteria in the respective order: </p>
                <p class="bold">Rounds I. - III.: </p>
                <p>The contract requiring the least money to be fulfilled: each wool counts as &pound;5, &pound;10 for each unit of processed goods and &pound;10 for each unit of meat the contract requires (you may find it easier to sort the contracts by size so you don&rsquo;t have to recount the contract sizes). In case of a tie between 2 or more contracts, </p><ol><li>the Automa prefers the contract requiring most meat, if the meat scoring tile is out in the current or any future game round. If again 2 or more contracts are tied,</li>
                <li>the Automa prefers the contract with the highest monetary payout, taking into account that the Automa gains &pound;5 for each free upgrade and discounted expansion bonus. If again 2 or more contracts are tied, </li>
                <li>The Automa draws one of the tied contracts randomly (using the price die). </li></ol><p class="bold">Rounds IV. - V.:</p>
                <p>The Automa draws the contract that awards the currently rarest import good. However, the Automa not only looks at the rare import goods markers on the export board but it assumes the human player has fulfilled their unfulfilled contract already (if existing) in determining the rarest import good. If two or more contracts are tied, the Automa prefers</p><ol><li>the contract requiring most meat, if the meat scoring tile is out in the current or the next game round. </li>
                <li>If again 2 or more contracts are tied, the Automa prefers the contract that requires most money to be fulfilled</li>
                <li>If again tied, the Automa draws a contract randomly among the tied ones using the price die. </li></ol><p class="bold">Game round V:</p>
                <p>In the game round V the Automa only draws a contract and fulfills the contract in a single turn! Thus, the Automa only draws a contract that it can afford to take and fulfill immediately. So the Automa takes and fulfills the most attractive contract it can afford.</p><p class="italic"><span class="bold">Example:</span> a Contract requiring 3 cheese 3 wool, costs &pound;45 to fulfill. So the Automa needs &pound;60 in order to draw this contract in the last round (taking a contract costs &pound;15) and fulfill it immediately.</p>
                <p>If the Automa begins round 5 with a contract in its export box, it will not fulfill it until it draws its first contract action. When that happens, the Automa only fulfills its contract. The next time the Automa draws a contract action card, the Automa draws and fulfills a contract in one turn </p>
                <p>If the Automa can neither fulfill nor take any export contract, the Automa attempts to perform the next action icon depicted on the action card.</p>`
            },
            {
                name: 'VII. Passing',
                id: 'passing',
                classes: ['passing'],
                content: `
                <p>On each card the Automa has several action icons. </p>
                <p>If the Automa cannot/doesn&rsquo;t perform the first action, it tries to perform the second action and so on. If the Automa cannot perform any action depicted on the action card, the Automa passes and receives the passing bonus.</p>`
            }
        ]
    },
    {
        name: 'Production Phase',
        id: 'productionPhase',
        content: `
        <p>In the production phase, the Automa gains money from workers as normal. From all non-worker production units they do NOT gain any basic and processed goods, though. Instead, each production capacity from non-worker units makes the Automa gain &pound;5 instead.</p><p class="italic"><span class="bold">Example:</span> A field earns &pound;10 in each production phase, since its production capacity is 2, a bakery earns &pound;5 in each production phase, no matter if the Automa has any fields or not.</p>`
    },
    {
        name: 'Scoring tiles',
        id: 'scoringTiles',
        classes: ['scoringTiles'],
        content: `
        <p>For some scoring tiles the Automa scores in a slightly different way than normal.</p><p class="bold underline">1 Glory per Basic good:</p>
        <p>Automa scores 1 glory per sheep deployed.</p><p class="bold underline">3 glory per 2 Processed goods in stock:</p>
        <p>Automa&rsquo;s total production capacity from cows, cheese dairies, bakeries, fields and distilleries divided by 2 (round up) = amount of processed goods the Automa virtually has</p><p class="italic"><span class="bold">Example:</span> The Automa has 1 cows, 1 field (has production capacity of 2) and 4 distilleries. Production capacity = 7; 7 divided by 2 is 3.5, rounded up it is 4 virtual processed goods. So 4 virtual processed goods score 6 glory.</p>
        <p>For all other scoring tiles the Automa scores as usual.</p>`
    },
    {
        name: 'Final Scoring',
        id: 'finalScoring',
        content: `
        <p>The Automa gains VP as usual for glory, hops and rare import goods. The Automa does not gain any VP for basic and processed goods. However, the Automa gains 1 VP per &pound;5 in stock (instead of 1 VP per &pound;10).</p>
        <p>The scorings of max. number of fulfilled contracts and max. number of connected settlements work slightly different than normal: the player who fulfilled most contracts gains 8 VP as normal but the second player gains 4 VP if the second player fulfilled exactly one contract less. If the second player fulfilled 2 or more contracts less than the other player, the second player does not gain any VP for this scoring. Likewise the 1st player gains 12 VP in the settlement scoring as normal, whereas the second player gains 6 VP if 1 or 2 connected settlements less. If the second player has 3 or more connected settlements less than the other player, the second player does not gain any VP for this scoring.</p>`
    },
    {
        name: 'Credit',
        id: 'credit',
        content: `
        <p>All Automa mechanics and information credited to <a href="mailto:juma@karma-games.de?subject=Clans%20of%20Caledonia%20Automa%20Feedback" rel="noopener" target="_blank">Juma Al-JouJou</a>.</p>`
    },
    {
        name: 'Contact',
        id: 'contact',
        content: `
        <p>For any questions about the Automa, including any queries about the rules, feel free to <a href="mailto:juma@karma-games.de?subject=Clans%20of%20Caledonia%20Online%20Automa" rel="noopener" target="_blank">email Juma</a>, or send him a BGG message at <a href="https://boardgamegeek.com/user/Innovatormentor" rel="noopener" target="_blank">Innovatormentor</a> with any feedback / suggestions.</p>`
    }
]

var mainActionsInfo = [
    {
        name: 'noAction',
        desc: 'No Action',
        info: [
            {   
                rounds: [1, 2, 3, 4, 5],
                initial: {
                    content: '<p>The Automa simply skips this turn and does nothing. It is then the turn of the human player.</p>',
                    buttons: []
                }
            },
        ]
    },
    {
        name: 'trade',
        desc: 'Trade',
        info: [
            {   
                rounds: [1, 2, 3, 4, 5],
                initial: {
                    content: '<p>Does the Automa have at least one merchant to perform a trade action?</p>',
                    buttons: [
                        {
                            name: 'Yes',
                            classes: ['greenBtn', 'func-mainAction-trade+success', 'func-activateDraw'],
                            display: true
                        },
                        {
                            name: 'No',
                            classes: ['redBtn', 'func-mainActionFail-trade'],
                            display: true
                        }
                    ]
                },
                success: {
                    content: '<p>The Automa attempts to trade by rolling the price and goods die using the below calculations.</p><p>If the price is in the <span class="bold">lower price bracket</span> the Automa buys and the price is always increased.</p><p>If the price is in the <span class="bold">upper price bracket</span> the Automa sells and the price is always decreased.</p><p>If the price is in the <span class="bold">medium bracket</span> the price die determines if the Automa buys or sells: A &ldquo;+&rdquo; means the Automa buys and the price increases; a &ldquo;-&rdquo; means the Automa sells and the price decreases.</p><p class="underline">Buy / sell calculation:</p><p><span class="bold">Sale:</span> (Received Price - Baseline Price) * number of units traded<br /><span class="bold">Purchase:</span> (Baseline Price - Paid Price) * number of units traded</p><p><a href="#" class="helpLink helpLink-trade">Click here </a>to read the full help section on trading.</p><p class="italic">If the Automa failed at trading any good despite having available merchants (extremely rare) <span class="bold">the Automa tries to perform the next action depicted on the action card instead.</span></p>',
                    buttons: [
                        {
                            name: 'Next Main Action',
                            classes: ['redBtn', 'extraWideBtn', 'func-disableDraw', 'func-mainActionFail-trade', 'singleTradeBtn'],
                            display: true
                        }
                    ]
                }
            }
        ]
    },
    {
        name: 'shippingMerchant',
        desc: 'Shipping / Merchant Upgrade',
        info: [
            {   
                rounds: [1, 2, 3, 4, 5],
                initial: {
                    content: '<p>Can the Automa either upgrade shipping or hire merchants and has at least &pound;4?</p>',
                    buttons: [
                        {
                            name: 'Yes',
                            classes: ['greenBtn', 'func-shippingMerchantUpgrade'],
                            display: true
                        },
                        {
                            name: 'No',
                            classes: ['redBtn', 'func-mainActionFail-shippingMerchant'],
                            display: true
                        }
                    ]
                },
                successShipping: {
                    content: '<p>Since all of the Automa\'s merchants have been hired, pay &pound;4 to increase it\'s shipping level by 1.</p></p>'
                },
                successMerchant: {
                    content: '<p>Since the Automa\'s shipping level has been maxed out, pay &pound;4 to hire a merchant.</p>'
                },
                failShippingMerchant: {
                    content: '<p>Since the Automa\'s shipping level & merchants have been maxed out, choose the next main action.</p>',
                    buttons: [
                        {
                            name: 'Next Main Action',
                            classes: ['redBtn', 'extraWideBtn', 'func-disableDraw', 'func-mainActionFail-shippingMerchant'],
                            display: true
                        }
                    ]
                }
            }
        ]
    },
    {
        name: 'technologyUpgrade',
        desc: 'Technology Upgrade',
        info: [
            {   
                    
                rounds: [1, 2, 3, 4, 5],
                initial: {
                    content: '<p>Does the Automa have 3+ workers of the same type deployed but not upgraded yet and at least &pound;10?</p>',
                    buttons: [
                        {
                            name: 'Yes',
                            classes: ['greenBtn', 'func-mainAction-technologyUpgrade+success', 'func-activateDraw'],
                            display: true
                        },
                        {
                            name: 'No',
                            classes: ['redBtn', 'func-mainActionFail-technologyUpgrade'],
                            display: true
                        }
                    ]
                },
                success: {
                    content: '<p>The Automa pays &pound;10 and upgrades the respective technology.</p>'
                }
            }
        ]
    },
    {
        name: 'expansion',
        desc: 'Expansion',
        info: [
            {
                rounds: [1, 2, 3, 4],
                initial: {
                    content: '<p>Does the Automa have at least &pound;7 to attempt to do an expand action?</p>',
                    buttons: [
                        {
                            name: 'Yes',
                            classes: ['greenBtn', 'func-mainAction-expansion+success', 'func-supportCardInfo-game+expansion', 'func-activateDraw'],
                            display: true
                        },
                        {
                            name: 'No',
                            classes: ['redBtn', 'func-mainActionFail-expansion'],
                            display: true
                        }
                    ]
                },
                success: {
                    content: '',
                    buttons: [
                        {
                            name: 'Next Main Action',
                            classes: ['redBtn', 'extraWideBtn', 'func-disableDraw', 'func-mainActionFail-expansion'],
                            display: true
                        }
                    ]
                }
            },
            {
                rounds: [5],
                initial: {
                    content: '<p>Does the Automa have at least &pound;7 to attempt to do an expand action?</p>',
                    buttons: [
                        {
                            name: 'Yes',
                            classes: ['greenBtn', 'func-mainAction-expansion+success', 'func-supportCardInfo-game+expansion', 'func-activateDraw'],
                            display: true
                        },
                        {
                            name: 'No',
                            classes: ['redBtn', 'func-mainActionFail-expansion'],
                            display: true
                        }
                    ]
                },
                success: {
                    content: '',
                    buttons: [
                        {
                            name: 'Next Main Action',
                            classes: ['redBtn', 'extraWideBtn', 'func-disableDraw', 'func-mainActionFail-expansion'],
                            display: true
                        }
                    ]
                }
            }
        ]
    },
    {
        name: 'contract',
        desc: 'Contract',
        info: [
            {
                rounds: [1],
                initial: {
                    content: '<p>Can the Automa take a new export contract? (It receives &pound;5 for taking the contract this round as normal)</p><p>Or can the Automa fulfill an existing export contract by paying the following amounts?</p><ul><li>&pound;5: Each wool</li><li>&pound;10: Each processed good</li><li>&pound;10: Each unit of meat</li></ul>',
                    buttons: [
                        {
                            name: 'New Contract',
                            classes: ['greenBtn', 'wideBtn', 'func-mainAction-contract+newContractSuccess', 'func-activateDraw'],
                            display: true
                        },
                        {
                            name: 'Fulfill Contract',
                            classes: ['orangeBtn', 'wideBtn', 'func-mainAction-contract+fulfillContractSuccess', 'func-activateDraw'],
                            display: true
                        },
                        {
                            name: 'Neither',
                            classes: ['redBtn', 'func-mainActionFail-contract'],
                            display: true
                        }
                    ]
                },
                newContractSuccess: {
                    content: '<p>The Automa receives a new contract and &pound;5 (Round 1 bonus).</p><p>Apply the following tiebreakers in order:</p><ol><li>Costs least money</li><li>Most meat &ndash; if the meat scoring tile is current or future</li><li>Highest money payout</li><li>Random choice</li></ol><p>Value of goods on contract for Automa tie breaker:</p><ul><li>&pound;5: Each wool</li><li>&pound;10: Each processed good</li><li>&pound;10: Each unit of meat</li></ul>'
                },
                fulfillContractSuccess: {
                    content: '<p>Fulfill an existing contract by paying the following amounts:</p><ul><li>&pound;5: Each Wool</li><li>&pound;10: Each Processed good</li><li>&pound;10: Each Unit of meat</li></ul><p>The Automa gains money as normal but it also gains &pound;5 for each free upgrade and &pound;5 for each discounted expansion bonus on an export contract (instead of receiving the free upgrade or discounted expansion).</p>'
                }
            },
            {
                rounds: [2],
                initial: {
                    content: '<p>Can the Automa take a new export contract? (It doesn\'t pay anything this round as normal)</p><p>Or can the Automa fulfill an existing export contract by paying the following amounts?</p><ul><li>&pound;5: Each wool</li><li>&pound;10: Each processed good</li><li>&pound;10: Each unit of meat</li></ul>',
                    buttons: [
                        {
                            name: 'New Contract',
                            classes: ['greenBtn', 'wideBtn', 'func-mainAction-contract+newContractSuccess', 'func-activateDraw'],
                            display: true
                        },
                        {
                            name: 'Fulfill Contract',
                            classes: ['orangeBtn', 'wideBtn', 'func-mainAction-contract+fulfillContractSuccess', 'func-activateDraw'],
                            display: true
                        },
                        {
                            name: 'Neither',
                            classes: ['redBtn', 'func-mainActionFail-contract'],
                            display: true
                        }
                    ]
                },
                newContractSuccess: {
                    content: '<p>The Automa receives a new contract for free (Round 2 bonus).</p><p>Apply the following tiebreakers in order:</p><ol><li>Costs least money</li><li>Most meat &ndash; if the meat scoring tile is current or future</li><li>Highest money payout</li><li>Random choice</li></ol><p>Value of goods on contract for Automa tie breaker:</p><ul><li>&pound;5: Each wool</li><li>&pound;10: Each processed good</li><li>&pound;10: Each unit of meat</li></ul>'
                },
                fulfillContractSuccess: {
                    content: '<p>Fulfill an existing contract by paying the following amounts:</p><ul><li>&pound;5: Each Wool</li><li>&pound;10: Each Processed good</li><li>&pound;10: Each Unit of meat</li></ul><p>The Automa gains money as normal but it also gains &pound;5 for each free upgrade and &pound;5 for each discounted expansion bonus on an export contract (instead of receiving the free upgrade or discounted expansion).</p>'
                }
            },
            {
                rounds: [3],
                initial: {
                    content: '<p>Can the Automa take a new export contract? (it pays &pound;5 for taking the contract as normal)</p><p>Or can the Automa fulfill an existing export contract by paying the following amounts?</p><ul><li>&pound;5: Each wool</li><li>&pound;10: Each processed good</li><li>&pound;10: Each unit of meat</li></ul>',
                    buttons: [
                        {
                            name: 'New Contract',
                            classes: ['greenBtn', 'wideBtn', 'func-mainAction-contract+newContractSuccess', 'func-activateDraw'],
                            display: true
                        },
                        {
                            name: 'Fulfill Contract',
                            classes: ['orangeBtn', 'wideBtn', 'func-mainAction-contract+fulfillContractSuccess', 'func-activateDraw'],
                            display: true
                        },
                        {
                            name: 'Neither',
                            classes: ['redBtn', 'func-mainActionFail-contract'],
                            display: true
                        }
                    ]
                },
                newContractSuccess: {
                    content: '<p>The Automa receives a new contract and pays &pound;5 (Round 3 cost).</p><p>Apply the following tiebreakers in order:</p><ol><li>Costs least money</li><li>Most meat &ndash; if the meat scoring tile is current or future</li><li>Highest money payout</li><li>Random choice</li></ol><p>Value of goods on contract for Automa tie breaker:</p><ul><li>&pound;5: Each wool</li><li>&pound;10: Each processed good</li><li>&pound;10: Each unit of meat</li></ul>'
                },
                fulfillContractSuccess: {
                    content: '<p>Fulfill an existing contract by paying the following amounts:</p><ul><li>&pound;5: Each Wool</li><li>&pound;10: Each Processed good</li><li>&pound;10: Each Unit of meat</li></ul><p>The Automa gains money as normal but it also gains &pound;5 for each free upgrade and &pound;5 for each discounted expansion bonus on an export contract (instead of receiving the free upgrade or discounted expansion).</p>'
                }
            },
            {
                rounds: [4],
                initial: {
                    content: '<p>Can the Automa take a new export contract? (it pays &pound;10 money for taking the contract as normal)</p><p>Or can the Automa fulfill an existing export contract by paying the following amounts?</p><ul><li>&pound;5: Each wool</li><li>&pound;10: Each processed good</li><li>&pound;10: Each unit of meat</li></ul>',
                    buttons: [
                        {
                            name: 'New Contract',
                            classes: ['greenBtn', 'wideBtn', 'func-mainAction-contract+newContractSuccess', 'func-activateDraw'],
                            display: true
                        },
                        {
                            name: 'Fulfill Contract',
                            classes: ['orangeBtn', 'wideBtn', 'func-mainAction-contract+fulfillContractSuccess', 'func-activateDraw'],
                            display: true
                        },
                        {
                            name: 'Neither',
                            classes: ['redBtn', 'func-mainActionFail-contract'],
                            display: true
                        }
                    ]
                },
                newContractSuccess: {
                    content: '<p>The Automa receives a new contract and pays &pound;10 (Round 4 cost).</p><p>Apply the following tiebreakers in order:</p><ol><li>Rarest good &ndash; count human player\'s contract box as fulfilled</li><li>Most meat &ndash; if the meat scoring tile is current or future</li><li>Costs most money</li><li>Random choice</li></ol><p>Value of goods on contract for Automa tie breaker:</p><ul><li>&pound;5: Each wool</li><li>&pound;10: Each processed good</li><li>&pound;10: Each unit of meat</li></ul>'
                },
                fulfillContractSuccess: {
                    content: '<p>Fulfill an existing contract by paying the following amounts:</p><ul><li>&pound;5: Each Wool</li><li>&pound;10: Each Processed good</li><li>&pound;10: Each Unit of meat</li></ul><p>The Automa gains money as normal but it also gains &pound;5 for each free upgrade and &pound;5 for each discounted expansion bonus on an export contract (instead of receiving the free upgrade or discounted expansion).</p>'
                }
            },
            {
                rounds: [5],
                initial: {
                    content: '<p>Does the Automa have an existing contract that it\'s able to fulfill?</p><p>Or can the Automa take <span class="bold">AND</span> fulfill a new export contract? (it pays &pound;15 for taking the contract as normal and pays the following amounts to immediately fulfill it:</p><ul><li>&pound;5: Each wool</li><li>&pound;10: Each processed good</li><li>&pound;10: Each unit of meat</li></ul>',
                    buttons: [

                        {
                            name: 'Fulfill Existing Contract',
                            classes: ['greenBtn', 'wideBtn', 'func-mainAction-contract+fulfillExistingContractSuccess', 'func-activateDraw'],
                            display: true
                        },
                        {
                            name: 'Take and Fulfill New Contract',
                            classes: ['orangeBtn', 'wideBtn', 'func-mainAction-contract+takeAndFulfillContractSuccess', 'func-activateDraw'],
                            display: true
                        },
                        {
                            name: 'Neither',
                            classes: ['redBtn', 'func-mainActionFail-contract'],
                            display: true
                        }
                    ]
                },

                fulfillExistingContractSuccess: {
                    content: '<p>Fulfill an existing contract by paying the following amounts:</p><ul><li>&pound;5: Each Wool</li><li>&pound;10: Each Processed good</li><li>&pound;10: Each Unit of meat</li></ul><p>The Automa gains money as normal but it also gains &pound;5 for each free upgrade and &pound;5 for each discounted expansion bonus on an export contract (instead of receiving the free upgrade or discounted expansion).</p>'
                },
                takeAndFulfillContractSuccess: {
                    content: '<p>The Automa receives a new contract and pays &pound;15 (Round 5 cost).</p><p>Apply the following tiebreakers in order:</p><ol><li>Rarest good &ndash; count human player\'s contract box as fulfilled</li><li>Most meat &ndash; if the meat scoring tile is current or future</li><li>Costs most money</li><li>Random choice</li></ol><p>Then the Automa <span class="bold">IMMEDIATELY</span> fulfills the contract by paying the following amounts:</p><ul><li>&pound;5: Each Wool</li><li>&pound;10: Each Processed good</li><li>&pound;10: Each Unit of meat</li></ul><p>The Automa gains money as normal but it also gains &pound;5 for each free upgrade and &pound;5 for each discounted expansion bonus on an export contract (instead of receiving the free upgrade or discounted expansion).</p>'
                }
            }
        ]
    },
    {
        name: 'passing',
        desc: 'Passing',
        info: [
            {
                rounds: [1, 2, 3, 4],
                initial: {
                    content: '<p>Since the Automa cannot perform any action depicted on the action card, the Automa passes.</p>',
                }
            },
            {   
                rounds: [5],
                initial: {
                    content: '<p>Since the Automa cannot perform any action depicted on the action card, the Automa passes.</p><p>Press the scoring button to calculate the final scores.</p>',
                }
            }
        ]
    }
]

var expandTiebreakerInfo = [
    {
        name: 'port',
        desc: 'Port Bonus'
    },
    {
        name: 'minCosts',
        desc: 'Minimum Costs'
    },
    {
        name: 'maxSettlements',
        desc: 'Max Settlements'
    },
    {
        name: 'neighborhoodBonus',
        desc: 'Neighbourhood Bonus'
    }
]
