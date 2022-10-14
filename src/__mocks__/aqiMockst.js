const cityMockData = [
  { id: 'c9b3270e-46c9-49de-8a4b-f534daab03e5', aqi: 182, city: 'Beijing' },
  { id: '912a7099-79bd-4689-89d5-7f1f0500cc2f', aqi: 52, city: 'Nanjing' },
  { id: '5fa6d0a5-87d0-4f06-885b-cc98ea0fb264', aqi: 72, city: 'Shanghai' },
  { id: 'dc6bdbf0-aaaf-4929-8ba6-fe72dd6d66fc', aqi: 199, city: 'Tianjin' },
  { id: '7ffa20d6-6619-4598-bf33-d70f917398d3', aqi: 63, city: 'Hangzhou' },
  { id: '6f734a98-3c7f-4013-b4e7-8ccdeb12ecfd', aqi: 55, city: 'Shantou' },
  { id: 'db11f6ca-4e9c-4194-80bd-0f71e6b12ec8', aqi: 74, city: 'Changzhou' },
  { id: 'aa42207a-6200-4489-bf9d-cd1d561aca16', aqi: 127, city: 'Jinan' },
  { id: '816404dc-71e7-464e-9f9a-34610387f856', aqi: 97, city: 'Shenzhen' },
  { id: '1674527d-58fc-4969-9a37-0db70412c741', aqi: 165, city: 'Dongli' },
];

export const ShanghaiData = {
  status: 'ok',
  data: {
    aqi: 52,
    idx: 1485,
    attributions: [
      {
        url: 'http://hbt.jiangsu.gov.cn/',
        name: 'Jiangsu Environmental Protection public network (江苏省城市空气PM2.5等试运行监测数据平台)',
      },
      {
        url: 'http://222.190.111.117:8023/',
        name: 'Nanjing Air Quality Distribution System (南京空气质量发布系统)',
      },
      {
        url: 'https://waqi.info/',
        name: 'World Air Quality Index Project',
      },
    ],
    city: {
      geo: [
        32.060255,
        118.796877,
      ],
      name: 'Nanjing (南京)',
      url: 'https://aqicn.org/city/nanjing',
      location: '',
    },
    dominentpol: 'o3',
    iaqi: {
      co: {
        v: 2.9,
      },
      h: {
        v: 46,
      },
      no2: {
        v: 3.2,
      },
      o3: {
        v: 51.9,
      },
      p: {
        v: 1019,
      },
      pm10: {
        v: 27,
      },
      pm25: {
        v: 21,
      },
      so2: {
        v: 1.6,
      },
      t: {
        v: 23,
      },
      w: {
        v: 2.5,
      },
    },
    time: {
      s: '2022-10-14 13:00:00',
      tz: '+08:00',
      v: 1665752400,
      iso: '2022-10-14T13:00:00+08:00',
    },
    forecast: {
      daily: {
        o3: [
          {
            avg: 2,
            day: '2022-10-12',
            max: 22,
            min: 1,
          },
          {
            avg: 2,
            day: '2022-10-13',
            max: 20,
            min: 1,
          },
          {
            avg: 1,
            day: '2022-10-14',
            max: 16,
            min: 1,
          },
          {
            avg: 2,
            day: '2022-10-15',
            max: 18,
            min: 1,
          },
          {
            avg: 6,
            day: '2022-10-16',
            max: 25,
            min: 1,
          },
          {
            avg: 8,
            day: '2022-10-17',
            max: 22,
            min: 4,
          },
          {
            avg: 4,
            day: '2022-10-18',
            max: 17,
            min: 2,
          },
          {
            avg: 1,
            day: '2022-10-19',
            max: 1,
            min: 1,
          },
        ],
        pm10: [
          {
            avg: 24,
            day: '2022-10-13',
            max: 28,
            min: 19,
          },
          {
            avg: 30,
            day: '2022-10-14',
            max: 46,
            min: 19,
          },
          {
            avg: 27,
            day: '2022-10-15',
            max: 40,
            min: 19,
          },
          {
            avg: 31,
            day: '2022-10-16',
            max: 46,
            min: 19,
          },
          {
            avg: 42,
            day: '2022-10-17',
            max: 46,
            min: 28,
          },
          {
            avg: 17,
            day: '2022-10-18',
            max: 28,
            min: 10,
          },
          {
            avg: 23,
            day: '2022-10-19',
            max: 28,
            min: 16,
          },
          {
            avg: 23,
            day: '2022-10-20',
            max: 28,
            min: 19,
          },
        ],
        pm25: [
          {
            avg: 74,
            day: '2022-10-13',
            max: 82,
            min: 68,
          },
          {
            avg: 77,
            day: '2022-10-14',
            max: 89,
            min: 68,
          },
          {
            avg: 79,
            day: '2022-10-15',
            max: 89,
            min: 68,
          },
          {
            avg: 80,
            day: '2022-10-16',
            max: 89,
            min: 68,
          },
          {
            avg: 107,
            day: '2022-10-17',
            max: 138,
            min: 68,
          },
          {
            avg: 54,
            day: '2022-10-18',
            max: 68,
            min: 30,
          },
          {
            avg: 67,
            day: '2022-10-19',
            max: 82,
            min: 42,
          },
          {
            avg: 70,
            day: '2022-10-20',
            max: 82,
            min: 42,
          },
        ],
        uvi: [
          {
            avg: 0,
            day: '2022-10-13',
            max: 0,
            min: 0,
          },
          {
            avg: 1,
            day: '2022-10-14',
            max: 5,
            min: 0,
          },
          {
            avg: 1,
            day: '2022-10-15',
            max: 6,
            min: 0,
          },
          {
            avg: 1,
            day: '2022-10-16',
            max: 6,
            min: 0,
          },
          {
            avg: 1,
            day: '2022-10-17',
            max: 5,
            min: 0,
          },
          {
            avg: 1,
            day: '2022-10-18',
            max: 6,
            min: 0,
          },
        ],
      },
    },
    debug: {
      sync: '2022-10-14T14:28:50+09:00',
    },
  },
};

export default cityMockData;
