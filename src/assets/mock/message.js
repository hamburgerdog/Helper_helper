const helpMsgs = [
  {
    id: 0,
    title: '家教 英语一定要好女孩子！！！家教 英语一定要好女孩子！！！',
    className: '找队友',
    detailMsg:
      '家教 英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！',
  },
  {
    id: 1,
    title: '家教 英语一定要好女孩子！！！家教 英语一定要好女孩子！！！',
    className: '寻物启事',
    detailMsg:
      '家教 英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！',
  },
  {
    id: 2,
    title: '家教 英语一定要好女孩子！！！家教 英语一定要好女孩子！！！',
    className: '失物招领',
    detailMsg:
      '家教 英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！',
  },
  {
    id: 3,
    title: '家教 英语一定要好女孩子！！！家教 英语一定要好女孩子！！！',
    className: '找队友',
    detailMsg:
      '家教 英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！',
  },
  {
    id: 4,
    title: '家教 英语一定要好女孩子！！！家教 英语一定要好女孩子！！！',
    className: '找队友',
    detailMsg:
      '家教 英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！',
  },
  {
    id: 5,
    title: '家教 英语一定要好女孩子！！！家教 英语一定要好女孩子！！！',
    className: '找队友',
    detailMsg:
      '家教 英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！',
  },
];
const asideMsgs = [
  {
    id: 0,
    title: '家教 英语一定要好女孩子！！！家教 英语一定要好女孩子！！！',
    className: '化妆品',
    detailMsg:
      '家教 英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！',
  },
  {
    id: 1,
    title: '家教 英语一定要好女孩子！！！家教 英语一定要好女孩子！！！',
    className: '衣服',
    detailMsg:
      '家教 英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！',
  },
  {
    id: 2,
    title: '家教 英语一定要好女孩子！！！家教 英语一定要好女孩子！！！',
    className: '生活类',
    detailMsg:
      '家教 英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！',
  },
  {
    id: 3,
    title: '家教 英语一定要好女孩子！！！家教 英语一定要好女孩子！！！',
    className: '学习类',
    detailMsg:
      '家教 英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！',
  },
  {
    id: 4,
    title: '家教 英语一定要好女孩子！！！家教 英语一定要好女孩子！！！',
    className: '其他',
    detailMsg:
      '家教 英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！',
  },
  {
    id: 5,
    title: '家教 英语一定要好女孩子！！！家教 英语一定要好女孩子！！！',
    className: '',
    detailMsg:
      '家教 英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！家教英语一定要好女孩子！！！家教 英语一定要好女孩子！！！',
  },
];

const message = {
  helpMsgs,
  asideMsgs,
};

export default message;
