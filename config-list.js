const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')
const CONFIG = require('../config-json.js')

let feedList = [
  {
    title: '彼得森評3C',
    feedID: 'Petersun',
    homepageURL: 'https://www.youtube.com/channel/UCl9BPXjyEmA0q6IrQvsEazA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '好機車',
    feedID: 'HOWGG',
    homepageURL: 'https://www.youtube.com/channel/UCZzu2JGOMNNz-UYZ7TERDNg',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'Huan 聊3C',
    feedID: 'huan2322',
    homepageURL: 'https://www.youtube.com/channel/UCpmx8TiMv9yR1ncyldGyyVA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '希治閣【遊戲情報科】',
    feedID: 'ScaryplayTTV',
    homepageURL: 'https://www.youtube.com/channel/UCk25FUc8pLiP3A6Zniknxbg',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '零度解说',
    feedID: 'lingdujieshuo',
    homepageURL: 'https://www.youtube.com/channel/UCvijahEyGtvMpmMHBu4FS2w',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '我是阿皮啊 聊 3C',
    feedID: 'user-sy2bg2vj4v',
    homepageURL: 'https://www.youtube.com/channel/UCoZ9EFEofFgyRCdh5tPM2yw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  { // <outline type="rss" text="游戲指南針++$0414-1925$" title="游戲指南針++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCVjXB6QUf_aZ_FninmssCOg" htmlUrl="https://www.youtube.com/channel/UCVjXB6QUf_aZ_FninmssCOg"/>
    title: '軒少改機頻道',
    feedID: 'HinSiu2',
    homepageURL: 'https://www.youtube.com/channel/UCSlrYjn39D7GndyrfObHljQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  { // <outline type="rss" text="游戲指南針++$0414-1925$" title="游戲指南針++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCVjXB6QUf_aZ_FninmssCOg" htmlUrl="https://www.youtube.com/channel/UCVjXB6QUf_aZ_FninmssCOg"/>
    title: '陳寗',
    feedID: 'NingSelect',
    homepageURL: 'https://www.youtube.com/channel/UCwxkPMOdYr6MxKjyUPWCOuQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  { // <outline type="rss" text="游戲指南針++$0414-1925$" title="游戲指南針++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCVjXB6QUf_aZ_FninmssCOg" htmlUrl="https://www.youtube.com/channel/UCVjXB6QUf_aZ_FninmssCOg"/>
    title: '林亦LYi 聊 3C',
    feedID: 'lyi',
    homepageURL: 'https://www.youtube.com/channel/UC4dtpugIYK56S_7btf5a-iQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  { // <outline type="rss" text="游戲指南針++$0414-1925$" title="游戲指南針++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCVjXB6QUf_aZ_FninmssCOg" htmlUrl="https://www.youtube.com/channel/UCVjXB6QUf_aZ_FninmssCOg"/>
    title: '無遠弗屆教學教室',
    feedID: 'wuyuanweb',
    homepageURL: 'https://www.youtube.com/channel/UCXDP8XCQyoldEiaIRhHz-Vw',
    itemFilters: ItemFiltersPreset.between6minTo60Min,
  },
  { 
    title: '萊丘 Laichu 聊 3C',
    feedID: 'LaichuTV',
    homepageURL: 'https://www.youtube.com/channel/UCHSFWd7MUGTY7xRdiGeMALw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  { 
    title: '玄离199 聊 軟體',
    feedID: 'XuanLi199',
    homepageURL: 'https://www.youtube.com/channel/UCMFDB701nr3qHVH3eYvujKA',
    itemFilters: ItemFiltersPreset.between1minTo10Min,
  },
  {
    title: 'Emmy追劇時間 看財經',
    feedID: 'emmytw',
    homepageURL: 'https://www.youtube.com/channel/UCUkwvRrpvWkocNdk9qIpRSw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '卡提諾狂新聞',
    feedID: 'CrazyNews9487',
    homepageURL: 'https://www.youtube.com/channel/UCVF3bTd3dxM4IfOMFCbNADA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '真觀點 談政治',
    feedID: 'zhenguandian',
    homepageURL: 'https://www.youtube.com/channel/UCAwVpzgGI9sEu4O4ZlB5ZWQ',
    itemFilters: [
      ItemFiltersPreset.between10minTo60Min,
    ],
  },
  // 滿了！！！
]

// 

// --------------------------------------

if (CONFIG.debug) {
  feedList = [
    {
      title: '志祺七七 X 圖文不符',
      feedID: 'shasha77',
      homepageURL: 'https://www.youtube.com/channel/UCiWXd0nmBjlKROwzMyPV-Nw',
      itemFilters: [
        ItemFiltersPreset.between3minTo30Min,
        (item) => { return (item.title.endsWith('｜志祺七七')) }
      ], // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
      maxItems: 3
    },
  ]
}


module.exports = feedList
