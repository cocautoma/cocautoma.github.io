var cards = {

	round1: [
		{
			card: '1',
			totalActions: 4,
			actions: [
				{
					desc: 'Technology Upgrade',
					class: 'technologyUpgrade'
				},
				{
					desc: 'Expansion',
					class: 'expansion'
				},
				{
					desc: 'Fulfill / Take a Contract',
					class: 'contract'
				},
				{
					desc: 'Trade',
					class: 'trade'
				}
			],
			expandModules: 'AB',
			expandTypes: ['port', 'minCosts', 'maxSettlements', 'neighborhoodBonus'],
			expandUnit: '+1',
			upgrade: 'merchant',
			removeCard: false,
			removed: false
		},
		{
			card: '2',
			totalActions: 4,
			actions: [
				{
					desc: 'Technology Upgrade',
					class: 'technologyUpgrade'
				},
				{
					desc: 'Expansion',
					class: 'expansion'
				},
				{
					desc: 'Fulfill / Take a Contract',
					class: 'contract'
				},
				{
					desc: 'Trade',
					class: 'trade'
				}
			],
			expandModules: 'CD',
			expandTypes: ['port', 'minCosts', 'maxSettlements', 'neighborhoodBonus'],
			expandUnit: '+2',
			upgrade: 'merchant',
			removeCard: false,
			removed: false
		},
		{
			card: '3',
			totalActions: 3,
			actions: [
				{
					desc: 'Trade',
					class: 'trade'
				},
				{
					desc: 'Fulfill / Take a Contract',
					class: 'contract'
				},
				{
					desc: 'Expansion',
					class: 'expansion'
				}
			],
			expandModules: 'AD',
			expandTypes: ['minCosts', 'port', 'maxSettlements', 'neighborhoodBonus'],
			expandUnit: '+3',
			upgrade: 'merchant',
			removeCard: false,
			removed: false
		},
		{
			card: '4',
			totalActions: 3,
			actions: [
				{
					desc: 'Trade',
					class: 'trade'
				},
				{
					desc: 'Fulfill / Take a Contract',
					class: 'contract'
				},
				{
					desc: 'Expansion',
					class: 'expansion'
				}
			],
			expandModules: 'BC',
			expandTypes: ['minCosts', 'port', 'maxSettlements', 'neighborhoodBonus'],
			expandUnit: '+4',
			upgrade: 'merchant',
			removeCard: false,
			removed: false
		},
		{
			card: '5',
			totalActions: 4,
			actions: [
				{
					desc: 'Technology Upgrade',
					class: 'technologyUpgrade'
				},
				{
					desc: 'Expansion',
					class: 'expansion'
				},
				{
					desc: 'Fulfill / Take a Contract',
					class: 'contract'
				},
				{
					desc: 'Trade',
					class: 'trade'
				}
			],
			expandModules: 'AC',
			expandTypes: ['port', 'minCosts', 'maxSettlements', 'neighborhoodBonus'],
			expandUnit: '+5',
			upgrade: 'merchant',
			removeCard: false,
			removed: false
		},
		{
			card: '6',
			totalActions: 4,
			actions: [
				{
					desc: 'Technology Upgrade',
					class: 'technologyUpgrade'
				},
				{
					desc: 'Expansion',
					class: 'expansion'
				},
				{
					desc: 'Fulfill / Take a Contract',
					class: 'contract'
				},
				{
					desc: 'Trade',
					class: 'trade'
				}
			],
			expandModules: 'BD',
			expandTypes: ['port', 'minCosts', 'maxSettlements', 'neighborhoodBonus'],
			expandUnit: '+6',
			upgrade: 'merchant',
			removeCard: false,
			removed: false
		},
		{
			card: '7',
			totalActions: 3,
			actions: [
				{
					desc: 'Upgrade shipping / Hire merchant',
					class: 'shippingMerchant'
				},
				{
					desc: 'Fulfill / Take a Contract',
					class: 'contract'
				},
				{
					desc: 'Expansion',
					class: 'expansion'
				}
			],
			expandModules: 'ABCD',
			expandTypes: ['neighborhoodBonus', 'port', 'minCosts', 'maxSettlements'],
			expandUnit: '+7',
			upgrade: 'merchant',
			removeCard: false,
			removed: false
		},
		{
			card: '8',
			totalActions: 3,
			actions: [
				{
					desc: 'Fulfill / Take a Contract',
					class: 'contract'
				},
				{
					desc: 'Expansion',
					class: 'expansion'
				},
				{
					desc: 'Trade',
					class: 'trade'
				}
			],
			expandModules: 'AB',
			expandTypes: ['port', 'maxSettlements', 'neighborhoodBonus', 'minCosts'],
			expandUnit: '+1',
			upgrade: 'merchant',
			removeCard: false,
			removed: false
		},
		{
			card: '9',
			totalActions: 3,
			actions: [
				{
					desc: 'Fulfill / Take a Contract',
					class: 'contract'
				},
				{
					desc: 'Expansion',
					class: 'expansion'
				},
				{
					desc: 'Trade',
					class: 'trade'
				}
			],
			expandModules: 'CD',
			expandTypes: ['port', 'maxSettlements', 'neighborhoodBonus', 'minCosts'],
			expandUnit: '+2',
			upgrade: 'shipping',
			removeCard: false,
			removed: false
		},
		{
			card: '10',
			totalActions: 1,
			actions: [
				{
					desc: 'No action',
					class: 'noAction'
				}
			],
			expandModules: 'AD',
			expandTypes: ['port', 'maxSettlements', 'minCosts', 'neighborhoodBonus'],
			expandUnit: '+3',
			upgrade: 'shipping',
			removeCard: true,
			removed: false
		},
		{
			card: '11',
			totalActions: 1,
			actions: [
				{
					desc: 'No action',
					class: 'noAction'
				}
			],
			expandModules: 'BC',
			expandTypes: ['port', 'maxSettlements', 'minCosts', 'neighborhoodBonus'],
			expandUnit: '+4',
			upgrade: 'shipping',
			removeCard: true,
			removed: false
		},
		{
			card: '12',
			totalActions: 1,
			actions: [
				{
					desc: 'No action',
					class: 'noAction'
				}
			],
			expandModules: 'AC',
			expandTypes: ['port', 'maxSettlements', 'neighborhoodBonus', 'minCosts'],
			expandUnit: '+5',
			upgrade: 'shipping',
			removeCard: true,
			removed: false
		},
		{
			card: '13',
			totalActions: 1,
			actions: [
				{
					desc: 'No action',
					class: 'noAction'
				}
			],
			expandModules: 'BD',
			expandTypes: ['port', 'maxSettlements', 'minCosts', 'neighborhoodBonus'],
			expandUnit: '+6',
			upgrade: 'shipping',
			removeCard: true,
			removed: false
		},
		{
			card: '14',
			totalActions: 4,
			actions: [
				{
					desc: 'Expansion',
					class: 'expansion'
				},
				{
					desc: 'Fulfill / Take a Contract',
					class: 'contract'
				},
				{
					desc: 'Upgrade shipping / Hire merchant',
					class: 'shippingMerchant'
				},
				{
					desc: 'Trade',
					class: 'trade'
				}
			],
			expandModules: 'ABCD',
			expandTypes: ['neighborhoodBonus', 'port', 'minCosts', 'maxSettlements'],
			expandUnit: '+7',
			upgrade: 'shipping',
			removeCard: false,
			removed: false
		}
	],
	round2: [
		{
			card: '15',
			totalActions: 3,
			actions: [
				{
					desc: 'Fulfill / Take a Contract',
					class: 'contract'
				},
				{
					desc: 'Expansion',
					class: 'expansion'
				},
				{
					desc: 'Trade',
					class: 'trade'
				}
			],
			expandModules: 'AC',
			expandTypes: ['port', 'maxSettlements', 'minCosts', 'neighborhoodBonus'],
			expandUnit: '+1',
			upgrade: 'merchant',
			removeCard: false,
			removed: false
		},
		{
			card: '16',
			totalActions: 3,
			actions: [
				{
					desc: 'Trade',
					class: 'trade'
				},
				{
					desc: 'Fulfill / Take a Contract',
					class: 'contract'
				},
				{
					desc: 'Expansion',
					class: 'expansion'
				}
			],
			expandModules: 'BD',
			expandTypes: ['port', 'maxSettlements', 'minCosts', 'neighborhoodBonus'],
			expandUnit: '+2',
			upgrade: 'merchant',
			removeCard: false,
			removed: false
		}
	],
	round3: [
		{
			card: '17',
			totalActions: 4,
			actions: [
				{
					desc: 'Upgrade shipping / Hire merchant',
					class: 'shippingMerchant'
				},
				{
					desc: 'Fulfill / Take a Contract',
					class: 'contract'
				},
				{
					desc: 'Expansion',
					class: 'expansion'
				},
				{
					desc: 'Trade',
					class: 'trade'
				}
			],
			expandModules: 'AD',
			expandTypes: ['minCosts', 'maxSettlements', 'port', 'neighborhoodBonus'],
			expandUnit: '+3',
			upgrade: 'merchant',
			removeCard: false,
			removed: false
		},
		{
			card: '18',
			totalActions: 1,
			actions: [
				{
					desc: 'No Action',
					class: 'noAction'
				}
			],
			expandModules: 'BC',
			expandTypes: ['minCosts', 'maxSettlements', 'port', 'neighborhoodBonus'],
			expandUnit: '+4',
			upgrade: 'shipping',
			removeCard: false,
			removed: false
		}
	],
	round4: [
		{
			card: '19',
			totalActions: 3,
			actions: [
				{
					desc: 'Fulfill / Take a Contract',
					class: 'contract'
				},
				{
					desc: 'Expansion',
					class: 'expansion'
				},
				{
					desc: 'Trade',
					class: 'trade'
				}
			],
			expandModules: 'AB',
			expandTypes: ['maxSettlements', 'minCosts', 'port', 'neighborhoodBonus'],
			expandUnit: '+5',
			upgrade: 'merchant',
			removeCard: false,
			removed: false
		},
		{
			card: '20',
			totalActions: 3,
			actions: [
				{
					desc: 'Trade',
					class: 'trade'
				},
				{
					desc: 'Fulfill / Take a Contract',
					class: 'contract'
				},
				{
					desc: 'Expansion',
					class: 'expansion'
				}
			],
			expandModules: 'CD',
			expandTypes: ['maxSettlements', 'minCosts', 'port', 'neighborhoodBonus'],
			expandUnit: '+6',
			upgrade: 'merchant',
			removeCard: false,
			removed: false
		}
	],
	round5: [
		{
			card: '21',
			totalActions: 3,
			actions: [
				{
					desc: 'Fulfill / Take a Contract',
					class: 'contract'
				},
				{
					desc: 'Expansion',
					class: 'expansion'
				},
				{
					desc: 'Trade',
					class: 'trade'
				}
			],
			expandModules: 'ABCD',
			expandTypes: ['maxSettlements', 'neighborhoodBonus', 'minCosts', 'port'],
			expandUnit: '+7',
			upgrade: 'merchant',
			removeCard: false,
			removed: false
		},
		{
			card: '22',
			totalActions: 3,
			actions: [
				{
					desc: 'Trade',
					class: 'trade'
				},
				{
					desc: 'Fulfill / Take a Contract',
					class: 'contract'
				},
				{
					desc: 'Expansion',
					class: 'expansion'
				}
			],
			expandModules: 'ABCD',
			expandTypes: ['maxSettlements', 'neighborhoodBonus', 'minCosts', 'port'],
			expandUnit: '+1',
			upgrade: 'merchant',
			removeCard: false,
			removed: false
		}
	]
}