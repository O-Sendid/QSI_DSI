export default [
    {
      label: "Nombre de billet NFT vendu par jour",
      value: 0,
      type: 'barre',
      data: [
        { x: "2022-01-01", y: 50 },
        { x: "2022-01-02", y: 55 },
        { x: "2022-01-03", y: 60 },
        { x: "2022-01-04", y: 65 },
        { x: "2022-01-05", y: 70 },
        { x: "2022-01-06", y: 75 },
        { x: "2022-01-07", y: 80 }
      ],
    },
    {
      label: "Valeur de billet vendu par jour",
      value: 80,
      type: 'ligne',
      data: [
        { x: "2022-01-01", y: 10 },
        { x: "2022-01-02", y: 20 },
        { x: "2022-01-03", y: 15 },
        { x: "2022-01-04", y: 25 },
        { x: "2022-01-05", y: 30 },
        { x: "2022-01-06", y: 35 },
        { x: "2022-01-07", y: 40 }
      ]
    },
    {
      label: "Taux d’utilisation, pour chaque concert non annulé",
      value: 80,
      type:'camembert',
      data: [
        { x: 0, y: 50 },
        { x: 1, y: 40 },
        { x: 2, y: 30 },
        { x: 3, y: 20 },
        { x: 4, y: 10 }
      ]
    },
    {
      label: "Taux de billets transférés",
      value: 80,
      type:'nombre',
      data: [
        { x: 0, y: 50 },
        { x: 1, y: 40 },
        { x: 2, y: 30 },
        { x: 3, y: 20 },
        { x: 4, y: 10 }
      ]
    }
  ];