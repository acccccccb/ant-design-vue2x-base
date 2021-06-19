const Mock = require('mockjs');
const Random = Mock.Random;

Mock.setup({
    timeout: 400,
});
Mock.mock('/list', 'get', {
    success: true,
    'data|100': [
        {
            'id|+1': 1,
            name: () => Random.cname(),
            'height:|140-210': 140,
            'weight:|40-200.1"': 40,
            'age:|12-60': 12,
            'position:|1': ['前锋', '中锋', '后卫', '守门员'],
            'rank:|1-100': 1,
            'price:|2000-5000000': 2000,
            headImg: () => Random.image(100),
            checked: false,
            disabled: false,
        },
    ],
});
Mock.mock('/list2', 'get', () => {
    const arr = [];
    const positions = ['前锋', '中锋', '后卫', '守门员'];

    for (let i = 0; i < 100; i++) {
        arr.push({
            id: i + 1,
            name: Random.cname(),
            height: Random.integer(140, 210),
            weight: Random.float(80, 300, 0, 0),
            age: Random.integer(12, 60),
            position: positions[Random.integer(0, 3)],
            rank: Random.integer(30, 100),
            price: Random.integer(2000, 5000000),
            headImg: Random.image(100),
            checked: false,
            disabled: false,
        });
    }
    return {
        success: true,
        data: arr,
    };
});

export default Mock;
