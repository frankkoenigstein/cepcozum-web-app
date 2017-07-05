import { IPhoneOption } from 'app/iphone-option';
import { IProblem } from 'app/irepair-option';

export interface IRepairTable {
  phoneOptions: IPhoneOption[];
  problems: IProblem[];
}

export const repairTable: IRepairTable = {
  problems: [{
    id: 1,
    description: 'Ekran Kırık'
  }, {
    id: 2,
    description: 'Batarya (Pil)'
  }, {
    id: 3,
    description: 'Kilit / Orta Tuş'
  }, {
    id: 4,
    description: 'Şarj Problemi'
  }, {
    id: 5,
    description: 'Hoparlör / Ahize'
  }, {
    id: 6,
    description: 'Kamera Problemi'
  }, {
    id: 7,
    description: 'Kasa Değişimi'
  }, {
    id: 8,
    description: 'LCD Problemi'
  }, {
    id: 9,
    description: 'Kırık Dokunmatik'
  }],
  phoneOptions: [
    {
      'id': 1,
      'description': 'iPhone 4',
      repairOptions: [{
        'problemId': 1,
        'price': 150,
        'currency': '₺'
      }, {
        problemId: 2,
        'price': 90,
        'currency': '₺'
      }, {
        problemId: 3,
        'price': 105,
        'currency': '₺'
      }, {
        problemId: 4,
        'price': 95,
        'currency': '₺'
      }, {
        problemId: 5,
        'price': 100,
        'currency': '₺'
      }, {
        problemId: 6,
        'price': 100,
        'currency': '₺'
      }]
    }, {
      'id': 2,
      'description': 'iPhone 4s',
      repairOptions: [{
        'problemId': 1,
        'price': 155,
        'currency': '₺'
      }, {
        problemId: 2,
        'price': 90,
        'currency': '₺'
      }, {
        problemId: 3,
        'price': 105,
        'currency': '₺'
      }, {
        problemId: 4,
        'price': 95,
        'currency': '₺'
      }, {
        problemId: 5,
        'price': 95,
        'currency': '₺'
      }, {
        problemId: 6,
        'price': 100,
        'currency': '₺'
      }]
    }, {
      'id': 3,
      'description': 'iPhone 5',
      repairOptions: [{
        'problemId': 1,
        'price': 240,
        'currency': '₺'
      }, {
        problemId: 2,
        'price': 105,
        'currency': '₺'
      }, {
        problemId: 3,
        'price': 125,
        'currency': '₺'
      }, {
        problemId: 4,
        'price': 105,
        'currency': '₺'
      }, {
        problemId: 5,
        'price': 95,
        'currency': '₺'
      }, {
        problemId: 6,
        'price': 110,
        'currency': '₺'
      }, {
        problemId: 7,
        'price': 240,
        'currency': '₺'
      }]
    }, {
      'id': 4,
      'description': 'iPhone 5S',
      repairOptions: [{
        'problemId': 1,
        'price': 250,
        'currency': '₺'
      }, {
        problemId: 2,
        'price': 105,
        'currency': '₺'
      }, {
        problemId: 3,
        'price': 125,
        'currency': '₺'
      }, {
        problemId: 4,
        'price': 105,
        'currency': '₺'
      }, {
        problemId: 5,
        'price': 95,
        'currency': '₺'
      }, {
        problemId: 6,
        'price': 110,
        'currency': '₺'
      }, {
        problemId: 7,
        'price': 250,
        'currency': '₺'
      }]
    }, {
      'id': 5,
      'description': 'iPhone 5C',
      repairOptions: [{
        'problemId': 1,
        'price': 250,
        'currency': '₺'
      }, {
        problemId: 2,
        'price': 105,
        'currency': '₺'
      }, {
        problemId: 3,
        'price': 125,
        'currency': '₺'
      }, {
        problemId: 4,
        'price': 105,
        'currency': '₺'
      }, {
        problemId: 5,
        'price': 95,
        'currency': '₺'
      }, {
        problemId: 6,
        'price': 110,
        'currency': '₺'
      }, {
        problemId: 7,
        'price': 200,
        'currency': '₺'
      }]
    }, {
      'id': 6,
      'description': 'iPhone 6',
      repairOptions: [{
        'problemId': 1,
        'price': 350,
        'currency': '₺'
      }, {
        problemId: 2,
        'price': 165,
        'currency': '₺'
      }, {
        problemId: 3,
        'price': 185,
        'currency': '₺'
      }, {
        problemId: 4,
        'price': 160,
        'currency': '₺'
      }, {
        problemId: 5,
        'price': 150,
        'currency': '₺'
      }, {
        problemId: 6,
        'price': 210,
        'currency': '₺'
      }, {
        problemId: 7,
        'price': 320,
        'currency': '₺'
      }]
    }, {
      'id': 7,
      'description': 'iPhone 6 Plus',
      repairOptions: [{
        'problemId': 1,
        'price': 450,
        'currency': '₺'
      }, {
        problemId: 2,
        'price': 200,
        'currency': '₺'
      }, {
        problemId: 3,
        'price': 185,
        'currency': '₺'
      }, {
        problemId: 4,
        'price': 160,
        'currency': '₺'
      }, {
        problemId: 5,
        'price': 150,
        'currency': '₺'
      }, {
        problemId: 6,
        'price': 210,
        'currency': '₺'
      }, {
        problemId: 7,
        'price': 350,
        'currency': '₺'
      }]
    }, {
      'id': 8,
      'description': 'iPhone 6S',
      repairOptions: [{
        'problemId': 1,
        'price': 550,
        'currency': '₺'
      }, {
        problemId: 2,
        'price': 180,
        'currency': '₺'
      }, {
        problemId: 3,
        'price': 190,
        'currency': '₺'
      }, {
        problemId: 4,
        'price': 180,
        'currency': '₺'
      }, {
        problemId: 5,
        'price': 160,
        'currency': '₺'
      }, {
        problemId: 6,
        'price': 210,
        'currency': '₺'
      }, {
        problemId: 7,
        'price': 360,
        'currency': '₺'
      }]
    }, {
      'id': 9,
      'description': 'iPhone 6S Plus',
      repairOptions: [{
        'problemId': 1,
        'price': 700,
        'currency': '₺'
      }, {
        problemId: 2,
        'price': 200,
        'currency': '₺'
      }, {
        problemId: 3,
        'price': 190,
        'currency': '₺'
      }, {
        problemId: 4,
        'price': 180,
        'currency': '₺'
      }, {
        problemId: 5,
        'price': 160,
        'currency': '₺'
      }, {
        problemId: 6,
        'price': 210,
        'currency': '₺'
      }, {
        problemId: 7,
        'price': 390,
        'currency': '₺'
      }]
    }, {
      'id': 10,
      'description': 'Samsung Note 2',
      repairOptions: [{
        'problemId': 8,
        'price': 450,
        'currency': '₺'
      }, {
        problemId: 5,
        'price': 120,
        'currency': '₺'
      }, {
        problemId: 6,
        'price': 120,
        'currency': '₺'
      }]
    }, {
      'id': 11,
      'description': 'Samsung Note 3',
      repairOptions: [{
        'problemId': 8,
        'price': 580,
        'currency': '₺'
      }, {
        problemId: 5,
        'price': 120,
        'currency': '₺'
      }, {
        problemId: 6,
        'price': 140,
        'currency': '₺'
      }]
    }, {
      'id': 12,
      'description': 'Samsung Note 4',
       repairOptions: [{
        'problemId': 9,
        'price': 270,
        'currency': '₺'
      }]
    }, {
      'id': 13,
      'description': 'Samsung S3',
     repairOptions: [{
        'problemId': 8,
        'price': 340,
        'currency': '₺'
      }, {
        problemId: 5,
        'price': 110,
        'currency': '₺'
      }, {
        problemId: 6,
        'price': 120,
        'currency': '₺'
      }]
    }, {
      'id': 14,
      'description': 'Samsung S4 Mini',
      repairOptions: [{
        'problemId': 8,
        'price': 350,
        'currency': '₺'
      }, {
        problemId: 5,
        'price': 110,
        'currency': '₺'
      }, {
        problemId: 6,
        'price': 120,
        'currency': '₺'
      }]
    }, {
      'id': 14,
      'description': 'Samsung S4',
      repairOptions: [{
        'problemId': 8,
        'price': 360,
        'currency': '₺'
      }, {
        problemId: 5,
        'price': 110,
        'currency': '₺'
      }, {
        problemId: 6,
        'price': 120,
        'currency': '₺'
      }]
    }, {
      'id': 14,
      'description': 'Samsung S5',
     repairOptions: [{
        'problemId': 8,
        'price': 400,
        'currency': '₺'
      }]
    }, {
      'id': 15,
      'description': 'Samsung S5 Mini',
      repairOptions: [{
        'problemId': 8,
        'price': 530,
        'currency': '₺'
      }]
    }, {
      'id': 14,
      'description': 'Samsung S6',
      repairOptions: [{
        'problemId': 8,
        'price': 600,
        'currency': '₺'
      }]
    }
  ]
};
