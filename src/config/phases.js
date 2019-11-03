const phases = [
    {
        id: 0,
        name: 'Phase 1',
        description: 'Adding 1',
        number: 1,
        colour: 'blue',
        bonds: [
            {
                x: 2,
                y: 1
            },
            {
                x: 3,
                y: 1
            },
            {
                x: 4,
                y: 1
            },
            {
                x: 5,
                y: 1
            },
            {
                x: 6,
                y: 1
            },
            {
                x: 7,
                y: 1
            },
            {
                x: 8,
                y: 1
            }
        ]
    },
    {
        id: 1,
        name: 'Phase 2',
        description: 'Doubles',
        number: 2,
        colour: 'orange',
        bonds: [
            {
                x: 1,
                y: 1
            },
            {
                x: 2,
                y: 2
            },
            {
                x: 3,
                y: 3
            },
            {
                x: 4,
                y: 4
            },
            {
                x: 5,
                y: 5
            }
        ]
    },
    {
        id: 2,
        name: 'Phase 3',
        description: 'Adding 2',
        number: 3,
        colour: 'salmon',
        bonds: [
            {
                x: 2,
                y: 3
            },
            {
                x: 2,
                y: 4
            },
            {
                x: 2,
                y: 5
            },
            {
                x: 2,
                y: 6
            },
            {
                x: 2,
                y: 7
            },
            {
                x: 2,
                y: 9
            }
        ]
    },
    {
        id: 3,
        name: 'Phase 4',
        description: 'Bonds to 10',
        number: 4,
        colour: 'yellow',
        bonds: [
            {
                x: 10,
                y: 0
            },
            {
                x: 9,
                y: 1
            },
            {
                x: 8,
                y: 2
            },
            {
                x: 7,
                y: 3
            },
            {
                x: 6,
                y: 4
            },
        ]
    },
    {
        id: 4,
        name: 'Phase 5',
        description: 'Doubles to 20',
        number: 5,
        colour: 'brown',
        bonds: [
            {
                x: 6,
                y: 6
            },
            {
                x: 7,
                y: 7
            },
            {
                x: 8,
                y: 8
            },
            {
                x: 9,
                y: 9
            },
            {
                x: 10,
                y: 10
            }
        ]
    },
    {
        id: 5,
        name: 'Phase 6',
        description: 'Adding 10',
        number: 6,
        colour: 'purple',
        bonds: [
            {
                x: 10,
                y: 1
            },
            {
                x: 10,
                y: 2
            },
            {
                x: 10,
                y: 3
            },
            {
                x: 10,
                y: 4
            },
            {
                x: 10,
                y: 5
            },
            {
                x: 10,
                y: 6
            },
            {
                x: 10,
                y: 7
            },
            {
                x: 10,
                y: 8
            },
            {
                x: 10,
                y: 9
            }
        ]
    },
    {
        id: 6,
        name: 'Phase 7',
        description: 'Adding 0',
        number: 7,
        colour: 'green',
        bonds: [
            {
                x: 0,
                y: 0
            },
            {
                x: 0,
                y: 1
            },
            {
                x: 0,
                y: 2
            },
            {
                x: 0,
                y: 3
            },
            {
                x: 0,
                y: 4
            },
            {
                x: 0,
                y: 5
            },
            {
                x: 0,
                y: 6
            },
            {
                x: 0,
                y: 7
            },
            {
                x: 0,
                y: 8
            },
            {
                x: 0,
                y: 9
            }
        ]
    },
    {
        id: 7,
        name: 'Phase 8',
        description: 'Near Doubles',
        number: 8,
        colour: 'grey',
        bonds: [
            {
                x: 4,
                y: 3
            },
            {
                x: 5,
                y: 4
            },
            {
                x: 6,
                y: 5
            },
            {
                x: 7,
                y: 6
            },
            {
                x: 8,
                y: 7
            },
            {
                x: 9,
                y: 8
            }
        ]
    },
    {
        id: 8,
        name: 'Phase 9',
        description: 'Bridging & Compensation',
        number: 9,
        colour: 'pink',
        bonds: [
            {
                x: 3,
                y: 8
            },
            {
                x: 3,
                y: 9
            },
            {
                x: 4,
                y: 7
            },
            {
                x: 4,
                y: 8
            },
            {
                x: 4,
                y: 9
            },
            {
                x: 5,
                y: 7
            },
            {
                x: 5,
                y: 8
            },
            {
                x: 5,
                y: 9
            },
            {
                x: 6,
                y: 8
            },
            {
                x: 6,
                y: 9
            },
            {
                x: 7,
                y: 9
            }
        ]
    },
    {
        id: 9,
        name: 'Blanks',
        description: '',
        number: 10,
        colour: 'white',
        bonds: [
            {
                x: 5,
                y: 3
            },
            {
                x: 6,
                y: 3
            }
        ]
    }
]

export default phases;